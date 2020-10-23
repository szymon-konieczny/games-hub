export interface Game {
  id: string;
  slug: string;
  background: string;
  description: string;
  game_stakes: number;
  height: number;
  name: string;
  width: number;
  thumbnail: string;
  created_at: {
    date: Date
  };
  screenshot: string;
  homepage_image: string;
  vendor: string;
  vendor_name: string;
  sub_vendor: string;
  sub_vendor_name: string;
  vendor_properties: string;
  meta: {
    description_short: string;
    currency: string;
    bonus: boolean;
    free_spins: boolean;
  };
  enabled: false;
  label: string;
  cols: number;
  rows: number;
  pos_x: number;
  pos_y: number;
  volatility: number;
  rating: number;
  backgrounds: string[];
  screenshots: string[];
  thumbnails: {
    legacy: string;
  };
  jurisdiction: string;
  login_required: false;
  currency: string;
  min_bet: number;
  max_bet: number;
  _links: {
    self: {
      href: string;
    }
  };
}
