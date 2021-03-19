import SocketIO from "socket.io";
import { ResourceLoader } from "./ResourceLoader";
import { BaseRoom } from "./Rooms/BaseRoom";
import { GameTypes, GameTypesConverter } from "./Rooms/GameTypes";

export class Rooms {

    roomList: Map<number, BaseRoom>;
    socket: SocketIO.Server;
    resourceLoader: ResourceLoader;
    
    constructor(socketHandler: SocketIO.Server) {
        this.roomList = new Map();
        this.socket = socketHandler;
        this.resourceLoader = new ResourceLoader();
    }

    public getTransferableRoomDataList(): RoomListing[] {
        var returns: RoomListing[] = [];

        for(const [key, value] of this.roomList.entries()) {
            returns.push(
                {
                    roomId: value.roomId,
                    roomType: GameTypesConverter.getStringFromType(value.type),
                    numPlayers: value.numPlayers,
                    maxPlayers: value.maxPlayers,
                    inProgress: value.inProgress
                }
            );
        }
        return returns;
    }

    public getRoomData(id: string): any {
        var result: any = this.roomList.get(parseInt(id));

        if(result != undefined) {
            var room: BaseRoom = result as BaseRoom;

            return {
                success: true,
                roomId: room.roomId,
                roomType: GameTypesConverter.getStringFromType(room.type),
                numPlayers: room.numPlayers,
                maxPlayers: room.maxPlayers,
                inProgress: room.inProgress
            }
        }
        return {
            success: false,
            error: "Room not Found"
        }
    }

    public handleCreateRequest(data: { game: string ,max: number, tempId: string}): Promise<{success: boolean, id: number, error: string}> {
        return new Promise((resolve, reject) => {

            var typeObj: GameTypes = GameTypesConverter.getTypeFromString(data.game);

            if(typeObj == GameTypes.NONE) {
                resolve({success: false, id: 0, error: "Illegal Game Type"});
            }

            var rid: number = 0;

            do {
                rid = Math.floor(Math.random() * Math.floor(1000000));
            } while(this.roomList.get(rid) != undefined);

            this.resourceLoader.getResourcesOfClass(data.game).then((result) => {
                var instance: BaseRoom = GameTypesConverter.createObjectFromType(typeObj, rid, data.max, this.socket, result)!;
                
                this.roomList.set(rid, instance);

                resolve({success: true, id: rid, error: ""});
            }).catch((result) => {
                reject(result);
            })
        });
    }

    public getJoinDetails(rid: string): boolean {
        var room: BaseRoom = this.roomList.get(parseInt(rid))!;

        if(room != undefined) {
            return !(room.maxPlayers <= room.numPlayers || room.inProgress);
        } else {
            return false;
        }
    }

    public requestJoin(rid: string, socket: SocketIO.Socket): {success: boolean, pid: number} {
        var room: BaseRoom = this.roomList.get(parseInt(rid))!;

        if(this.getJoinDetails(rid)) {
            var pid: number = 0;

            do {
                pid = Math.floor(Math.random() * Math.floor(1000000));
            } while(room.playerIds.indexOf(pid) >= 0);

            room.includePlayer(pid, socket);

            return {success: true, pid: pid};

        } else {
            return {success: false, pid: 0};
        }
    }

    public requestUpdate(rid: string) {
        var room: BaseRoom = this.roomList.get(parseInt(rid))!;
        if(room != undefined) {
            room.requestUpdate();
        }
    }

    public postUpdate(data: any, socket: SocketIO.Socket) {
        var room: BaseRoom = this.roomList.get(parseInt(data.rid))!;
        if(room != undefined) {
            room.getData(data, socket);
        }
    }

    public handleLeave(data: {roomId: string, playerId: number}) {
        var room = this.roomList.get(parseInt(data.roomId));

        if(room != undefined) {
            room.handleLeave(data.playerId);

            if(room.numPlayers == 0) {
                this.roomList.delete(parseInt(data.roomId));
            }
        }
    }

    public requestPrivate(data: {rid: string, pid: string}) {
        var room = this.roomList.get(parseInt(data.rid));

        if(room != undefined) {
            room.requestPrivate(parseInt(data.pid));
        }
    }
}

export class RoomListing {
    roomId!: number;
    roomType!: string;
    numPlayers!: number;
    maxPlayers!: number;
    inProgress!: boolean;
}