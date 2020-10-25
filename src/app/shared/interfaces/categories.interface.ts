import { Game } from './games.interface';
import { Links } from './global.interface';

export interface CategoriesResponse {
  _links: Links;
  _embedded: EmbeddedCategories;
  total_items: number;
}

interface EmbeddedCategories {
  game_categories: Category;
}

interface EmbeddedGames {
  games: Game[];
}

export interface Category {
  name: string;
  order: number;
  slug: string;
  _embedded: EmbeddedGames;
  _links: Links;
}
