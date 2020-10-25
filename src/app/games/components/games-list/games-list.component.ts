import { Component, OnDestroy, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';

import { GamesState, GamesStateModel } from '@store/games/games.state';
import { GetGamesListAction, GetSingleGameAction } from '@store/games/games.actions';
import { map, takeUntil } from 'rxjs/operators';
import { Game } from '@shared/interfaces';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit, OnDestroy {
  @Select(GamesState.getState) public gamesState$: Observable<GamesStateModel>;

  public games$: Observable<Game[]>;
  public destroy$ = new Subject<void>();

  constructor(
    private readonly store: Store,
  ) { }

  public ngOnInit(): void {
    this.games$ = this.gamesState$.pipe(
      takeUntil(this.destroy$),
      map(data => data.games),
    );

    this.store.dispatch(new GetGamesListAction());
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getSelectedGame(gameId: string): void {
    this.store.dispatch(new GetSingleGameAction(gameId));
  }

  public filterGames(games: Game[], gameName: string) {
    if (!games || games.length < 1) { return []; }

    return gameName
      ? games.filter(({ name }) => name
        .toLowerCase()
        .includes(gameName.toLowerCase()))
      : games;
  }

}
