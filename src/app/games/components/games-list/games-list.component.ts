import { Component, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { GamesState, GamesStateModel } from '@store/games/games.state';
import { GetGamesListAction, GetSingleGameAction } from '@store/games/games.actions';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  @Select(GamesState.getState) public gamesState$: Observable<GamesStateModel>;

  constructor(private readonly store: Store) { }

  public ngOnInit(): void {
    this.store.dispatch(new GetGamesListAction());
  }

  public getSelectedGame(gameId: string): void {
    this.store.dispatch(new GetSingleGameAction(gameId));
  }

}
