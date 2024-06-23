export interface FetchDataResponse {
  data: CryptoCurrency[];
  status: Status;
}

export interface Status {
  timestamp: string;
  error_code: number;
  error_message: string | null;
  elasped: number;
  credit_count: number;
}

export interface CryptoCurrency {
  id: number;
  name: string;
  symbol: string;
  price: number;
  max_supply: number;
  market_cap: number;
  total_supply: number;
  volume_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
}

export interface CoinState {
  coins: CryptoCurrency[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
