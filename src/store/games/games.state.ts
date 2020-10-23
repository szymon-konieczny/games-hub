import { State, Action, Selector, StateContext } from '@ngxs/store';
import { GamesAction } from './games.actions';

export interface GamesStateModel {
  items: string[];
}

@State<GamesStateModel>({
  name: 'games',
  defaults: {
    items: []
  }
})
export class GamesState {

  @Selector()
  public static getState(state: GamesStateModel) {
    return state;
  }

  @Action(GamesAction)
  public add(ctx: StateContext<GamesStateModel>, { payload }: GamesAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
