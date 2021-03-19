import SocketIO from "socket.io";
import { BaseRoom } from "../BaseRoom";
import { RedFlagDecks, Resource } from "../../ResourceLoader";
import { GameTypes } from "../GameTypes";

export class RedFlags extends BaseRoom {

    winPoints: number = 1;

    playerPoints: Map<number, number> = new Map();
    playerNames: Map<number, string> = new Map();
    playerStatus: Map<number, string> = new Map();
    playSockets: Map<number, SocketIO.Socket> = new Map();

    playCardsPerks: Map<number, Card[]> = new Map();
    playCardsFlags: Map<number, Card[]> = new Map();

    activeDeck: RedFlagData | null = null;
    cloneDeck: RedFlagData | null = null;

    currentDaterName: string = "";
    currentDaterId: number = 0;
    currentDaterIndex: number = 0;

    playersselecting: boolean = true;
    perkSelection: boolean = true;
    showcards: boolean = false;
    canChoose: boolean = false;
    hideNames: boolean = true;

    tableCards: Map<number, TableCardRow> = new Map();

    highlightPlayer: number = -1;

    constructor(roomId: number, type: GameTypes, maxPlayers: number, socket: SocketIO.Server, resourceloader: Resource) {
        super(roomId, type, maxPlayers, socket, resourceloader);
    }

    public includePlayer(pid: number, socket: SocketIO.Socket): void {
        this.playerIds.push(pid);
        this.numPlayers++;

        this.playerPoints.set(pid, 0);
        this.playerNames.set(pid, "Player: " + pid.toString());
        this.playerStatus.set(pid, "");
        this.playSockets.set(pid, socket);

        this, this.requestUpdate();
    }

    public handleLeave(pid: number): void {
        this.playerIds.splice(this.playerIds.indexOf(pid), 1);
        this.numPlayers--;

        this.playerPoints.delete(pid);
        this.playerNames.delete(pid);
        this.playerStatus.delete(pid);
        this.playSockets.delete(pid);

        this.playCardsPerks.delete(pid);
        this.playCardsFlags.delete(pid);

        if (this.currentDaterId == pid) {
            this.nextDater();
            this.restockCards();
        }
        this.requestUpdate();
    }

    public requestUpdate(): void {
        var data: gameData = new gameData();

        for(const [key, value] of this.playerPoints.entries()) {
            data.players.push(new PlayerData(this.playerNames.get(key)!, value, this.playerStatus.get(key)!, key == this.highlightPlayer));
        }

        data.progress = this.inProgress;
        data.currentDaterId = this.currentDaterId;
        data.currentDaterName = this.currentDaterName;
        data.playersselecting = this.playersselecting;
        data.perkSelection = this.perkSelection;
        data.showcards = this.showcards;
        data.canChoose = this.canChoose;
        data.hideNames = this.hideNames;

        for(const [key, value] of this.tableCards.entries()) {
            data.GameTableCards.push(value);
        }

        this.socket.emit("GameChannel" + this.roomId, data);
    }

    public requestPrivate(pid: number): void {
        var data = new PrivateData();

        data.flags = this.playCardsFlags.get(pid)!;
        data.perks = this.playCardsPerks.get(pid)!;

        data.responsibility = (this.currentDaterId != pid) ? this.playerIds[this.getNextPlayer(pid)] : -1;

        this.playSockets.get(pid)?.emit("PrivateData", data);
    }

    public getData(data: any, socket: SocketIO.Socket): void {
        var pid = data.pid;
        switch (data.type) {
            case "INFOCHANGE":
                this.playerNames.set(pid, data.name);
                this.requestUpdate();
                break;
            case "GAMESTART":
                if (!this.inProgress) {
                    this.winPoints = data.points;
                    this.hideNames = data.hideNames;

                    this.generateDeck(data.decks);

                    this.startGame();
                }
                break;
            case "SOCKETCHANGE":
                this.playSockets.set(pid, socket);
                break;
            case "CARDSELECTION":
                this.submitCard(pid, data.card, data.cdata);
                break;
            case "WINNERCHOOSE":
                this.playerPoints.set(data.winner, this.playerPoints.get(data.winner)! + 1);
                var self = this;

                if (this.playerPoints.get(data.winner)! < this.winPoints) {

                    new Promise<void>((resolve, reject) => {
                        self.highlightPlayer = data.winner;
                        self.canChoose = false;
                        self.requestUpdate();
                        setTimeout(function () {
                            self.highlightPlayer = -1;
                            resolve();
                        }, 5000);
                    }).then((resolve) => {
                        self.restockCards();
                        self.nextDater();
                        self.requestUpdate();
                        self.requestAllPrivate();
                    });

                } else {
                    new Promise<void>((resolve, reject) => {
                        self.highlightPlayer = data.winner;
                        self.playerStatus.set(data.winner, "Winner");
                        self.canChoose = false;
                        self.requestUpdate();
                        setTimeout(function () {
                            self.highlightPlayer = -1;
                            resolve();
                        }, 5000);
                    }).then((resolve) => {
                        self.endGame();
                        self.requestUpdate();
                        self.requestAllPrivate();
                    })
                }
                break;
        }
    }

