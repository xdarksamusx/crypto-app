export interface Portfolio {
  amountBought: number;
  date: string;
  name: string;

  data: {
    market_data: {
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
    image: {
      small: string;
    };
  } | null;
}
