import { NgModule } from '@angular/core';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { SharedModule } from '@shared/shared.module';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CategoriesComponent, CategoriesListComponent],
  imports: [
    CommonModule,
    SharedModule,
    CategoriesRoutingModule,
  ],
})
export class CategoriesModule { }
