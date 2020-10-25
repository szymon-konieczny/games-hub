import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { GameComponent } from './components/game/game.component';
import { GamesListComponent } from './components/games-list/games-list.component';

@NgModule({
  declarations: [
    GamesListComponent,
    GameComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    GamesListComponent,
    GameComponent,
  ],
})
export class SharedModule { }
