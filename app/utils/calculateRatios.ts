// import { CoinData } from "./interfaces";

// interface Prices {
//   dailyPrices: number[];
//   weeklyPrices: number[];
//   fourteenDayPrices: number[];
//   monthlyPrices: number[];
//   ninetyDayPrices: number[];
//   yearlyPrices: number[];
// }

// export const calculateEthereumRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const dailyRatios = calculateEthereumDailyRatios(bitcoinData, ethereumData);
//   const weeklyRatios = calculateEthereumWeeklyRatios(bitcoinData, ethereumData);
//   const monthlyRatios = calculateEthereumMonthlyRatios(
//     bitcoinData,
//     ethereumData
//   );
//   const ninetyDayRatios = calculateEthereumNinetyDayRatios(
//     bitcoinData,
//     ethereumData
//   );
//   const fourteenDayRatios = calculateEthereumFourteenDayRatios(
//     bitcoinData,
//     ethereumData
//   );

//   const yearlyRatios = calculateEthereumYearlyRatios(bitcoinData, ethereumData);

//   const ratios = {
//     dailyRatios,
//     weeklyRatios,
//     fourteenDayRatios,
//     monthlyRatios,
//     ninetyDayRatios,
//     yearlyRatios,
//   };

//   return ratios;
// };

// const calculateEthereumDailyRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { dailyPrices: bitcoinPrices } = bitcoinData;
//   const { dailyPrices: ethereumPrices } = ethereumData;
//   const ratios = bitcoinPrices.map(
//     (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
//   );

//   return ratios;
// };

// const calculateEthereumWeeklyRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { weeklyPrices: bitcoinPrices } = bitcoinData;
//   const { weeklyPrices: ethereumPrices } = ethereumData;
//   const ratios = bitcoinPrices.map(
//     (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
//   );
//   return ratios;
// };

// const calculateEthereumFourteenDayRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { fourteenDayPrices: bitcoinPrices } = bitcoinData;
//   const { fourteenDayPrices: ethereumPrices } = ethereumData;
//   const ratios = bitcoinPrices.map(
//     (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
//   );
//   return ratios;
// };

// const calculateEthereumMonthlyRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { monthlyPrices: bitcoinPrices } = bitcoinData;
//   const { monthlyPrices: ethereumPrices } = ethereumData;
//   const ratios = bitcoinPrices.map(
//     (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
//   );
//   return ratios;
// };

// const calculateEthereumNinetyDayRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { ninetyDayPrices: bitcoinPrices } = bitcoinData;
//   const { ninetyDayPrices: ethereumPrices } = ethereumData;
//   const ratios = bitcoinPrices.map(
//     (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
//   );
//   return ratios;
// };

// const calculateEthereumYearlyRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { yearlyPrices: bitcoinPrices } = bitcoinData;
//   const { yearlyPrices: ethereumPrices } = ethereumData;
//   const ratios = bitcoinPrices.map(
//     (bitcoinPrice, index) => ethereumPrices[index] / bitcoinPrice
//   );
//   return ratios;
// };

// export const calculateBitcoinRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const dailyRatios = calculateBitcoinDailyRatios(bitcoinData, ethereumData);
//   const weeklyRatios = calculateBitcoinWeeklyRatios(bitcoinData, ethereumData);
//   const monthlyRatios = calculateBitcoinMonthlyRatios(
//     bitcoinData,
//     ethereumData
//   );
//   const ninetyDayRatios = calculateBitcoinNinetyDayRatios(
//     bitcoinData,
//     ethereumData
//   );
//   const fourteenDayRatios = calculateBitcoinFourteenDayRatios(
//     bitcoinData,
//     ethereumData
//   );

//   const yearlyRatios = calculateBitcoinYearlyRatios(bitcoinData, ethereumData);

//   const ratios = {
//     dailyRatios,
//     weeklyRatios,
//     fourteenDayRatios,
//     monthlyRatios,
//     ninetyDayRatios,
//     yearlyRatios,
//   };

//   return ratios;
// };

