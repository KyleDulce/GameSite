import { Component } from '@angular/core';
import { SocketsService } from 'src/app/services/sockets.service';
import { MatDialog } from '@angular/material/dialog';
import { RoomCreatorComponent } from '../room-creator/room-creator.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-room-selector',
  templateUrl: './room-selector.component.html',
  styleUrls: ['./room-selector.component.css']
})
export class RoomSelectorComponent {

  results: number = -1;
  entries: roomData[];

  constructor(private socketServe: SocketsService, private matDialog: MatDialog, private router: Router) { 
    var self = this;

    this.entries = [];

    socketServe.setlistener("rooms", function(result) {
      self.entries = result;
      self.results = result.length;
      self.socketServe.removelistener("rooms");
    })

    socketServe.sendMessage("getRooms", null);
    
  }

  joinRoom(id: number) {
    console.log("Trying to join room " + id);
    this.router.navigate(["game"], {
      queryParams: {
        r: id
      }
    });
  }

  CreateRoomDialog() {
    this.matDialog.open(RoomCreatorComponent);
  }

}

export interface roomData {
  roomId: number
  roomType: string
  numPlayers: number
  maxPlayers: number
  inProgress: boolean
}