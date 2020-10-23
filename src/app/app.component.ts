import { Component, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { GetGamesListAction, GetSingleGameAction } from '@store/games/games.actions';
import { GamesState, GamesStateModel } from '@store/games/games.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
