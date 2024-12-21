import { CoinData } from "./interfaces";

interface NestedPrice {
  dailyData: [number, number][];
  weeklyData: [number, number][];
  monthlyData: [number, number][];
  ninetyDayData: [number, number][];
  fourteenDayData: [number, number][];
  yearlyData: [number, number][];
}

interface Prices {
  bitcoinData: NestedPrice;
  ethereumData: NestedPrice;
}

export const calculateEthereumRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const dailyRatios = calculateEthereumDailyRatios(
    bitcoinData.bitcoinData.dailyData,
    ethereumData.ethereumData.dailyData
  );
  const weeklyRatios = calculateEthereumWeeklyRatios(
    bitcoinData.bitcoinData.weeklyData,
    ethereumData.ethereumData.weeklyData
  );
  const monthlyRatios = calculateEthereumMonthlyRatios(
    bitcoinData.bitcoinData.monthlyData,
    ethereumData.ethereumData.monthlyData
  );
  const ninetyDayRatios = calculateEthereumNinetyDayRatios(
    bitcoinData.bitcoinData.ninetyDayData,
    ethereumData.ethereumData.ninetyDayData
  );
  const fourteenDayRatios = calculateEthereumFourteenDayRatios(
    bitcoinData.bitcoinData.fourteenDayData,
    ethereumData.ethereumData.fourteenDayData
  );

  const yearlyRatios = calculateEthereumYearlyRatios(
    bitcoinData.bitcoinData.yearlyData,
    ethereumData.ethereumData.yearlyData
  );

  return {
    dailyRatios,
    weeklyRatios,
    fourteenDayRatios,
    monthlyRatios,
    ninetyDayRatios,
    yearlyRatios,
  };
};

const calculateRatios = (
  bitcoinPrices: [number, number][],
  ethereumPrices: [number, number][]
) => {
  return bitcoinPrices.map(([timestamp, bitcoinPrice], index) => {
    const [, ethereumPrice] = ethereumPrices[index];
    return ethereumPrice / bitcoinPrice;
  });
};

const calculateEthereumDailyRatios = (
  bitcoinPrices: [number, number][],
  ethereumPrices: [number, number][]
) => calculateRatios(bitcoinPrices, ethereumPrices);

const calculateEthereumWeeklyRatios = (
  bitcoinPrices: [number, number][],
  ethereumPrices: [number, number][]
) => calculateRatios(bitcoinPrices.slice(0, 200), ethereumPrices.slice(0, 200));

const calculateEthereumFourteenDayRatios = (
  bitcoinPrices: [number, number][],
  ethereumPrices: [number, number][]
) => calculateRatios(bitcoinPrices.slice(0, 400), ethereumPrices.slice(0, 400));

const calculateEthereumMonthlyRatios = (
  bitcoinPrices: [number, number][],
  ethereumPrices: [number, number][]
) => calculateRatios(bitcoinPrices.slice(0, 800), ethereumPrices.slice(0, 800));

const calculateEthereumNinetyDayRatios = (
  bitcoinPrices: [number, number][],
  ethereumPrices: [number, number][]
) => calculateRatios(bitcoinPrices, ethereumPrices);

const calculateEthereumYearlyRatios = (
  bitcoinPrices: [number, number][],
  ethereumPrices: [number, number][]
) => calculateRatios(bitcoinPrices, ethereumPrices);

export const computeRatioValue = (selectedUnit: string, array: number[]) => {
  const numericArray = array.filter(
    (value) => typeof value === "number" && !isNaN(value)
  );

  const sum = numericArray.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );

  return sum / numericArray.length;
};
