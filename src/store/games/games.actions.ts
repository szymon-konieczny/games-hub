enum GamesActionsTypes {
  GetGamesList = '[Game] Get games list',
  GetSingleGame = '[Game] Get single game',
}

export class GetGamesListAction {
  public static readonly type = GamesActionsTypes.GetGamesList;
}

export class GetSingleGameAction {
  public static readonly type = GamesActionsTypes.GetSingleGame;

  constructor(public gameId: string) { }
}
