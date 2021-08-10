
//Setup Prereq
export default class AppInterface {
    public static Logger: Logger;
    public static Shutdown(): void {
        this.SoftStop(() => {
            this.Logger.info("Process", "Shutdown");
            setTimeout(() => {
                process.exit(0);
            }, 1000);
        });
    }

    private static SoftStop(callback: Function): void {
        this.Logger.info("Http Server", "Closing Http Server");
        server.close( () => {
            this.Logger.info("Http Server", "Http Server Closed");
            callback();
        });
    }
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
import {Server, Socket } from 'socket.io';
import { Rooms } from './rooms';
import * as ConsoleCommand from './Command/ConsoleCommand';

const cors = require('cors');
const readline = require('serverline');
const expressInst = express();
expressInst.use(cors());

logger.info("Start Sequence", "Initializing Server");

const server = http.createServer(expressInst);
const Socket_Obj = new Server(server, {
    cors: {
        origin: '*'
    }
});

const roomManager = new Rooms(Socket_Obj);

const port = process.env.PORT || 3000;

logger.info("Start Sequence", "Setting up Socket.io");

//start sockets
Socket_Obj.sockets.on("connection", (socket: Socket) => {

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
        Socket_Obj.emit("chat" + data.rid.toString(), data);
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

//start console manager
logger.info("Start Sequence", "Starting console manager");
//setup enabled commands
var commands = ConsoleCommand.getCommandObjects();

readline.init();
readline.setPrompt('> ');

//completer
readline.on('completer', function(arg: {hits: string[], line: string}) {
    var cmdArgs: string[] = arg.line.split(' ');

    arg.hits = [];

    //checks only 1 argument
    if(cmdArgs.length <= 1) {
        //suggest commands
        arg.hits = commands.map(cmdStr => cmdStr.getCommandString());
    } else {
        //suggest command completion
        for(let cmd of commands) {
            if(cmd.getCommandString().toLowerCase() == cmdArgs[0].toLowerCase()) {
                arg.hits = cmd.getCompletion(cmdArgs, arg.hits);
            }
        }
    }
})
//command handler
.on('line', function(line: string) {
    logger.info("Console", `Console issued Server command: ${line}`)

    var cmdArgs: string[] = line.split(' ');

    for(let cmd of commands) {
        if(cmd.getCommandString().toLowerCase() == cmdArgs[0].toLowerCase()) {
            cmd.run(cmdArgs);
            return;
        }
    }

    logger.warn("Console", `Command: '${cmdArgs[0]}' does not exist!`);
})

var completeTime = Date.now() - StartTime;
logger.info("Start Sequence", `Done (${completeTime} ms)!`);