import { NgModule } from '@angular/core';

import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameComponent } from './components/game/game.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [GamesListComponent, GameComponent],
  imports: [
    SharedModule,
    GamesRoutingModule,
  ]
})
export class GamesModule { }
