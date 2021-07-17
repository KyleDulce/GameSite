import SocketIO from "socket.io";
import { Card, Resource, TraditionalDeck } from "../../ResourceLoader";
import { BaseRoom } from "../BaseRoom";
import { GameTypes } from "../GameTypes";

export class Poker extends BaseRoom {

    playerSockets: Map<number, SocketIO.Socket>;
    playerListData: Map<number, PlayerData>;
    playerPrivateData: Map<number, PrivatePlayerData>;

    table: TableData;
    //settings
    usingBalance: boolean

    //decks
    loadedDeck: TraditionalDeck;
    usingDeck: TraditionalDeck;

    variant?: PokerVariant;
    stage: PokerStage = PokerStage.NONE;
    fiveDrawCompletedRound: boolean = false;

    startingPlayerTurn = -1;
    currentBettingPlayer = -1;

    constructor(roomId: number, type: GameTypes, maxPlayers: number, socket: SocketIO.Server, resourceloader: Resource) {
        super(roomId, type, maxPlayers, socket, resourceloader);

        this.playerSockets = new Map();
        this.playerListData = new Map();
        this.playerPrivateData = new Map();

        this.table = new TableData();

        this.variant = undefined;

        this.loadedDeck = this.resources as TraditionalDeck;
        this.usingDeck = TraditionalDeck.clone(this.loadedDeck);

        this.usingBalance = false;
    }

    public includePlayer(pid: number, socket: SocketIO.Socket): void {
        this.playerIds.push(pid);
        this.numPlayers++;
        this.playerSockets.set(pid, socket);

        this.playerListData.set(pid, new PlayerData(pid.toString()));
        this.playerPrivateData.set(pid, new PrivatePlayerData());
    }

    public handleLeave(pid: number): void {

        if (this.inProgress) {
            //handle game running

        }

        this.playerIds.splice(this.playerIds.indexOf(pid), 1);
        this.numPlayers--;
        this.playerSockets.delete(pid);

        this.playerListData.delete(pid);
        this.playerPrivateData.delete(pid);
    }

    public requestUpdate(): void {
        var emit: EmitData = new EmitData();

        for (let [key, value] of this.playerListData.entries()) {
            emit.players.push(value);
        }

        emit.table = this.table;
        emit.variant = PokerVariant[this.variant!];

        this.socket.emit("GameChannel" + this.roomId, emit);
    }

    public requestPrivate(pid: number): void {
        this.playerSockets.get(pid)?.emit("PrivateData", this.playerPrivateData.get(pid));
    }

    public getData(data: any, socket: SocketIO.Socket): void {
        var inputData = data as GivenData;

        switch (inputData.type) {
            case "START":
                this.startGame(inputData.data);
                break;
        }
    }

    private startGame(data: GameStartData) {
        this.variant = (<any>PokerVariant)[data.variant];
        this.usingBalance = data.startingBal != -1;

        if (this.usingBalance) {
            for (let p of this.playerIds) {
                this.setPlayerBalance(p, data.startingBal);
            }
        }

        this.stage = PokerStage.BETTING;
        this.nextBettingRound();
    }

    private endgame() {

        this.table = new TableData();

        this.loadedDeck = this.resources as TraditionalDeck;
        this.usingDeck = TraditionalDeck.clone(this.loadedDeck);

        this.usingBalance = false;
        this.fiveDrawCompletedRound = false;
        this.stage = PokerStage.NONE;

        for (let p of this.playerIds) {
            this.setPlayerBalance(p, 0);
            this.playerListData.set(p, new PlayerData(this.playerListData.get(p)!.name));
            this.playerPrivateData.set(p, new PrivatePlayerData());
        }

        this.startingPlayerTurn = -1;
        this.currentBettingPlayer = -1;
    }

