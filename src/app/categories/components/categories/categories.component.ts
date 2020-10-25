import { Component, OnDestroy, OnInit } from '@angular/core';

import { Actions, Select, Store } from '@ngxs/store';
import { actionsExecuting } from '@ngxs-labs/actions-executing';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';

import { GetCategoriesListAction } from '@store/categories/categories.actions';
import { CategoriesState, CategoriesStateModel } from '@store/categories/categories.state';
import { Category, Game } from '@shared/interfaces';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  @Select(CategoriesState.getState) public categoriesState$: Observable<CategoriesStateModel>;
  @Select(CategoriesState.getSelectedCategoryState) public selectedCategory$: Observable<Category>;
  @Select(actionsExecuting([GetCategoriesListAction])) getCategoriesListActionIsExecuting$: Observable<Actions>;

  public categories$: Observable<Category[]>;
  public games$: Observable<Game[]>;
  public destroy$ = new Subject<void>();

  public selectedCategorySlug: string;

  constructor(private readonly store: Store) { }

  public ngOnInit(): void {
    this.setCategories();
    this.setGames();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setCategories() {
    this.categories$ = this.categoriesState$.pipe(
      takeUntil(this.destroy$),
      map(data => data.categories),
    );

    this.store.dispatch(new GetCategoriesListAction());
  }

  private setGames() {
    this.games$ = this.selectedCategory$.pipe(
      takeUntil(this.destroy$),
      tap(category => this.selectedCategorySlug = category?.slug),
      filter(Boolean),
      map(({ _embedded }) => _embedded.games),
    );
  }
}
