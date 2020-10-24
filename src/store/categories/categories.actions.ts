enum CategoriesListAction {
  GetCategoriesList = '[Category] Get categories list',
  GetSingleCategory = '[Category] Get single category',
}

export class GetCategoriesListAction {
  public static readonly type = CategoriesListAction.GetCategoriesList;
}

export class GetSingleCategoryAction {
  public static readonly type = CategoriesListAction.GetSingleCategory;

  constructor(public slug: string) { }
}
