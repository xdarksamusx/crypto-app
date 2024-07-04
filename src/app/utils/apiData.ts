import axios from "axios";
import { previousDate, currentDate } from "./dateFunctions";

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

export const fetchDataWithDelay = async (coinData: any[], delayMs: number) => {
  const fetchedHistoricalData: any[] = [];

  for (const coin of coinData) {
    const chartData = await fetchHistoricalData(coin.id);
    const newCoinObject = { ...coin, chartData };
    fetchedHistoricalData.push(newCoinObject);
    await delay(delayMs);
  }

  console.log("coin", fetchedHistoricalData);

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

export const getInitialCoinState = () => {
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
