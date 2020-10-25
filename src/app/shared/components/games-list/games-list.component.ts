import { Component, Input } from '@angular/core';

import { Select } from '@ngxs/store';
import { actionsExecuting } from '@ngxs-labs/actions-executing';

import { Game } from '@shared/interfaces';
import { GetGamesListAction } from '@store/games/games.actions';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {
  @Input() public gamesList: Game[];

  @Select(actionsExecuting([GetGamesListAction])) getGamesListIsExecuting$;

  public filterGames(games: Game[], gameName: string) {
    if (!games || games.length < 1) { return []; }

    return gameName
      ? games.filter(({ name }) => name
        .toLowerCase()
        .includes(gameName.toLowerCase()))
      : games;
  }

}
