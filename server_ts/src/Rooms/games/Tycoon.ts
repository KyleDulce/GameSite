import { Socket } from "socket.io";
import { BaseRoom } from "../BaseRoom";

export class Tycoon extends BaseRoom {
    public includePlayer(pid: number, socket: Socket): void {

    }

    public handleLeave(pid: number): void {

    }

    public requestUpdate(): void {

    }

    public requestPrivate(pid: number): void {

    }

    public getData(data: any, socket: Socket): void {

    }
}