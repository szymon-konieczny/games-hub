import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'games',
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'games',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
