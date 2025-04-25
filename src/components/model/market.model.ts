export interface Market {
  items: MarketItem[];
}

export interface MarketItem {
  id: string;
  name: string;
  type: string;
  description: string;
  cost: number;
}
