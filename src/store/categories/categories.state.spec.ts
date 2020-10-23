import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { CategoriesState, CategoriesStateModel } from './categories.state';
import { CategoriesAction } from './categories.actions';

describe('Categories store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([CategoriesState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: CategoriesStateModel = {
      items: ['item-1']
    };
    store.dispatch(new CategoriesAction('item-1'));
    const actual = store.selectSnapshot(CategoriesState.getState);
    expect(actual).toEqual(expected);
  });

});