    //end of mandatory
    private startGame() {
        this.inProgress = true;

        this.playCardsPerks.clear();
        this.playCardsFlags.clear();

        for (let p of this.playerIds) {
            this.setNewHand(p);
            this.requestPrivate(p)
            this.playerStatus.set(p, "Selecting");
            this.playerPoints.set(p, 0);
        }

        this.currentDaterId = this.playerIds[0];
        this.currentDaterName = this.playerNames.get(this.currentDaterId)!;

        this.playerStatus.set(this.currentDaterId, "Dater");
        this.requestUpdate();
    }

    private endGame() {
        this.inProgress = false;

        this.playCardsPerks.clear();
        this.playCardsFlags.clear();

        for (let p of this.playerIds) {
            this.playerStatus.set(p, "");
            this.playerPoints.set(p, 0);
        }

        this.currentDaterName = "";
        this.currentDaterId = 0;
        this.currentDaterIndex = 0;

        this.playersselecting = true;
        this.perkSelection = true;
        this.showcards = false;
        this.canChoose = false;

        this.tableCards.clear();

        this.highlightPlayer = -1;
    }

    private setNewHand(pid: number) {
        var perks: Card[] = []
        for (var x = 0; x < 4; x++) {
            perks.push(this.drawCard(this.activeDeck!.perks, this.cloneDeck!.perks));
        }
        this.playCardsPerks.set(pid, perks);

        var flags: Card[] = []
        for (var x = 0; x < 3; x++) {
            flags.push(this.drawCard(this.activeDeck!.flags, this.cloneDeck!.flags))
        }
        this.playCardsFlags.set(pid, flags);
    }

    private drawCard(array: string[], clone: string[]): Card {
        var id: number = parseInt(clone.splice(Math.floor(Math.random() * clone.length - 1), 1)[0]);

        if (clone.length <= 0) {
            clone = this.resetCloneDeckArray(array);
        }

        return new Card(array[id]);
    }

    private nextDater() {
        this.currentDaterIndex++;
        if (this.currentDaterIndex >= this.playerIds.length) {
            this.currentDaterIndex = 0;
        }

        for (let p of this.playerIds) {
            this.playerStatus.set(p, "Selecting");
        }

        this.currentDaterId = this.playerIds[this.currentDaterIndex];
        this.currentDaterName = this.playerNames.get(this.currentDaterId)!;

        this.playerStatus.set(this.currentDaterId, "Dater");

        this.playersselecting = true;
        this.perkSelection = true;
        this.showcards = false;
        this.canChoose = false;

        this.tableCards.clear();
    }

    private restockCards() {
        for (let p of this.playerIds) {

            var flags: Card[] = this.playCardsFlags.get(p)!;
            while (flags.length < 3) {
                flags.push(this.drawCard(this.activeDeck!.flags, this.cloneDeck!.flags));
            }

            var perks: Card[] = this.playCardsPerks.get(p)!;
            while (perks.length < 4) {
                perks.push(this.drawCard(this.activeDeck!.perks, this.cloneDeck!.perks));
            }

            this.playCardsFlags.set(p, flags);
            this.playCardsPerks.set(p, perks);

            this.requestPrivate(p);
        }
    }

