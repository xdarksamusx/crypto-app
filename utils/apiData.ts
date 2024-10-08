import axios from "axios";
import { previousDate, currentDate } from "./dateFunctions";
import { pricePoint } from "./interfaces";
import { CoinData } from "./interfaces";

interface HistoricalDataResponse {
  prices: [number, number][];
  total_volumes: [number, number][];
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const fetchCoins = async (): Promise<CoinData[]> => {
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

export const fetchHistoricalData = async (
  coinName: any,
  days: number,
  retries: number = 3
): Promise<HistoricalDataResponse | undefined> => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart/range`,
      {
        params: {
          vs_currency: "usd",
          from: previousDate(days),
          to: currentDate(),
        },
      }
    );
    const { data } = response;
    return data;
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... attempts left: ${retries}`);
      await delay(30000); // Wait for 3 seconds before retrying
      return fetchHistoricalData(coinName, days, retries - 1);
    } else {
      console.error("Failed to fetch data after multiple attempts", error);
      throw error;
    }
  }
};

export const calculateWeeklyPriceChange = (
  chartData: any,
  currentPrice: number
) => {
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

export const createDailyChartArray = (chartData: any) => {
  const { prices, total_volumes } = chartData;

  const dailyVolumesAndDates = total_volumes;
  const dailyVolumesArray = dailyVolumesAndDates.map(
    (volume: any) => volume[1]
  );

  const dailyPricesAndDates = prices;
  const dailyPricesArray = dailyPricesAndDates.map((price: any) => price[1]);

  return { dailyVolumesArray, dailyPricesArray };
};

export const createWeeklyChartArray = (chartData: any) => {
  const { prices, total_volumes } = chartData;

  const weeklyVolumesAndDates = total_volumes;
  const weeklyVolumesArray = weeklyVolumesAndDates.map(
    (volume: any) => volume[1]
  );

  const dailyPricesAndDates = prices;
  const weeklyPriceArray = dailyPricesAndDates.map((price: any) => price[1]);

  return { weeklyVolumesArray, weeklyPriceArray };
};

export const createFourteenChartArray = (chartData: any) => {
  const { prices, total_volumes } = chartData;

  const fourteenDayVolumesAndDates = total_volumes;
  const fourteenDayVolumesArray = fourteenDayVolumesAndDates.map(
    (volume: any) => volume[1]
  );

  const fourteenDayPricesAndDates = prices;
  const fourteenDayPriceArray = fourteenDayPricesAndDates.map(
    (price: any) => price[1]
  );

  return { fourteenDayVolumesArray, fourteenDayPriceArray };
};

export const createMonthlyChartArray = (chartData: any) => {
  const { prices, total_volumes } = chartData;

  const monthlyVolumesAndDates = total_volumes;
  const monthlyVolumesArray = monthlyVolumesAndDates.map(
    (volume: any) => volume[1]
  );

  const monthlyPricesAndDates = prices;
  const monthlyPriceArray = monthlyPricesAndDates.map((price: any) => price[1]);

  return { monthlyVolumesArray, monthlyPriceArray };
};

export const createNinetyDayChartArray = (chartData: any) => {
  const { prices, total_volumes } = chartData;

  const ninetyDayVolumesAndDates = total_volumes.slice(-90);
  const ninetyDayVolumesArray = ninetyDayVolumesAndDates.map(
    (volume: any) => volume[1]
  );

  const ninetyDayPricesAndDates = prices.slice(-90);
  const ninetyDayPricesArray = ninetyDayPricesAndDates.map(
    (price: any) => price[1]
  );

  return { ninetyDayVolumesArray, ninetyDayPricesArray };
};

export const createYearlyChartArray = (chartData: any) => {
  const { prices, total_volumes } = chartData;

  const yearlyDayVolumesAndDates = total_volumes.slice(-364);
  const yearlyVolumesArray = yearlyDayVolumesAndDates.map(
    (volume: any) => volume[1]
  );

  const yearlyPricesAndDates = prices.slice(-364);
  const yearlyPricesArray = yearlyPricesAndDates.map((price: any) => price[1]);

  return { yearlyVolumesArray, yearlyPricesArray };
};

export const fetchDataWithDelay = async (coinData: any[], delayMs: number) => {
  const fetchedHistoricalData: any[] = [];
  let rank = 0;
  for (const coin of coinData) {
    rank = rank + 1;

    const dailyChartData = await fetchHistoricalData(coin.id, 1);
    const weeklyChartData = await fetchHistoricalData(coin.id, 7);
    const fourteenDayChartData = await fetchHistoricalData(coin.id, 14);
    const monthlyChartData = await fetchHistoricalData(coin.id, 30);

    const yearlyChartData = await fetchHistoricalData(coin.id, 364);
    const ninetyDayChartData = await fetchHistoricalData(coin.id, 90);

    const hourly_price_change = calculateHourlyPriceChange(
      dailyChartData,
      coin.current_price
    );
    const weeklyPriceChange = calculateWeeklyPriceChange(
      ninetyDayChartData,
      coin.current_price
    );

    const dailyCharts = createDailyChartArray(dailyChartData);
    await delay(12000);
    const weeklyCharts = createWeeklyChartArray(weeklyChartData);
    await delay(12000);

    const monthlyCharts = createMonthlyChartArray(monthlyChartData);

    const fourteenDayCharts = createFourteenChartArray(fourteenDayChartData);
    await delay(12000);

    const ninetyDayCharts = createNinetyDayChartArray(ninetyDayChartData);
    await delay(12000);

    const yearlyCharts = createYearlyChartArray(yearlyChartData);

    const newCoinObject = {
      ...coin,
      rank,
      hourly_price_change,
      weeklyPriceChange,
      dailyVolumes: dailyCharts.dailyVolumesArray,
      dailyPrices: dailyCharts.dailyPricesArray,
      weeklyVolumes: weeklyCharts.weeklyVolumesArray,
      weeklyPrices: weeklyCharts.weeklyPriceArray,
      monthlyPrices: monthlyCharts.monthlyPriceArray,
      monthlyVolumes: monthlyCharts.monthlyVolumesArray,
      fourteenDayVolumes: fourteenDayCharts.fourteenDayVolumesArray,
      fourteenDayPrices: fourteenDayCharts.fourteenDayPriceArray,
      ninetyDayVolumes: ninetyDayCharts.ninetyDayVolumesArray,
      ninetyDayPrices: ninetyDayCharts.ninetyDayPricesArray,
      yearlyVolumes: yearlyCharts.yearlyVolumesArray,
      yearlyPrices: yearlyCharts.yearlyPricesArray,
    };

    fetchedHistoricalData.push(newCoinObject);

    console.log(fetchedHistoricalData);

    await delay(8000);
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
