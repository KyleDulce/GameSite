import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  Type,
  ElementRef
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Queue } from 'src/app/datastructures/Queue';
import { GameDirective } from 'src/app/directives/game.directive';
import { Games } from 'src/app/models/games/Games';
import { PpPic } from 'src/app/models/pppics/PpPic';
import { GamerequestsService } from 'src/app/services/game/gamerequests.service';
import { SocketsService } from 'src/app/services/sockets.service';
import { FailedToSendRequestComponent } from '../../dialogs/failed-to-send-request/failed-to-send-request.component';
import { ConfirmLeaveComponent } from '../../dialogs/GameDialogs/confirm-leave/confirm-leave.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css'],
  host: {
    class: 'GamePage'
  }
})
export class GamePageComponent {

  static MAX_MSGS = 100;

  allowedPpPicsArray = PpPic.validPpPics;

  roomId: number;
  hidden: boolean = true;
  chatUnread: number = 0;

  textBoxData: string;

  chatMsgs: Queue<ChatMessage>;

  @ViewChild(GameDirective, {
    static: true
  }) appGame: GameDirective;
  interval: any;

  @ViewChild("drawer")
  chatNav: MatSidenav;

  @ViewChild("chatCom")
  chatComp: ElementRef;

  constructor(private route: ActivatedRoute, private factoryResolver: ComponentFactoryResolver,
    private socket: SocketsService, private router: Router,
    private dialog: MatDialog, private gr: GamerequestsService) {

    this.route.queryParams
      .subscribe(params => {
        this.roomId = params.r;
      });

    var self = this;

    socket.sendMessage("GET roomData", this.roomId);
    socket.setlistener("RoomInfo", function (result) {
      if (result.success) {
        self.addGameElement(Games.getGameCompFromString(result.roomType))
      } else {
        dialog.open(FailedToSendRequestComponent, { data: "Room cannot be found" });
        router.navigate([""]);
      }
      socket.removelistener("RoomInfo");
    });

    this.chatMsgs = new Queue();

    socket.setlistener("chat" + this.roomId.toString(), function (data) {
      self.chatMsgs.addEnd(data);

      if (self.chatMsgs.size() > GamePageComponent.MAX_MSGS) {
        self.chatMsgs.popBeginning();
      }

      if (!self.chatNav.opened) {
        self.chatUnread++;
        self.hidden = false;
        console.log("Unread");
      }

      setTimeout(function() {
        self.chatComp.nativeElement.scrollTop = self.chatComp.nativeElement.scrollHeight;
      }, 10);
    });
  }

  addGameElement(component: Type<any>) {
    console.log("adding component")
    const factory = this.factoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.appGame.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent<any>(factory);
  }

  sendChatMsg() {
    if (this.textBoxData != null || this.textBoxData != undefined) {
      this.textBoxData = this.textBoxData.trim();
      if (this.textBoxData != "") {
        var pppic = localStorage.getItem(AppComponent.LOCAL_PP_STORE);
        var nameVal = localStorage.getItem(AppComponent.LOCAL_USERNAME_STORE);

        console.log("sent");
        this.socket.sendMessage("POST chat", { rid: this.roomId, pp: pppic, name: nameVal, msg: this.textBoxData });

        this.textBoxData = "";
      }
    }
  }

  leaveGame() {
    this.dialog.open(ConfirmLeaveComponent, { data: false }).afterClosed().subscribe(result => {
      if (result) {
        this.gr.promptLeaveGame(this.gr.getPid());
        this.router.navigate([""]);
      }
    });
  }

  toggleChat() {
    this.chatNav.toggle();
    this.hidden = true;

    if (this.chatUnread > 0) {
      setTimeout(function() {
        this.chatComp.nativeElement.scrollTop = this.chatComp.nativeElement.scrollHeight;
      }, 10);
    }

    this.chatUnread = 0;
  }

  onKeydownText(event) {
    event.preventDefault();
  }

}

export class ChatMessage {
  rid: number
  pp: number
  name: string
  msg: string
}
