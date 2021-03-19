import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Games } from 'src/app/models/games/Games';
import { SocketsService } from 'src/app/services/sockets.service';
import { FailedToSendRequestComponent } from '../../dialogs/failed-to-send-request/failed-to-send-request.component';

@Component({
  selector: 'app-room-creator',
  templateUrl: './room-creator.component.html',
  styleUrls: ['./room-creator.component.css']
})
export class RoomCreatorComponent {

  gameOptions = Games.getGameStringArray();

  gametype: FormControl = new FormControl('', [
    Validators.required,
  ]);
  maxPlayers: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.max(20),
    Validators.min(1)
  ]);

  sentRequest: boolean = false;

  constructor(private sockets: SocketsService, private dialog: MatDialog, private router: Router) { }

  buttonClick() {
    console.log(this.gametype.value);
    if (this.gametype.invalid || this.maxPlayers.invalid) {
      console.log("Invalid input");
      this.gametype.markAsTouched();
      this.maxPlayers.markAsTouched();
      return;
    }

    //send request
    this.sentRequest = true;

    var reqId = Math.floor(Math.random() * Math.floor(1000000));
    this.sockets.sendMessage("createroom",
      {
        game: this.gametype.value,
        max: this.maxPlayers.value,
        tempId: reqId
      }
    );

    var self = this;

    this.sockets.setlistener("roomres" + reqId, function (data) {
      if (!data.success) {
        const dialogref = self.dialog.open(FailedToSendRequestComponent, { data: "Server denied request due to: " + data.error });
        dialogref.afterClosed().subscribe(result => {
          self.router.navigate([''])
        });
      } else {
        self.router.navigate(['game'], {
          queryParams: {
            r: data.id
          }
        });
      }
    });
  }

}
