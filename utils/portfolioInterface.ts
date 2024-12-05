export interface Portfolio {
  name: string;
  amountBought: number;
  date: string;
  image: {
    small: string | null;
    large: string | null;
    thumb: string | null;
  };
  market_data?: {
    current_price: {
      usd: number;
    };
    price_change_24h_in_currency: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    circulating_supply: number;
    max_supply: number;
  };
}