// const calculateBitcoinDailyRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { dailyPrices: bitcoinPrices } = bitcoinData;
//   const { dailyPrices: ethereumPrices } = ethereumData;
//   const ratios = ethereumPrices.map(
//     (ethereumPrice, index) => bitcoinPrices[index] / ethereumPrice
//   );

//   return ratios;
// };

// const calculateBitcoinWeeklyRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { weeklyPrices: bitcoinPrices } = bitcoinData;
//   const { weeklyPrices: ethereumPrices } = ethereumData;
//   const ratios = ethereumPrices.map(
//     (ethereumPrice, index) => bitcoinPrices[index] / ethereumPrice
//   );
//   return ratios;
// };

// const calculateBitcoinFourteenDayRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { fourteenDayPrices: bitcoinPrices } = bitcoinData;
//   const { fourteenDayPrices: ethereumPrices } = ethereumData;
//   const ratios = ethereumPrices.map(
//     (ethereumPrice, index) => bitcoinPrices[index] / ethereumPrice
//   );
//   return ratios;
// };

// const calculateBitcoinMonthlyRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { monthlyPrices: bitcoinPrices } = bitcoinData;
//   const { monthlyPrices: ethereumPrices } = ethereumData;
//   const ratios = ethereumPrices.map(
//     (ethereumPrice, index) => bitcoinPrices[index] / ethereumPrice
//   );
//   return ratios;
// };

// const calculateBitcoinNinetyDayRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { ninetyDayPrices: bitcoinPrices } = bitcoinData;
//   const { ninetyDayPrices: ethereumPrices } = ethereumData;
//   const ratios = ethereumPrices.map(
//     (ethereumPrice, index) => bitcoinPrices[index] / ethereumPrice
//   );
//   return ratios;
// };

// const calculateBitcoinYearlyRatios = (
//   bitcoinData: Prices,
//   ethereumData: Prices
// ) => {
//   const { yearlyPrices: bitcoinPrices } = bitcoinData;
//   const { yearlyPrices: ethereumPrices } = ethereumData;
//   const ratios = ethereumPrices.map(
//     (ethereumPrice, index) => bitcoinPrices[index] / ethereumPrice
//   );
//   return ratios;
// };

// export const computeRatioValue = (selectedUnit: string, array: number[]) => {
//   let initialValue, sum: number;
//   let numericArray;
//   switch (selectedUnit) {
//     case "1D":
//       initialValue = 0;

//       numericArray = array.filter(
//         (value) => typeof value === "number" && !isNaN(value)
//       );

//       sum = numericArray.reduce((accumulator: number, currentValue: number) => {
//         return accumulator + currentValue;
//       }, initialValue);

//       return sum / array.length;
//     case "7D":
//       initialValue = 0;

//       numericArray = array.filter(
//         (value) => typeof value === "number" && !isNaN(value)
//       );

//       sum = numericArray.reduce((accumulator: number, currentValue: number) => {
//         return accumulator + currentValue;
//       }, initialValue);

//       return sum / array.length;

//     case "14D":
//       initialValue = 0;

//       numericArray = array.filter(
//         (value) => typeof value === "number" && !isNaN(value)
//       );

//       sum = numericArray.reduce((accumulator: number, currentValue: number) => {
//         return accumulator + currentValue;
//       }, initialValue);

//       return sum / array.length;

//     case "1M":
//       initialValue = 0;

//       numericArray = array.filter(
//         (value) => typeof value === "number" && !isNaN(value)
//       );

//       sum = numericArray.reduce((accumulator: number, currentValue: number) => {
//         return accumulator + currentValue;
//       }, initialValue);

//       return sum / array.length;
//     case "3M":
//       initialValue = 0;

//       numericArray = array.filter(
//         (value) => typeof value === "number" && !isNaN(value)
//       );

//       sum = numericArray.reduce((accumulator: number, currentValue: number) => {
//         return accumulator + currentValue;
//       }, initialValue);

//       return sum / array.length;

//     case "1Y":
//       initialValue = 0;

//       numericArray = array.filter(
//         (value) => typeof value === "number" && !isNaN(value)
//       );

//       sum = numericArray.reduce((accumulator: number, currentValue: number) => {
//         return accumulator + currentValue;
//       }, initialValue);

//       return sum / array.length;
//   }
// };
