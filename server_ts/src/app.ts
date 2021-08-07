//Setup Prereq
export default class AppInterface {
    public static Logger: Logger;
}

//setup logger
console.log("Preparing Logger");
import Logger from './Logger';
AppInterface.Logger = new Logger();

var logger: Logger = AppInterface.Logger;
var StartTime: number = Date.now();
logger.info("Start Sequence", "Loading Modules...");

//Setup server
import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import { Rooms } from './rooms';

const cors = require('cors');
const expressInst = express();
expressInst.use(cors());

logger.info("Start Sequence", "Initializing Server");

const server = http.createServer(expressInst);
const Socket = socketio(server);

const roomManager = new Rooms(Socket);

const port = process.env.PORT || 3000;

logger.info("Start Sequence", "Setting up Socket.io");

//start sockets
Socket.sockets.on("connection", (socket) => {

    logger.info("Socket.io", `User[${socket.request.connection.remoteAddress}] connected with Id: ${socket.id}`)

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
        Socket.emit("chat" + data.rid.toString(), data);
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

    socket.on("disconnect", data => {
        logger.info("Socket.io", `User[${socket.request.connection.remoteAddress}] disconnected`);
    });
});

logger.info("Start Sequence", "Starting http server");
server.listen(port, () => {
    logger.info("Http", `Server running at port ${port}`);
});

var completeTime = Date.now() - StartTime;
logger.info("Start Sequence", `Done (${completeTime} ms)!`);