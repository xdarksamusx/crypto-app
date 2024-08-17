const units = ["1D", "7D", "14D", "1M", "3M", "5Y"];
import {
  getMonthlyLabels,
  getFourteenDayLabels,
  getThreeMonthLabels,
  getWeekLabels,
  getYearLabels,
  getDayLabels,
} from "@utils/labels";

export const createVolumeChart = function (coin: any, unit: string) {
  const {
    dailyVolumes,
    ninetyDayVolumes,
    yearlyVolumes,
    monthlyVolumes,
    weeklyVolumes,
    fourteenDayVolumes,
  } = coin;

  switch (unit) {
    case "7D":
      return weeklyVolumes;

    case "14D":
      return fourteenDayVolumes;

    case "1M":
      return monthlyVolumes;

    case "3M":
      return ninetyDayVolumes;

    case "1Y":
      return yearlyVolumes;

    case "5Y":

    default:
      return dailyVolumes;
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
  const labels = [];
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

export const selectRatio = (selectedUnit: string, ratios) => {
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
