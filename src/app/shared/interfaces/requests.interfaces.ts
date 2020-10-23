import { Game } from './games.interfaces';

export interface RequestConfig {
  brand: string;
  locale: string;
}

interface Embedded {
  games: Game[];
}

interface UrlLink {
  href: string;
}

interface Link {
  [key: string]: UrlLink;
}

export interface GamesListPayload {
  _links: Link;
  _embedded: Embedded;
  page_count: number;
  page_size: number;
  total_items: number;
  page: number;
}
