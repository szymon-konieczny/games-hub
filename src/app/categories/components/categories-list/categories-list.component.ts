import { Component, Input } from '@angular/core';

import { Store } from '@ngxs/store';

import { GetSingleCategoryAction } from '@store/categories/categories.actions';
import { Category } from '@shared/interfaces';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {
  @Input() public categoriesList: Category[];
  @Input() public selectedCategorySlug: string;

  constructor(private readonly store: Store) { }

  public selectCategory(slug: string): void {
    this.store.dispatch(new GetSingleCategoryAction(slug));
  }

  public isActive(category: Category): boolean {
    return category?.slug === this.selectedCategorySlug;
  }
}
