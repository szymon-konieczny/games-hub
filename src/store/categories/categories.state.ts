import { Injectable } from '@angular/core';

import { State, Action, Selector, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { RequestsService } from '@core/http/requests.service';
import { Category } from '@shared/interfaces';
import { GetCategoriesListAction, GetSingleCategoryAction } from './categories.actions';

export interface CategoriesStateModel {
  selectedCategory: Category;
  categories: Category[];
  totalCount: number;
}

@State<CategoriesStateModel>({
  name: 'categoriesState',
  defaults: {
    selectedCategory: null,
    categories: [],
    totalCount: 0,
  }
})
@Injectable()
export class CategoriesState {

  constructor(private readonly requestsService: RequestsService) { }

  @Selector()
  public static getState(state: CategoriesStateModel) {
    return state;
  }

  @Selector()
  public static getCategoriesState(state: CategoriesStateModel) {
    return state.categories;
  }

  @Selector()
  public static getSelectedCategoryState(state: CategoriesStateModel) {
    return state.selectedCategory;
  }

  @Action(GetCategoriesListAction)
  public getCategoriesList(ctx: StateContext<CategoriesStateModel>) {
    return this.requestsService.getCategoriesList().pipe(tap(({ _embedded, total_items }) => {
      const categories = _embedded.game_categories;
      const totalCount = total_items;
      ctx.patchState({ categories, totalCount });
    }));
  }

  @Action(GetSingleCategoryAction)
  public getSingleCategory(ctx: StateContext<CategoriesStateModel>, { slug }: GetSingleCategoryAction) {
    const categories = CategoriesState.getCategoriesState(ctx.getState());
    const selectedCategory = categories.find((category => category.slug === slug));
    ctx.patchState({ selectedCategory });
  }
}
