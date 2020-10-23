import { State, Action, Selector, StateContext } from '@ngxs/store';
import { CategoriesAction } from './categories.actions';

export interface CategoriesStateModel {
  items: string[];
}

@State<CategoriesStateModel>({
  name: 'categories',
  defaults: {
    items: []
  }
})
export class CategoriesState {

  @Selector()
  public static getState(state: CategoriesStateModel) {
    return state;
  }

  @Action(CategoriesAction)
  public add(ctx: StateContext<CategoriesStateModel>, { payload }: CategoriesAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
