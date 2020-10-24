import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { GetCategoriesListAction } from '@store/categories/categories.actions';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private readonly store: Store) { }

  public ngOnInit(): void {
    this.store.dispatch(new GetCategoriesListAction());
  }

}
