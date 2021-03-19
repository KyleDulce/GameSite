import { RedFlagsComponent } from "src/app/components/games/cardgames/red-flags/red-flags.component";
import { Type } from '@angular/core';
import { TycoonComponent } from "src/app/components/games/cardgames/tycoon/tycoon.component";
import { PokerComponent } from "src/app/components/games/cardgames/poker/poker.component";

export class Games {
    private static gameStr = ["Red Flags", "Tycoon", "Poker"];
    private static gameComp: Type<any>[] = [RedFlagsComponent, TycoonComponent, PokerComponent];

    public static getGameStringArray() {
        return Games.gameStr;
    }

    public static getGameCompFromString(text) {
        for(var x = 0; x < this.gameStr.length; x++) {
            if(this.gameStr[x] == text) {
                return this.gameComp[x];
            }
        }
        console.log("returning from text");
        return null;
    }
}