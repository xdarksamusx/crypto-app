import axios from "axios";
import { previousDate, currentDate } from "./dateFunctions";
import { pricePoint } from "./interfaces";
import { CoinData } from "./interfaces";
export const fetchCoins = async () => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets`,
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 20,
        page: 1,
        sparkline: false,
      },
    }
  );

  return response.data;
};

export const fetchHistoricalData = async (coinName: any) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart/range`,
      {
        params: {
          vs_currency: "usd",
          from: previousDate(),
          to: currentDate(),
        },
      }
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log("check error", error);
  }
};

export const calculateWeeklyPriceChange = (
  chartData: any,
  currentPrice: number
) => {
  console.log("chart data in api file", chartData);
  const { prices } = chartData;
  let sum: number = 0;
  for (let i = prices.length - 6; i < prices.length; i++) {
    const pricePoint = prices[i];
    const price = pricePoint[1];
    sum += price;
  }
  const average: number = sum / 7;
  const weeklyPriceChange = (
    ((average - currentPrice) / currentPrice) *
    100
  ).toFixed(2);
  return weeklyPriceChange;
};

export const calculateHourlyPriceChange = (
  chartData: any,
  currentPrice: number
) => {
  const { prices } = chartData;

  const pricePoint = prices[prices.length - 1];
  const price = pricePoint[1];
  const hourlyPriceChange = (((price - currentPrice) / price) * 100).toFixed(2);
  return hourlyPriceChange;
};

export const fetchDataWithDelay = async (coinData: any[], delayMs: number) => {
  const fetchedHistoricalData: any[] = [];
  let rank = 0;
  for (const coin of coinData) {
    const chartData = await fetchHistoricalData(coin.id);
    rank = rank + 1;

    const hourly_price_change = calculateHourlyPriceChange(
      chartData,
      coin.current_price
    );
    const weeklyPriceChange = calculateWeeklyPriceChange(
      chartData,
      coin.current_price
    );

    const newCoinObject = {
      ...coin,
      rank,
      chartData,
      hourly_price_change,
      weeklyPriceChange,
    };
    fetchedHistoricalData.push(newCoinObject);
    await delay(20000);
  }

  return fetchedHistoricalData;
};

export const storage = async (storageData: any) => {
  console.log("storage data", storageData);
  const itemKey = "MarketData";
  const existingDataString = localStorage.getItem(itemKey);

  if (existingDataString) {
    const existingData = JSON.parse(existingDataString);
    return existingData;
  } else {
    const storeCoinData = { coinData: storageData };
    localStorage.setItem(itemKey, JSON.stringify(storeCoinData));
    return storeCoinData;
  }
};

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getInitialCoinState = (): CoinData[] => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const storedCoinData = localStorage.getItem("MarketData");

    if (storedCoinData !== null) {
      try {
        const storedDataString = JSON.parse(storedCoinData);
        return storedDataString.coinData;
      } catch (error) {
        console.error("Failed to parse error");
        return [];
      }
    }
  }

  return [];
};

export const capitalizeFirstLetter = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
