import SocketIO from "socket.io";
import { Resource } from "../ResourceLoader";
import { GameTypes } from "./GameTypes";

export abstract class BaseRoom {

    roomId: number;
    type: GameTypes;
    maxPlayers: number;
    public numPlayers: number = 0;
    public inProgress: boolean = false;
    socket!: SocketIO.Server;
    resources!: Resource;
    public playerIds: number[] = [];

    constructor(roomId: number, type: GameTypes, maxPlayers: number, socket: SocketIO.Server, resourceloader: Resource) {
        this.roomId = roomId;
        this.type = type;
        this.maxPlayers = maxPlayers;
        this.socket = socket;
        this.resources = resourceloader;
    }

    public requestAllPrivate():void {
        for(let pid of this.playerIds) {
            this.requestPrivate(pid);
        }
    }

    public abstract includePlayer(pid: number, socket: SocketIO.Socket): void;
    public abstract handleLeave(pid: number): void;
    public abstract requestUpdate(): void;
    public abstract requestPrivate(pid: number): void;
    public abstract getData(data: any, socket: SocketIO.Socket): void;

}
