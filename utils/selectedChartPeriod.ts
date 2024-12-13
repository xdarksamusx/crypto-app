const units = ["1D", "7D", "14D", "1M", "3M", "5Y"];
import {
  getMonthlyLabels,
  getFourteenDayLabels,
  getThreeMonthLabels,
  getWeekLabels,
  getYearLabels,
  getDayLabels,
} from "./labels";

export const computeVolumeCharts = function (chart: any, unit: string) {
  let volumeChart, total_Volumes_Array;

  const { dailyData, ninetyDayData, yearlyData } = chart;

  switch (unit) {
    case "7D":
      volumeChart = ninetyDayData.total_volumes.slice(0, 100);
      total_Volumes_Array = volumeChart.map((volume: any) => volume[1]);

      return total_Volumes_Array;

    case "14D":
      volumeChart = ninetyDayData.total_volumes.slice(0, 200);
      total_Volumes_Array = volumeChart.map((volume: any) => volume[1]);

      return total_Volumes_Array;

    case "1M":
      volumeChart = ninetyDayData.total_volumes.slice(0, 800);
      total_Volumes_Array = volumeChart.map((volume: any) => volume[1]);

      return total_Volumes_Array;

    case "3M":
      volumeChart = ninetyDayData.total_volumes;
      total_Volumes_Array = volumeChart.map((volume: any) => volume[1]);

      return total_Volumes_Array;

    case "1Y":
      volumeChart = yearlyData.total_volumes;
      total_Volumes_Array = volumeChart.map((volume: any) => volume[1]);

      return total_Volumes_Array;
    case "5Y":

    default:
      total_Volumes_Array = dailyData.total_volumes.map(
        (volume: any) => volume[1]
      );

      return total_Volumes_Array;
  }
};

export const computePriceCharts = function (chart: any, unit: string) {
  let priceChart, totalPriceArray;

  const { dailyData, ninetyDayData, yearlyData } = chart;

  switch (unit) {
    case "7D":
      priceChart = ninetyDayData.prices.slice(0, 100);
      totalPriceArray = priceChart.map((price: any) => price[1]);

      return totalPriceArray;

    case "14D":
      priceChart = ninetyDayData.prices.slice(0, 200);
      totalPriceArray = priceChart.map((price: any) => price[1]);

      return totalPriceArray;

    case "1M":
      priceChart = ninetyDayData.prices.slice(0, 800);
      totalPriceArray = priceChart.map((price: any) => price[1]);

      return totalPriceArray;

    case "3M":
      priceChart = ninetyDayData.prices;
      totalPriceArray = priceChart.map((price: any) => price[1]);

      return totalPriceArray;

    case "1Y":
      priceChart = yearlyData.prices;
      totalPriceArray = priceChart.map((price: any) => price[1]);

      return totalPriceArray;
    case "5Y":

    default:
      totalPriceArray = dailyData.prices.map((price: any) => price[1]);

      return totalPriceArray;
  }
};

export const createPriceChart = function (coin: any, unit: string) {
  const {
    dailyPrices,
    ninetyDayPrices,
    yearlyPrices,
    monthlyPrices,
    weeklyPrices,
    fourteenDayPrices,
  } = coin;

  switch (unit) {
    case "7D":
      return weeklyPrices;

    case "14D":
      return fourteenDayPrices;

    case "1M":
      return monthlyPrices;

    case "3M":
      return ninetyDayPrices;

    case "1Y":
      return yearlyPrices;

    case "5Y":

    default:
      return dailyPrices;
  }
};

export const createLabels = (unit: string) => {
  switch (unit) {
    case "7D":
      return getWeekLabels();

    case "14D":
      return getFourteenDayLabels();

    case "1M":
      return getMonthlyLabels();

    case "3M":
      return getThreeMonthLabels();

    case "1Y":
      return getYearLabels();

    default:
      return getDayLabels();
  }
};

export const getIntervalLabels = (dataLength: number, numLabels: number) => {
  const labels: string[] = [];
  const interval = Math.floor(dataLength / numLabels);

  for (let i = 0; i < numLabels; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i * interval);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    labels.push(`${month} ${day}`);
  }

  return labels.reverse();
};

export const selectRatio = (selectedUnit: string, ratios: any) => {
  const {
    dailyRatios,
    weeklyRatios,
    fourteenDayRatios,
    monthlyRatios,
    ninetyDayRatios,
    yearlyRatios,
  } = ratios;

  switch (selectedUnit) {
    case "7D":
      return weeklyRatios;

    case "14D":
      return fourteenDayRatios;

    case "1M":
      return monthlyRatios;

    case "3M":
      return ninetyDayRatios;

    case "1Y":
      return yearlyRatios;

    default:
      return dailyRatios;
  }
};
