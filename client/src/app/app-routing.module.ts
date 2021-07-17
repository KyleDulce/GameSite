import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { ChangeNameComponent } from './components/dialogs/change-name/change-name.component';
import { GamePageComponent } from './components/games/game-page/game-page.component';
import { RoomCreatorComponent } from './components/games/room-creator/room-creator.component';
import { RoomSelectorComponent } from './components/games/room-selector/room-selector.component';
import { IllegalPageComponent } from './components/illegal-page/illegal-page.component';
import { RedirectPageComponent } from './components/redirect-page/redirect-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent}, 
  {path: "rooms", component: RoomSelectorComponent},
  {path: "create", component: RoomCreatorComponent},
  {path: "game", component: GamePageComponent},
  
  {path: "debug/testpage", component: ChangeNameComponent},

  {path:"external/**", component:RedirectPageComponent},
  {path: "**", component: IllegalPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
