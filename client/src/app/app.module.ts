import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InvalidNameComponent } from './components/dialogs/invalid-name/invalid-name.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RedFlagsComponent } from './components/games/cardgames/red-flags/red-flags.component';
import { IllegalPageComponent } from './components/illegal-page/illegal-page.component';
import { ChangeNameComponent } from './components/dialogs/change-name/change-name.component';
import { RoomSelectorComponent } from './components/games/room-selector/room-selector.component';
import { RoomCreatorComponent } from './components/games/room-creator/room-creator.component';
import { GamePageComponent } from './components/games/game-page/game-page.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ChangePPDialogComponent } from './components/dialogs/changepp/change-ppdialog/change-ppdialog.component';
import { MatRadioModule } from '@angular/material/radio';
import { FailedToSendRequestComponent } from './components/dialogs/failed-to-send-request/failed-to-send-request.component';
import { GameDirective } from './directives/game.directive';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { SpectatorJoinComponent } from './components/dialogs/GameDialogs/spectator-join/spectator-join.component';
import { SpecOrPlayComponent } from './components/dialogs/GameDialogs/spec-or-play/spec-or-play.component';
import { ConfirmLeaveComponent } from './components/dialogs/GameDialogs/confirm-leave/confirm-leave.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SingleInputDialogComponent } from './components/dialogs/GameDialogs/single-input-dialog/single-input-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TycoonComponent } from './components/games/cardgames/tycoon/tycoon.component';
import { PokerComponent } from './components/games/cardgames/poker/poker.component';

const config: SocketIoConfig = {
  url: "http://" + window.location.hostname + ":3000", options: {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TestPageComponent,
    InvalidNameComponent,
    RedFlagsComponent,
    IllegalPageComponent,
    ChangeNameComponent,
    RoomSelectorComponent,
    RoomCreatorComponent,
    GamePageComponent,
    ChangePPDialogComponent,
    FailedToSendRequestComponent,
    GameDirective,
    SpectatorJoinComponent,
    SpecOrPlayComponent,
    ConfirmLeaveComponent,
    SingleInputDialogComponent,
    TycoonComponent,
    PokerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatDialogModule,
    SocketIoModule.forRoot(config),
    MatProgressSpinnerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSidenavModule,
    MatBadgeModule,
    MatDividerModule,
    MatListModule,
    MatButtonToggleModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
