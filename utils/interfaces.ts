export interface FetchDataResponse {
  data: CoinData[];
  status: Status;
}

export interface Status {
  timestamp: string;
  error_code: number;
  error_message: string | null;
  elasped: number;
  credit_count: number;
}
export interface pricePoint {
  pricePoint: number;
}

export interface CoinData {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  price: number;
  max_supply: number;
  market_cap: number;
  total_supply: number;
  volume_24h: number;
  current_price: number;
  price_change_1h: number;
  dailyPrices: number[];
  dailyVolunes: number[];
  image: string;
  ninetyDayPrices: [];
  ninnetyDayVolumes: [];

  price_change_percentage_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_7d: number;
  total_volume: number;
  hourly_price_change: number;
  weeklyPriceChange: number;
  sortKey?: string;
  hourlyColor?: string;
  dailyColor?: string;
  weeklyColor?: string;
  yearlyPrices: number[];
  yearlyVolumes: number[];
  currentlySelectedCoin: string;
}

export interface CoinState {
  coins: CoinData[];
  sortKey: keyof CoinData;

  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
