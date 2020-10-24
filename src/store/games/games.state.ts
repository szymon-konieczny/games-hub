import { Injectable } from '@angular/core';

import { State, Action, Selector, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { RequestsService } from '@core/http/requests.service';
import { GetGamesListAction, GetSingleGameAction } from './games.actions';
import { Game } from '@shared/interfaces/games.interface';

export interface GamesStateModel {
  selectedGame: Game;
  games: Game[];
  totalCount: number;
}

@State<GamesStateModel>({
  name: 'gamesState',
  defaults: {
    selectedGame: null,
    games: [],
    totalCount: 0,
  }
})
@Injectable()
export class GamesState {

  constructor(private readonly requestsService: RequestsService) { }

  @Selector()
  public static getState(state: GamesStateModel) {
    return state;
  }

  @Action(GetGamesListAction)
  public getGamesList(ctx: StateContext<GamesStateModel>) {
    return this.requestsService.getGamesList().pipe(tap(({ _embedded, total_items }) => {
      const games = _embedded.games;
      const totalCount = total_items;
      ctx.patchState({ games, totalCount });
    }));
  }

  @Action(GetSingleGameAction)
  public getSingleGame(ctx: StateContext<GamesStateModel>, { gameId }: GetSingleGameAction) {
    return this.requestsService.getSingleGame(gameId).pipe(tap(selectedGame => ctx.patchState({ selectedGame })));
  }
}
