
function PokerGame(roomId, maxPlayers, socket, resources) {
    this.roomId = roomId;
    this.maxPlayers = maxPlayers;
    this.socket = socket;
    this.resources = resources;
}

PokerGame.prototype.emitData = function emitData(data) {
    this.socket.emit("GameChannel" + this.roomId.toString(), data);
}

PokerGame.prototype.includePlayer = function includePlayer(pid, socket) {

}

PokerGame.prototype.handleLeave = function handleLeave(pid) {

}

PokerGame.prototype.requestUpdate = function requestUpdate() {

}

PokerGame.prototype.requestPrivate = function requestPrivate(pid) {

}

PokerGame.prototype.getData = function getData(data, socket) {
    
}

//mandatory ends


module.exports = PokerGame;

class PlayerData {
    name;
    curBal;
    curBet;
    turn;
}

class Card {
    suit;
    value;
}

class CenterCards {
    card;
    shouldShow;
}

const Variant = Object.freeze({
    Texas: 1, fiveDraw: 2
});