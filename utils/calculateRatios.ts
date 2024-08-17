import { CoinData } from "./interfaces";

interface Prices {
  dailyPrices: number[];
  weeklyPrices: number[];
  fourteenDayPrices: number[];
  monthlyPrices: number[];
  ninetyDayPrices: number[];
  yearlyPrices: number[];
}

export const calculateRatios = (bitcoinData: Prices, ethereumData: Prices) => {
  const dailyRatios = calculateDailyRatios(bitcoinData, ethereumData);
  const weeklyRatios = calculateWeeklyRatios(bitcoinData, ethereumData);
  const monthlyRatios = calculateMonthlyRatios(bitcoinData, ethereumData);
  const ninetyDayRatios = calculateNinetyDayRatios(bitcoinData, ethereumData);
  const fourteenDayRatios = calculateFourteenDayRatios(
    bitcoinData,
    ethereumData
  );

  const yearlyRatios = calculateYearlyRatios(bitcoinData, ethereumData);

  const ratios = {
    dailyRatios,
    weeklyRatios,
    fourteenDayRatios,
    monthlyRatios,
    ninetyDayRatios,
    yearlyRatios,
  };

  return ratios;
};

const calculateDailyRatios = (bitcoinData: Prices, ethereumData: Prices) => {
  const { dailyPrices: bitcoinPrices } = bitcoinData;
  const { dailyPrices: ethereumPrices } = ethereumData;
  const ratios = bitcoinPrices.map(
    (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
  );

  return ratios;
};

const calculateWeeklyRatios = (bitcoinData: Prices, ethereumData: Prices) => {
  const { weeklyPrices: bitcoinPrices } = bitcoinData;
  const { weeklyPrices: ethereumPrices } = ethereumData;
  const ratios = bitcoinPrices.map(
    (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
  );
  return ratios;
};

const calculateFourteenDayRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { fourteenDayPrices: bitcoinPrices } = bitcoinData;
  const { fourteenDayPrices: ethereumPrices } = ethereumData;
  const ratios = bitcoinPrices.map(
    (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
  );
  return ratios;
};

const calculateMonthlyRatios = (bitcoinData: Prices, ethereumData: Prices) => {
  const { monthlyPrices: bitcoinPrices } = bitcoinData;
  const { monthlyPrices: ethereumPrices } = ethereumData;
  const ratios = bitcoinPrices.map(
    (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
  );
  return ratios;
};

const calculateNinetyDayRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayPrices: bitcoinPrices } = bitcoinData;
  const { ninetyDayPrices: ethereumPrices } = ethereumData;
  const ratios = bitcoinPrices.map(
    (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
  );
  return ratios;
};

const calculateYearlyRatios = (bitcoinData: Prices, ethereumData: Prices) => {
  const { yearlyPrices: bitcoinPrices } = bitcoinData;
  const { yearlyPrices: ethereumPrices } = ethereumData;
  const ratios = bitcoinPrices.map(
    (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
  );
  return ratios;
};
