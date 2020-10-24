export interface CreationDate {
  date: Date;
}

export interface Meta {
  description_short: string;
  currency: string;
  description_long: string;
  bonus: boolean;
  free_spins: boolean;
  lines: number;
}

export interface Thumbnails {
  [key: string]: string;
}

interface UrlLink {
  href: string;
}

export interface Links {
  [key: string]: UrlLink;
}
