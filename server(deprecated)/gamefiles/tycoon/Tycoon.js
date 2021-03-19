
function TycoonGame(roomId, maxPlayers, socket, resources) {
    this.roomId = roomId;
    this.maxPlayers = maxPlayers;
    this.socket = socket;
    this.resources = resources;
}

TycoonGame.prototype.emitData = function emitData(data) {
    this.socket.emit("GameChannel" + this.roomId.toString(), data);
}

TycoonGame.prototype.includePlayer = function includePlayer(pid, socket) {

}

TycoonGame.prototype.handleLeave = function handleLeave(pid) {

}

TycoonGame.prototype.requestUpdate = function requestUpdate() {

}

TycoonGame.prototype.requestPrivate = function requestPrivate(pid) {

}

TycoonGame.prototype.getData = function getData(data, socket) {
    
}

//mandatory ends


module.exports = TycoonGame;