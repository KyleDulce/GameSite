import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SingleInputDialogComponent } from 'src/app/components/dialogs/GameDialogs/single-input-dialog/single-input-dialog.component';
import { SpecOrPlayComponent } from 'src/app/components/dialogs/GameDialogs/spec-or-play/spec-or-play.component';
import { SpectatorJoinComponent } from 'src/app/components/dialogs/GameDialogs/spectator-join/spectator-join.component';
import { GamerequestsService } from 'src/app/services/game/gamerequests.service';

@Component({
  selector: 'app-red-flags',
  templateUrl: './red-flags.component.html',
  styleUrls: ['./red-flags.component.css']
})
export class RedFlagsComponent {

  avaliableDecks: {text: string, checked: boolean}[] = [
    {text: "Base Deck", checked:true}, 
    {text: "Test Deck", checked:false},
    {text: "Custom Dirty Deck", checked:false},
    {text: "Ang's Deck", checked:false},
    {text: "Tortino's Deck", checked:false}
  ];

  roomId: number
  playerId: number = 0
  responsibilitypid = 0

  players: { name: string, points: number, status: string }[]

  currentDater: string = "player not found";
  isCurrentDater: boolean = false;

  inprogress: boolean = false;
  canStart: boolean = false;
  playersselecting: boolean = true;
  canChose: boolean = false;
  hideNames: boolean = false;

  perkSelection = true;

  perks: { content: string }[] = [];
  flags: { content: string }[] = [];

  selectedPerk = -1;
  selectedFlag = -1;

  showTableCards = true;

  tableCards: {
    pid: number;
    playername: string;
    perks: { content: string };
    flags: { content: string };
    flagsbyname: string;
    flagspid: number;
  }[];

  hideNamesCheck: boolean = false;

  points: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.min(1)
  ]);

  constructor(private gr: GamerequestsService, private route: ActivatedRoute, private matdialog: MatDialog) {
    this.createFunctions();

    var self = this;

    this.route.queryParams
      .subscribe(params => {
        this.roomId = params.r;
      });

    if (!this.gr.setup(this.roomId)) {

      this.gr.requestJoinDetails(function (data) {

        if (data) {

          //send specorplay
          var ref = matdialog.open(SpecOrPlayComponent, { data: false });
          ref.afterClosed().subscribe(result => {

            if (result) {
              //they want to play
              console.log("play");

              self.gr.requestJoin(function (result) {

                if (result.success) {
                  self.playerId = result.pid;
                  self.gr.setStorage(self.playerId);

                  self.gr.sendData(
                    {
                      rid: self.roomId,
                      type: "INFOCHANGE",
                      pid: self.playerId,
                      name: localStorage.getItem(AppComponent.LOCAL_USERNAME_STORE)
                    });
                  self.gr.startWatchPrivate(self.onPrivateUpdate);
                  self.gr.requestPrivateUpdate(self.playerId);
                } else {
                  console.log("failed");
                  matdialog.open(SpectatorJoinComponent);
                }

                self.gr.startWatch(self.onGameUpdate);
                self.gr.requestUpdate();
              });

            } else {
              //they dont want to play
              console.log("Spec");
              self.gr.startWatch(self.onGameUpdate);
              self.gr.requestUpdate();
            }
          });

        } else {
          //tell spec only
          self.gr.startWatch(self.onGameUpdate);
          self.gr.requestUpdate();
          matdialog.open(SpectatorJoinComponent);
        }
      });

    } else {
      this.playerId = this.gr.getPid();
      this.gr.startWatch(this.onGameUpdate);
      this.gr.sendData({
        rid: self.roomId,
        type: "SOCKETCHANGE",
        pid: self.playerId
      });
      this.gr.startWatchPrivate(this.onPrivateUpdate);
      this.gr.requestUpdate();
      this.gr.requestPrivateUpdate(this.playerId);
      console.log("play");
    }

  }

  createFunctions() {
    var self = this;

    this.onGameUpdate = function (data) {
      self.players = data.players;
      //TODO CHANGE
      self.canStart = self.players.length >= 1;

      self.inprogress = data.progress;

      self.isCurrentDater = self.playerId == data.currentDaterId;
      self.currentDater = data.currentDaterName;
      self.tableCards = data.GameTableCards;
      self.playersselecting = data.playersselecting;
      self.perkSelection = data.perkSelection;
      self.showTableCards = data.showcards;
      self.canChose = data.canChoose;
      self.hideNames = data.hideNames;
    }

    this.onPrivateUpdate = function (data) {
      console.log("private");
      self.perks = data.perks;
      self.flags = data.flags;
      self.responsibilitypid = data.responsibility;
    }
  }

  startButton() {

    if (this.points.invalid) {
      this.points.markAsTouched();
      return;
    }

    if(!this.anyDeckSelected()) {
      alert("You must select at least 1 Deck");
      return;
    }

    if(this.players.length < 3) {
      alert("Not enough players: min 3");
      return;
    }

    this.gr.sendData({
      rid: this.roomId,
      type: "GAMESTART",
      points: this.points.value,
      decks: this.getDeckData(),
      hideNames: this.hideNamesCheck
    });
  }

  anyDeckSelected() {
    for(let d of this.avaliableDecks) {
      if(d.checked) {
        return true;
      }
    }
    return false;
  }

  getDeckData() {
    var decks = [];
    for(let d of this.avaliableDecks) {
      if(d.checked) {
        decks.push(d.text);
      }
    }
    return decks;
  }

  chooseCardPerk(index: number) {
    if (this.playersselecting && this.perkSelection) {
      this.selectedPerk = index;
    }
  }

  chooseCardFlag(index: number) {
    if (this.playersselecting && !this.perkSelection) {
      this.selectedFlag = index;
    }
  }

  submitSelection() {
    if (this.playersselecting && !(this.selectedPerk == -1 && this.selectedFlag == -1)) {

      var card = (this.perkSelection) ? this.perks[this.selectedPerk] : this.flags[this.selectedFlag];

      var self = this;

      if (card.content.indexOf("_____") > -1) {
        const dialogRef = this.matdialog.open(SingleInputDialogComponent, { data: { title: "Fill in the Blank of your card", output: "", cancel: true } })

        dialogRef.afterClosed().subscribe((result) => {
          if(!result.cancel) {
            if(result.output == null || result.output == undefined) {
              result.output = "";
            }
            self.sendSelection(result.output);
          }
        });
      } else {
        this.sendSelection("");
      }
    }
  }

  private sendSelection(data) {
    this.gr.sendData({
      rid: this.roomId,
      type: "CARDSELECTION",
      pid: this.playerId,
      card: (this.perkSelection) ? this.selectedPerk : this.selectedFlag,
      cdata: data
    });

    this.selectedFlag = -1;
    this.selectedPerk = -1;
  }

  submitDate(pid) {
    this.gr.sendData({
      rid: this.roomId,
      type: "WINNERCHOOSE",
      winner: pid
    });
    this.canChose = false;
  }

  //functions
  onGameUpdate;
  onPrivateUpdate;

}