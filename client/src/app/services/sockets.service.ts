import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  constructor(private socket: Socket) { }

  public sendMessage(channel, data) {
    this.socket.emit(channel, data);
  }

  public setlistener(channel, clbk) {
    this.socket.on(channel, result => {
      clbk(result);
    })
  }

  public removelistener(channel) {
    this.socket.removeListener(channel);
  }

}
