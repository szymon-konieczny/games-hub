import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { GetSingleGameAction } from '@store/games/games.actions';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void { }

}