    private resetTable() {
        var cardsToDraw: number = this.getNumCards();

        //go through each player
        for (let [pid, data] of this.playerPrivateData) {
            data.cards = []
            for (var x = 0; x < cardsToDraw; x++) {
                data.cards.push(this.drawCard());
            }
        }

        var numtableCards: number = this.getNumTableCards();
        this.table.cards = [];

        for (var x = 0; x < numtableCards; x++) {
            this.table.cards.push(this.drawCard());
        }
    }

    private drawCard(): Card {
        if (this.usingDeck.deck.length == 0) {
            this.resetDeck();
        }

        //get card
        var ranNum: number = Math.floor(Math.random() * (this.usingDeck.deck.length - 1))
        var card: Card = this.usingDeck.deck[ranNum];

        //remove card
        this.usingDeck.deck = this.usingDeck.deck.splice(ranNum, 1);

        return card;
    }

    private resetDeck() {
        this.usingDeck = TraditionalDeck.clone(this.loadedDeck);
    }

    private getNumCards(): number {
        switch (this.variant) {
            case PokerVariant.TEXAS:
                return 2;
            case PokerVariant.FIVE_DRAW:
                return 5;
            default:
                return 5;
        }
    }

    private getNumTableCards(): number {
        switch (this.variant) {
            case PokerVariant.TEXAS:
                return 5;
            default:
                return 0;
        }
    }

    private nextBettingRound() {

    }

    private nextPlayerTurn() {

    }

    private evaluateHands() {

    }

    private setPlayerBalance(pid: number, val: number) {
        this.playerPrivateData.get(pid)!.bal = val;
        this.playerListData.get(pid)!.curBal = val;
    }

    private getPlayerBalance(pid: number): number {
        return this.playerPrivateData.get(pid)!.bal;
    }

    private addPlayerBalance(pid: number, val: number) {
        var newBal = this.playerPrivateData.get(pid)!.bal + val;
        this.setPlayerBalance(pid, newBal);
    }

    private sendNextStep() {
        var self = this;
        switch (this.variant) {
            case PokerVariant.TEXAS:
                if (this.table.numRevealed == 5) {
                    this.evaluateHands();
                    setTimeout(function () {
                        if (self.playerIds.length <= 1) {
                            self.endgame();
                        } else {
                            self.nextBettingRound();
                        }
                    }, 5000);
                } else if (this.table.numRevealed >= 3) {
                    this.table.numRevealed++;
                    setTimeout(function () {
                        self.nextBettingRound();
                    }, 2000);
                } else {
                    this.table.numRevealed = 3;
                    setTimeout(function () {
                        self.nextBettingRound();
                    }, 2000);
                }
                break;

            case PokerVariant.FIVE_DRAW:
                if (this.stage == PokerStage.BETTING) {
                    if (this.fiveDrawCompletedRound) {
                        this.evaluateHands();
                        setTimeout(function () {
                            if (self.playerIds.length <= 1) {
                                self.endgame();
                            } else {
                                self.fiveDrawCompletedRound = false;
                                self.nextBettingRound();
                            }
                        }, 5000);
                    } else {
                        this.fiveDrawCompletedRound = true;
                        this.stage = PokerStage.DISCARDING;
                        this.requestUpdate();
                    }
                } else {
                    this.stage = PokerStage.BETTING;
                    this.nextBettingRound();
                }
                break;
        }
    }
}

class PlayerData {
    name: string
    curBal: number = 0
    curBet: number = 0
    turn: boolean = false;

    constructor(name: string) {
        this.name = name;
    }
}

class PrivatePlayerData {
    cards: Card[] = []
    bal: number = 0
    bet: number = 0
}

class TableData {
    jackpot: number = 0
    cards: Card[] = []
    numRevealed = 0
}

class EmitData {
    players: PlayerData[] = []
    table!: TableData
    variant!: string
}

class GivenData {
    type!: string
    data!: GameStartData
}

class GameStartData {
    variant!: string
    startingBal!: number
}

enum PokerVariant {
    TEXAS, FIVE_DRAW
}

enum PokerStage {
    NONE, BETTING, DISCARDING
}