    private submitCard(pid: number, cardindex: number, carddata: string) {
        var cards: TableCardRow | undefined = undefined;

        if (this.perkSelection) {
            cards = this.tableCards.get(pid);

            if (cards == null) {
                cards = new TableCardRow();
                cards.pid = pid;
                cards.playername = this.playerNames.get(pid)!;
                cards.perks = [];
                cards.flags = [];
                cards.flagsbyname = "";
                cards.flagspid = -1;
            }

            if (cards.perks.length < 2) {
                //add to table
                var card = this.playCardsPerks.get(pid)![cardindex];

                card.content = card.content.replace("_____", carddata);

                cards.perks.push(card);

                //remove from hand
                this.playCardsPerks.get(pid)!.splice(cardindex, 1);
            }

            this.tableCards.set(pid, cards);
        } else {
            cards = this.tableCards.get(this.playerIds[this.getNextPlayer(pid)])!;

            if (cards.flags.length < 1) {
                //add to table
                var card = this.playCardsFlags.get(pid)![cardindex];
                cards.flags.push(card);

                card.content = card.content.replace("_____", carddata);

                //remove from hand
                this.playCardsFlags.get(pid)!.splice(cardindex, 1);

                cards.flagspid = pid;
                cards.flagsbyname = this.playerNames.get(pid)!;
            }

            this.tableCards.set(this.playerIds[this.getNextPlayer(pid)], cards);
        }

        //update status
        if (this.perkSelection) {
            if (cards.perks.length == 2) {
                this.playerStatus.set(pid, "");
            }
        } else {
            if (cards.flags.length == 1) {
                this.playerStatus.set(pid, "");
            }
        }

        //check for turn change
        var goNext: boolean = true;
        for(const [key, value] of this.playerStatus.entries()) {
            if (value != "" && value != "Dater") {
                goNext = false;
                break;
            }
        }

        if (goNext) {
            if (this.perkSelection) {
                this.perkSelection = false;
                for (let p of this.playerIds) {
                    this.playerStatus.set(p, "Selecting");
                    this.requestPrivate(p);
                }
                this.playerStatus.set(this.currentDaterId, "Dater");
            } else {
                this.playersselecting = false;
                this.showcards = true;
                this.canChoose = true;
            }
        }

        this.requestPrivate(pid);
        this.requestUpdate();
    }

    private getNextPlayer(pid: number): number {
        var index: number = this.playerIds.indexOf(pid) + 1;
        if (index >= this.playerIds.length) {
            index = 0;
        }
        if (index == this.currentDaterIndex) {
            index++;
            if (index >= this.playerIds.length) {
                index = 0;
            }
        }
        return index;
    }

    private generateDeck(decks: string[]) {
        this.activeDeck = new RedFlagData();
        this.activeDeck.flags = [];
        this.activeDeck.perks = [];

        var resourceType: RedFlagDecks = this.resources as RedFlagDecks;

        for (let name of decks) {
            var d = resourceType.getDeckFromString(name);

            if (d != null) {
                this.activeDeck.flags = this.activeDeck.flags.concat(d.flags);
                this.activeDeck.perks = this.activeDeck.perks.concat(d.perks);
            }
        }

        if (this.activeDeck.flags.length <= 0 || this.activeDeck.perks.length <= 0) {
            this.activeDeck.flags.concat(resourceType.baseDeck.flags);
            this.activeDeck.perks.concat(resourceType.baseDeck.perks);
        }

        this.cloneDeck = new RedFlagData();
        this.cloneDeck.flags = this.resetCloneDeckArray(this.activeDeck.flags);
        this.cloneDeck.perks = this.resetCloneDeckArray(this.activeDeck.perks);
    }

    private resetCloneDeckArray(source: string[]): string[] {
        var arr: string[] = [];
        for (var a = 0; a < source.length; a++) {
            arr.push(a.toString());
        }
        return arr;
    }
}

export class gameData {
    players: PlayerData[] = [];
    progress: boolean = false;
    currentDaterId!: number;
    currentDaterName!: string;
    playersselecting!: boolean;
    perkSelection!: boolean;
    GameTableCards: TableCardRow[] = [];
    showcards!: boolean;
    canChoose!: boolean;
    hideNames!: boolean;
}

export class PlayerData {
    name!: string;
    points!: number;
    status!: string;
    highlight!: boolean;
    constructor(name: string, points: number, status: string, high: boolean) {
        this.name = name;
        this.points = points;
        this.status = status;
        this.highlight = high;
    }
}

export class TableCardRow {
    pid!: number;
    playername!: string;
    perks!: Card[];
    flags!: Card[];
    flagsbyname!: string;
    flagspid!: number;
}

export class PrivateData {
    flags!: Card[];
    perks!: Card[];
    responsibility!: number;
}

export class Card {
    content: string;
    constructor(c: string) {
        this.content = c;
    }
}

export class RedFlagData {
    flags!: string[]
    perks!: string[]
}