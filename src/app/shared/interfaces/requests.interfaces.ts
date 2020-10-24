import { Category } from './categories.interface';
import { Game } from './games.interface';
import { Links } from './global.interface';

export interface RequestConfig {
  brand: string;
  locale: string;
}

interface Embedded {
  games: Game[];
  game_categories: Category[];
}

export interface ListPayload {
  _links: Links;
  _embedded: Partial<Embedded>;
  page_count: number;
  page_size: number;
  total_items: number;
  page: number;
}
