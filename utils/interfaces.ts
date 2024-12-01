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
  weeklyPrices: number[];
  monthlyPrices: number[];
  fourteenDayPrices: number[];
  ninetyDayPrices: number[];
  ninnetyDayVolumes: number[];

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

export interface TableCoinData {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number | null;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number | null;
  name: string;
  price_change_24h: number;
  price_change_percentage_1h_in_currency: number | null;
  price_change_percentage_7d_in_currency: number | null;
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency: number;
  roi: null | { times: number; currency: string; percentage: number };
  sparkline_in_7d: { price: number[] };
  symbol: string;
  total_supply: number | null;
  total_volume: number;
}
