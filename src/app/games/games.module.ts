import { NgModule } from '@angular/core';

import { GamesRoutingModule } from './games-routing.module';
import { SharedModule } from '@shared/shared.module';
import { GamesComponent } from './components/games/games.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    SharedModule,
    GamesRoutingModule,
  ],
})
export class GamesModule { }
