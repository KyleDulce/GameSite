import { Resource } from "../ResourceLoader";
import { BaseRoom } from "./BaseRoom";
import { Poker } from "./games/Poker";
import { RedFlags } from "./games/RedFlags";
import { Tycoon } from "./games/Tycoon";

export enum GameTypes {
    REDFLAGS, TYCOON, POKER, NONE
}

export class GameTypesConverter {
    public static getTypeFromString(type: string): GameTypes {
        switch (type) {
            case "Red Flags":
                return GameTypes.REDFLAGS;
            case "Tycoon":
                return GameTypes.TYCOON;
            case "Poker":
                return GameTypes.POKER;
            default:
                return GameTypes.NONE;
        }
    }

    public static getStringFromType(type: GameTypes): string {
        switch (type) {
            case GameTypes.POKER:
                return "Poker";
            case GameTypes.REDFLAGS:
                return "Red Flags";
            case GameTypes.TYCOON:
                return "Tycoon";
            default:
                return "None";
        }
    }

    public static createObjectFromType(type: GameTypes, rid: number, maxplayers: number, socket: SocketIO.Server, resourceLoader: Resource): BaseRoom | null {
        switch (type) {
            case GameTypes.REDFLAGS:
                return new RedFlags(rid, type, maxplayers, socket, resourceLoader);
            case GameTypes.POKER:
                return new Poker(rid, type, maxplayers, socket, resourceLoader);
            case GameTypes.TYCOON:
                return new Tycoon(rid, type, maxplayers, socket, resourceLoader);
            default:
                return null;
        }
    }
}