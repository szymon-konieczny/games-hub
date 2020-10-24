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

  @Action(GetCategoriesListAction)
  public getCategoriesList(ctx: StateContext<CategoriesStateModel>) {
    return this.requestsService.getCategoriesList().pipe(tap(({ _embedded, total_items }) => {
      const categories = _embedded.game_categories;
      const totalCount = total_items;
      ctx.patchState({ categories, totalCount });
    }));
  }

  @Action(GetSingleCategoryAction)
  public getSingleGame(ctx: StateContext<CategoriesStateModel>, { slug }: GetSingleCategoryAction) {
    return this.requestsService.getSingleCategory(slug).pipe(tap(selectedCategory => ctx.patchState({ selectedCategory })));
  }
}
