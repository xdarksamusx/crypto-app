import { CoinData } from "./interfaces";

export const calculateTotalMarketCap = (coinArray: CoinData[]) => {
  const initialValue = 0;
  const sum = coinArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue.market_cap,
    initialValue
  );
  return sum;
};

export const calculateTotalVolume = (coinArray: CoinData[]) => {
  const initialValue = 0;
  const sum = coinArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total_volume,
    initialValue
  );
  return sum;
};

export const calculateBitcoinDominance = (
  coinArray: CoinData[],
  totalMarketCap: number
) => {
  const bitCoinMarketCap = coinArray[0].market_cap;
  const bitCoinDominance = bitCoinMarketCap / totalMarketCap;
  return bitCoinDominance;
};

export const calculateEthereumDominance = (
  coinArray: CoinData[],
  totalMarketCap: number
) => {
  const ethCoinMarketCap = coinArray[1].market_cap;
  const ethCoinDominance = ethCoinMarketCap / totalMarketCap;
  return ethCoinDominance;
};
