const Express = require("express")();
const cors = require('cors');
Express.use(cors());
const Http = require("http").createServer(Express);
const Socketio = require("socket.io")(Http);
const Rooms = require("./rooms.js");

var roomManager = new Rooms(Socketio);

const port = process.env.PORT || 3000;

Socketio.sockets.on("connection", (socket) => {
    socket.on("getRooms", data => {
        var response = roomManager.getTransferableRoomDataList();
        socket.emit("rooms", response);
    });

    socket.on("createroom", data => {
        roomManager.handleCreateRequest(data).then((result) => {
            socket.emit("roomres" + data.tempId, result);
        });
    });

    socket.on("GET roomData", data => {
        var response = roomManager.getRoomData(data);
        socket.emit("RoomInfo", response);
    });

    socket.on("POST chat", data =>{
        Socketio.emit("chat" + data.rid.toString(), data);
    });

    socket.on("POST JoinDetails", data => {
        var response = roomManager.getJoinDetails(data);
        socket.emit("RoomDetails", response);
    });

    socket.on("POST JoinGame", data => {
        var response = roomManager.requestJoin(data, socket);
        socket.emit("JoinRequestResponse", response);
    });

    socket.on("POST EmitGameUpdate", data => {
        roomManager.requestUpdate(data);
    });

    socket.on("POST gamedata", data =>{
        roomManager.postUpdate(data, socket);
    });

    socket.on("HandleLeave", data => {
        roomManager.handleLeave(data);
    });

    socket.on("POST EmitPrivateUpdate", data => {
        roomManager.requestPrivate(data);
    });

});
Http.listen(port, () => {
    console.log(`Listening at port ${port}`);
});