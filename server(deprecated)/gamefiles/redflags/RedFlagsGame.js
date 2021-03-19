
function RedFlagsGame(roomId, maxPlayers, socket, resources) {
    this.players = 0;
    this.playerIds = [];
    this.inProgress = false;
    this.maxPlayers = maxPlayers;
    this.roomId = roomId;
    this.socket = socket;

    this.winPoints = -1;

    this.playerPoints = new Map();
    this.playerNames = new Map();
    this.playerStatus = new Map();
    this.playSockets = new Map();

    this.playCardsPerks = new Map();
    this.playCardsFlags = new Map();

    this.resources = resources;
    this.activeDeck = null;
    this.cloneDeck = null;

    this.currentDaterName = "";
    this.currentDaterId = 0;
    this.currentDaterIndex = 0;

    this.playersselecting = true;
    this.perkSelection = true;
    this.showcards = false;
    this.canChoose = false;
    this.hideNames = true;

    this.tableCards = new Map();

    this.hightlightPlayer = -1;
}

RedFlagsGame.prototype.emitData = function emitData(data) {
    this.socket.emit("GameChannel" + this.roomId.toString(), data);
}

RedFlagsGame.prototype.includePlayer = function includePlayer(pid, socket) {
    this.playerIds.push(pid);
    this.players++;

    this.playerPoints.set(pid, 0);
    this.playerNames.set(pid, "Player: " + pid.toString());
    this.playerStatus.set(pid, "");
    this.playSockets.set(pid, socket);

    this.requestUpdate();
}

RedFlagsGame.prototype.handleLeave = function handleLeave(pid) {

    this.playerIds.splice(this.playerIds.indexOf(pid), 1);
    this.players--;

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

RedFlagsGame.prototype.requestUpdate = function requestUpdate() {
    var data = new gameData();

    //set player data
    for (const [key, value] of this.playerPoints) {
        data.players.push(new PlayerData(this.playerNames.get(key), value, this.playerStatus.get(key), key == this.hightlightPlayer));
    }

    data.progress = this.inProgress;
    data.currentDaterId = this.currentDaterId;
    data.currentDaterName = this.currentDaterName;
    data.playersselecting = this.playersselecting;
    data.perkSelection = this.perkSelection;
    data.showcards = this.showcards;
    data.canChoose = this.canChoose;
    data.hideNames = this.hideNames;

    for (const [key, value] of this.tableCards) {
        data.GameTableCards.push(value);
    }

    this.socket.emit("GameChannel" + this.roomId, data);
}

RedFlagsGame.prototype.requestPrivate = function requestPrivate(pid) {

    var data = new PrivateData();

    data.flags = this.playCardsFlags.get(pid);
    data.perks = this.playCardsPerks.get(pid);

    data.responsibility = (this.currentDaterId != pid) ? this.playerIds[this.getNextPlayer(pid)] : -1;

    this.playSockets.get(pid).emit("PrivateData", data);
}

RedFlagsGame.prototype.getData = function getData(data, socket) {
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
            this.playerPoints.set(data.winner, this.playerPoints.get(data.winner) + 1);
            var self = this;

            if (this.playerPoints.get(data.winner) < this.winPoints) {

                new Promise((resolve, reject) => {
                    self.hightlightPlayer = data.winner;
                    self.canChoose = false;
                    self.requestUpdate();
                    setTimeout(function () {
                        self.hightlightPlayer = -1;
                        resolve();
                    }, 5000);
                }).then((resolve) => {
                    self.restockCards();
                    self.nextDater();
                    self.requestUpdate();
                    self.requestPrivate();
                });

            } else {
                new Promise((resolve, reject) => {
                    self.hightlightPlayer = data.winner;
                    self.playerStatus.set(data.winner, "Winner");
                    self.canChoose = false;
                    self.requestUpdate();
                    setTimeout(function () {
                        self.hightlightPlayer = -1;
                        resolve();
                    }, 5000);
                }).then((resolve) => {
                    self.endGame();
                    self.requestUpdate();
                    self.requestPrivate();
                });
            }
            break;

    }
}

//mandatory ends

RedFlagsGame.prototype.startGame = function startGame() {
    this.inProgress = true;

    this.playCardsPerks.clear();
    this.playCardsFlags.clear();

    //set hand for all players
    for (p of this.playerIds) {
        this.setNewHand(p);
        this.requestPrivate(p);
        this.playerStatus.set(p, "Selecting");
        this.playerPoints.set(p, 0);
    }

    this.currentDaterId = this.playerIds[0];
    this.currentDaterName = this.playerNames.get(this.currentDaterId);

    this.playerStatus.set(this.currentDaterId, "Dater");

    this.requestUpdate();
}

