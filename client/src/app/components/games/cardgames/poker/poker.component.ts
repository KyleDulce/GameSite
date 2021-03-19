import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent {

  players: { name: string, curBal: number, curBet: number, turn: boolean }[] = [
    { name: "Player", curBal: 500, curBet: 500, turn: true },
    { name: "Player", curBal: 500, curBet: 500, turn: false },
    { name: "Player", curBal: 500, curBet: 500, turn: false },
    { name: "Player", curBal: 500, curBet: 500, turn: false },
  ];

  cards: { suit: string, value: number }[] = [
    { suit: "D", value: 3 },
    { suit: "S", value: 10 },
    { suit: "C", value: 13 },
    { suit: "H", value: 1 },
    { suit: "D", value: 7 }
  ]
  centerCards: {card:{ suit: string, value: number }, shouldShow:boolean}[] = [
    {card:{ suit: "D", value: 3 }, shouldShow: true},
    {card:{ suit: "S", value: 10 }, shouldShow: false},
    {card:{ suit: "C", value: 13 }, shouldShow: true},
    {card:{ suit: "H", value: 1 }, shouldShow: true},
    {card:{ suit: "D", value: 7 }, shouldShow: false}
  ];

  currentBet: number = 5;
  playerBet: number = 5;
  newBet: number = 5;

  isBetting: boolean = true;

  started: boolean = true;

  constructor() { }

  getCardImgSrc(c: { suit: string, value: number }) {
    return "assets/games/traddeck/" + c.value.toString() + c.suit + ".png";
  }

  getCardImgSrcShow(c: { suit: string, value: number }, show: boolean) {
    if(show) {
      return this.getCardImgSrc(c);
    } else {
      return "assets/games/traddeck/red_back.png";
    }
  }

}
