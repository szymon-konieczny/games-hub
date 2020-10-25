import { Component, OnDestroy, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Game } from '@shared/interfaces';
import { GetGamesListAction } from '@store/games/games.actions';
import { GamesState, GamesStateModel } from '@store/games/games.state';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit, OnDestroy {

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

}