RedFlagsGame.prototype.endGame = function endGame() {
    this.inProgress = false;

    this.playCardsPerks.clear();
    this.playCardsFlags.clear();

    for (p of this.playerIds) {
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

    this.hightlightPlayer = -1;
}

RedFlagsGame.prototype.setNewHand = function setNewHand(pid) {

    var perks = []
    for (var x = 0; x < 4; x++) {
        perks.push(this.drawCard(this.activeDeck.perks, this.cloneDeck.perks));
    }
    this.playCardsPerks.set(pid, perks);

    var flags = []
    for (var x = 0; x < 3; x++) {
        flags.push(this.drawCard(this.activeDeck.flags, this.cloneDeck.flags))
    }
    this.playCardsFlags.set(pid, flags);
}

RedFlagsGame.prototype.drawCard = function drawCard(array, clone) {
    var id = clone.splice(Math.floor(Math.random() * clone.length - 1), 1);

    if(clone.length <= 0) {
        clone = this.resetCloneDeckArray(array);
    }

    return new Card(id, array[id]);
}

RedFlagsGame.prototype.nextDater = function nextDater() {
    this.currentDaterIndex++;
    if (this.currentDaterIndex >= this.playerIds.length) {
        this.currentDaterIndex = 0;
    }

    for (let p of this.playerIds) {
        this.playerStatus.set(p, "Selecting");
    }

    this.currentDaterId = this.playerIds[this.currentDaterIndex];
    this.currentDaterName = this.playerNames.get(this.currentDaterId);

    this.playerStatus.set(this.currentDaterId, "Dater");

    this.playersselecting = true;
    this.perkSelection = true;
    this.showcards = false;
    this.canChoose = false;

    this.tableCards.clear();
}

RedFlagsGame.prototype.restockCards = function restockCards() {
    for (let p of this.playerIds) {

        var flags = this.playCardsFlags.get(p)
        while (flags.length < 3) {
            flags.push(this.drawCard(this.activeDeck.flags, this.cloneDeck.flags));
        }

        var perks = this.playCardsPerks.get(p)
        while (perks.length < 4) {
            perks.push(this.drawCard(this.activeDeck.perks, this.cloneDeck.perks));
        }

        this.playCardsFlags.set(p, flags);
        this.playCardsPerks.set(p, perks);

        this.requestPrivate(p);
    }
}

RedFlagsGame.prototype.submitCard = function submitCard(pid, cardindex, carddata) {
    var cards = null;

    if (this.perkSelection) {
        cards = this.tableCards.get(pid);

        if (cards == null) {
            cards = new TableCardRow();
            cards.pid = pid;
            cards.playername = this.playerNames.get(pid);
            cards.perks = [];
            cards.flags = [];
            cards.flagsbyname = "";
            cards.flagspid = -1;
        }

        if (cards.perks.length < 2) {
            //add to table
            var card = this.playCardsPerks.get(pid)[cardindex];

            card.content = card.content.replace("_____", carddata);

            cards.perks.push(card);

            //remove from hand
            this.playCardsPerks.get(pid).splice(cardindex, 1);
        }

        this.tableCards.set(pid, cards);
    } else {
        cards = this.tableCards.get(this.playerIds[this.getNextPlayer(pid)]);

        if (cards.flags.length < 1) {
            //add to table
            var card = this.playCardsFlags.get(pid)[cardindex];
            cards.flags.push(card);

            card.content = card.content.replace("_____", carddata);

            //remove from hand
            this.playCardsFlags.get(pid).splice(cardindex, 1);

            cards.flagspid = pid;
            cards.flagsbyname = this.playerNames.get(pid);
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
    var goNext = true;
    for (let [key, value] of this.playerStatus) {
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

RedFlagsGame.prototype.getNextPlayer = function getNextPlayer(pid) {
    var index = this.playerIds.indexOf(pid) + 1;
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

RedFlagsGame.prototype.generateDeck = function generateDeck(decks) {
    this.activeDeck = new RedFlagData();
    this.activeDeck.flags = [];
    this.activeDeck.perks = [];

    for (let name of decks) {
        var d = this.resources.getDeckFromString(name);

        if (d != null) {
            this.activeDeck.flags = this.activeDeck.flags.concat(d.flags);
            this.activeDeck.perks = this.activeDeck.perks.concat(d.perks);
        }
    }

    if(this.activeDeck.flags.length <= 0 || this.activeDeck.perks.length <= 0) {
        this.activeDeck.flags.concat(this.resources.baseDeck.flags);
        this.activeDeck.perks.concat(this.resources.baseDeck.perks);
    }

    this.cloneDeck = new RedFlagData();
    this.cloneDeck.flags = this.resetCloneDeckArray(this.activeDeck.flags);
    this.cloneDeck.perks = this.resetCloneDeckArray(this.activeDeck.perks);
}

RedFlagsGame.prototype.resetCloneDeckArray = function resetCloneDeckArray(source) {
    var arr = [];
    for(var a = 0; a < source.length; a++) {
        arr.push(a);
    }
    return arr;
}

//global data
class gameData {
    players = [] //PlayerData array
    progress = false;
    currentDaterId;
    currentDaterName;
    playersselecting;
    perkSelection;
    GameTableCards = [];
    showcards;
    canChoose;
    hideNames;
}

class PlayerData {
    name    //string
    points  //number
    status  //string
    highlight //bool
    constructor(name, points, status, high) {
        this.name = name;
        this.points = points;
        this.status = status;
        this.highlight = high;
    }
}

class TableCardRow {
    pid;
    playername;
    perks;
    flags;
    flagsbyname;
    flagspid;
}

//private data
class PrivateData {
    flags = []
    perks = []
    responsibility
}

class Card {
    id
    content
    constructor(i, c) {
        this.id = i;
        this.content = c;
    }
}

//format Data
class RedFlagData {
    flags
    perks
}

module.exports = RedFlagsGame;