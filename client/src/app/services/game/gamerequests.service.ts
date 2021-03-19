import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocketsService } from '../sockets.service';

@Injectable({
  providedIn: 'root'
})
export class GamerequestsService {

  LOCALSTORAGE_GAME_ID_STORE: string = "GameSiteRoomData";

  roomId: number
  localStorageData: LocalStorageData;

  constructor(private socket: SocketsService) { 
  }

  //true if should instant join
  //false if should send a request
  setup(roomId: number): boolean {
    this.roomId = roomId;
    this.localStorageData = JSON.parse(localStorage.getItem(this.LOCALSTORAGE_GAME_ID_STORE));
    return (this.localStorageData != null && this.localStorageData.roomid == roomId);
  }

  setStorage(pid: number) {
    this.localStorageData = {roomid: this.roomId, playerid: pid};
    localStorage.setItem(this.LOCALSTORAGE_GAME_ID_STORE, JSON.stringify(this.localStorageData));
  }

  getPid(): number {
    return this.localStorageData.playerid;
  }

  //true if can send join request
  //false if cannot send join request
  requestJoinDetails(clbk) {
    var self = this;
    this.socket.sendMessage("POST JoinDetails", this.roomId);
    this.socket.setlistener("RoomDetails", function(response) {
      self.socket.removelistener("RoomDetails");
      clbk(response);
    });
  }

  requestJoin(clbk) {
    var self = this;
    this.socket.sendMessage("POST JoinGame", this.roomId);
    this.socket.setlistener("JoinRequestResponse", function(response) {
      self.socket.removelistener("JoinRequestResponse");
      clbk(response);
    });
  }

  promptLeaveGame(pid: number) {
    this.socket.sendMessage("HandleLeave", {roomId: this.roomId, playerId: pid});
    this.localStorageData = null;
    localStorage.setItem(this.LOCALSTORAGE_GAME_ID_STORE, null);
  }

  startWatch(clbk) {
    this.socket.setlistener("GameChannel" + this.roomId.toString(), clbk);
  }

  requestUpdate() {
    this.socket.sendMessage("POST EmitGameUpdate", this.roomId);
  }

  sendData(data) {
    this.socket.sendMessage("POST gamedata", data);
  } 

  requestPrivateUpdate(pid) {
    console.log("request");
    this.socket.sendMessage("POST EmitPrivateUpdate", {rid: this.roomId, pid: pid});
  }

  startWatchPrivate(clbk) {
    this.socket.setlistener("PrivateData", clbk);
  }

}

export class LocalStorageData {
  roomid: number
  playerid: number
}