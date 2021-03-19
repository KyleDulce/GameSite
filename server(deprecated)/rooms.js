const ResourceLoader = require('./resourceloader.js');

const gameTypes = new Map();
gameTypes.set("Red Flags", require("./gamefiles/redflags/RedFlagsGame.js"));
gameTypes.set("Tycoon", require("./gamefiles/tycoon/Tycoon.js"));
gameTypes.set("Poker", require("./gamefiles/poker/Poker.js"));

//Room object
function Rooms(socket) {
    this.roomList = new Map();
    this.socket = socket;
    this.resourceloader = new ResourceLoader();
}

Rooms.prototype.getTransferableRoomDataList = function getTransferableRoomDataList() {
    var returns = [];

    for (const [key, value] of this.roomList.entries()) {
        var data = {
            roomId: value.roomId,
            roomType: value.type,
            numPlayers: value.gameInstance.players,
            maxPlayers: value.maxPlayers,
            inProgress: value.gameInstance.inProgress
        }
        returns.push(data);
    }
    return returns;
}

Rooms.prototype.getRoomData = function getRoomData(data) {
    var result = this.roomList.get(parseInt(data));
    if (result != undefined) {
        return {
            success: true,
            roomId: result.roomId,
            roomType: result.type,
            numPlayers: result.gameInstance.players,
            maxPlayers: result.maxPlayers,
            inProgress: result.gameInstance.inProgress
        }
    }
    return {
        success: false,
        error: "Room not found"
    }
}

Rooms.prototype.handleCreateRequest = function handleCreateRequest(data) {

    return new Promise((resolve, reject) => {
        var typeObj = gameTypes.get(data.game);

        if (typeObj == undefined) {
            resolve({ success: false, error: "Illegal Game type" });
        }

        var rid = 0;

        do {
            rid = Math.floor(Math.random() * Math.floor(1000000));
        } while (this.roomList.get(rid) != undefined);

        this.resourceloader.getResourcesOfClass(data.game).then((result) => {
            var gameInstance = new typeObj(rid, data.max, this.socket, result);

            var roominstance = new Room(rid, data.game, gameInstance, data.max);

            this.roomList.set(rid, roominstance);

            resolve({ success: true, id: rid });
        });
    });
}

Rooms.prototype.getJoinDetails = function getJoinDetails(data) {
    var room = this.roomList.get(parseInt(data));

    if (room != undefined) {
        return !(room.maxPlayers <= room.gameInstance.players || room.gameInstance.inProgress);
    } else {
        return false;
    }
}

Rooms.prototype.requestJoin = function requestJoin(data, socket) {
    var room = this.roomList.get(parseInt(data));

    if (room != undefined) {
        var canJoin = !(room.maxPlayers <= room.gameInstance.players || room.gameInstance.inProgress);

        if (canJoin) {
            var pid = Math.floor(Math.random() * Math.floor(1000000));

            room.gameInstance.includePlayer(pid, socket);

            return { success: true, pid: pid };
        } else {
            return { success: false };
        }
    } else {
        return { success: false };
    }
}

Rooms.prototype.requestUpdate = function requestUpdate(data) {
    var room = this.roomList.get(parseInt(data));
    if (room != undefined) {
        room.gameInstance.requestUpdate();
    }
}

Rooms.prototype.postUpdate = function postUpdate(data, socket) {
    var room = this.roomList.get(parseInt(data.rid));
    if (room != undefined) {
        room.gameInstance.getData(data, socket);
    }
}

Rooms.prototype.handleLeave = function handleLeave(data) {
    var room = this.roomList.get(parseInt(data.roomId));

    if (room != undefined) {
        room.gameInstance.handleLeave(data.playerId);

        if (room.gameInstance.players == 0) {
            this.roomList.delete(parseInt(data.roomId));
        }
    }
}

Rooms.prototype.requestPrivate = function requestPrivate(data) {
    var room = this.roomList.get(parseInt(data.rid));
    if (room != undefined) {
        room.gameInstance.requestPrivate(data.pid);
    }
}

module.exports = Rooms;

class Room {
    constructor(roomId, type, gameInstance, maxPlayers) {
        this.roomId = roomId;
        this.type = type;
        this.gameInstance = gameInstance;
        this.maxPlayers = maxPlayers;
    }
}