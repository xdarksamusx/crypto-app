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
  const dailyRatios = calculateRatios(
    bitcoinData.bitcoinData.dailyData,
    ethereumData.ethereumData.dailyData
  );
  const weeklyRatios = calculateRatios(
    bitcoinData.bitcoinData.weeklyData.slice(0, 200),
    ethereumData.ethereumData.weeklyData.slice(0, 200)
  );
  const monthlyRatios = calculateRatios(
    bitcoinData.bitcoinData.monthlyData.slice(0, 800),
    ethereumData.ethereumData.monthlyData.slice(0, 800)
  );
  const ninetyDayRatios = calculateRatios(
    bitcoinData.bitcoinData.ninetyDayData,
    ethereumData.ethereumData.ninetyDayData
  );
  const fourteenDayRatios = calculateRatios(
    bitcoinData.bitcoinData.fourteenDayData.slice(0, 400),
    ethereumData.ethereumData.fourteenDayData.slice(0, 400)
  );
  const yearlyRatios = calculateRatios(
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

export const calculateBitcoinRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const dailyRatios = calculateRatios(
    ethereumData.ethereumData.dailyData,
    bitcoinData.bitcoinData.dailyData
  );
  const weeklyRatios = calculateRatios(
    ethereumData.ethereumData.weeklyData.slice(0, 200),
    bitcoinData.bitcoinData.weeklyData.slice(0, 200)
  );
  const monthlyRatios = calculateRatios(
    ethereumData.ethereumData.monthlyData.slice(0, 800),
    bitcoinData.bitcoinData.monthlyData.slice(0, 800)
  );
  const ninetyDayRatios = calculateRatios(
    ethereumData.ethereumData.ninetyDayData,
    bitcoinData.bitcoinData.ninetyDayData
  );
  const fourteenDayRatios = calculateRatios(
    ethereumData.ethereumData.fourteenDayData.slice(0, 400),
    bitcoinData.bitcoinData.fourteenDayData.slice(0, 400)
  );
  const yearlyRatios = calculateRatios(
    ethereumData.ethereumData.yearlyData,
    bitcoinData.bitcoinData.yearlyData
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
  data1: [number, number][],
  data2: [number, number][]
) => {
  const minLength = Math.min(data1.length, data2.length);
  return data1.slice(0, minLength).map(([timestamp, price1], index) => {
    const [, price2] = data2[index];
    return price2 / price1;
  });
};

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
