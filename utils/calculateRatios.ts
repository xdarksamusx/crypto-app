import { CoinData } from "./interfaces";

interface Prices {
  dailyPrices: number[];
  weeklyPrices: number[];
  fourteenDayPrices: number[];
  monthlyPrices: number[];
  ninetyDayPrices: number[];
  yearlyPrices: number[];
}

export const calculateEthereumRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const dailyRatios = calculateEthereumDailyRatios(bitcoinData, ethereumData);
  const weeklyRatios = calculateEthereumWeeklyRatios(bitcoinData, ethereumData);
  const monthlyRatios = calculateEthereumMonthlyRatios(
    bitcoinData,
    ethereumData
  );
  const ninetyDayRatios = calculateEthereumNinetyDayRatios(
    bitcoinData,
    ethereumData
  );
  const fourteenDayRatios = calculateEthereumFourteenDayRatios(
    bitcoinData,
    ethereumData
  );

  const yearlyRatios = calculateEthereumYearlyRatios(bitcoinData, ethereumData);

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

const calculateEthereumDailyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { dailyData: bitcoinPrices } = bitcoinData;

  const { dailyData: ethereumPrices } = ethereumData;

  const { prices: bitcoinPriceArray } = bitcoinPrices;

  const { prices: ethereumPriceArray } = ethereumPrices;

  console.log("cjecking bitcoin array", bitcoinPriceArray);
  console.log("cjecking ethereum array", ethereumPriceArray);

  const ratios = bitcoinPriceArray.map((bitcoinPriceData, index) => {
    const bitcoinPrice = bitcoinPriceData[1];
    const ethereumPrice = ethereumPriceArray[index][1];
    return ethereumPrice / bitcoinPrice;
  });

  console.log("checking for NAN", ratios);

  return ratios;
};

const calculateEthereumWeeklyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: { prices: bitcoinPriceArray } = {} } =
    bitcoinData || {};
  const { ninetyDayData: { prices: ethereumPriceArray } = {} } =
    ethereumData || {};

  const slicedBitcoinArray = bitcoinPriceArray.slice(0, 200);
  const slicedEthereumArray = ethereumPriceArray.slice(0, 200);
  const ratios = slicedBitcoinArray.map((bitcoinPriceData, index) => {
    const bitcoinPrice = bitcoinPriceData[1];
    const ethereumPrice = slicedEthereumArray[index][1];
    return ethereumPrice / bitcoinPrice;
  });
  return ratios;
};

const calculateEthereumFourteenDayRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: { prices: bitcoinPriceArray } = {} } =
    bitcoinData || {};
  const { ninetyDayData: { prices: ethereumPriceArray } = {} } =
    ethereumData || {};

  const slicedBitcoinArray = bitcoinPriceArray.slice(0, 400);
  const slicedEthereumArray = ethereumPriceArray.slice(0, 400);
  const ratios = slicedBitcoinArray.map((bitcoinPriceData, index) => {
    const bitcoinPrice = bitcoinPriceData[1];
    const ethereumPrice = slicedEthereumArray[index][1];
    return ethereumPrice / bitcoinPrice;
  });
  return ratios;
};

const calculateEthereumMonthlyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: { prices: bitcoinPriceArray } = {} } =
    bitcoinData || {};
  const { ninetyDayData: { prices: ethereumPriceArray } = {} } =
    ethereumData || {};

  const slicedBitcoinArray = bitcoinPriceArray.slice(0, 800);
  const slicedEthereumArray = ethereumPriceArray.slice(0, 800);
  const ratios = slicedBitcoinArray.map((bitcoinPriceData, index) => {
    const bitcoinPrice = bitcoinPriceData[1];
    const ethereumPrice = slicedEthereumArray[index][1];
    return ethereumPrice / bitcoinPrice;
  });
  return ratios;
};

const calculateEthereumNinetyDayRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: bitcoinPrices } = bitcoinData;
  const { ninetyDayData: ethereumPrices } = ethereumData;

  const { prices: bitcoinPriceArray } = bitcoinPrices;
  const { prices: ethereumPriceArray } = ethereumPrices;

  const ratios = bitcoinPriceArray.map((bitcoinPriceData, index) => {
    const bitcoinPrice = bitcoinPriceData[1];
    const ethereumPrice = ethereumPriceArray[index][1];
    return ethereumPrice / bitcoinPrice;
  });

  return ratios;
};

const calculateEthereumYearlyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { yearlyData: bitcoinPrices } = bitcoinData;
  const { yearlyData: ethereumPrices } = ethereumData;

  const { prices: bitcoinPriceArray } = bitcoinPrices;
  const { prices: ethereumPriceArray } = ethereumPrices;

  console.log("bitcoin yearly data", bitcoinData);
  console.log("bitcoin  yearly prices", bitcoinPrices);

  const ratios = bitcoinPriceArray.map((bitcoinPriceData, index) => {
    const bitcoinPrice = bitcoinPriceData[1];
    const ethereumPrice = ethereumPriceArray[index][1];
    return ethereumPrice / bitcoinPrice;
  });
  return ratios;
};

export const calculateBitcoinRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const dailyRatios = calculateBitcoinDailyRatios(bitcoinData, ethereumData);
  const weeklyRatios = calculateBitcoinWeeklyRatios(bitcoinData, ethereumData);
  const monthlyRatios = calculateBitcoinMonthlyRatios(
    bitcoinData,
    ethereumData
  );
  const ninetyDayRatios = calculateBitcoinNinetyDayRatios(
    bitcoinData,
    ethereumData
  );
  const fourteenDayRatios = calculateBitcoinFourteenDayRatios(
    bitcoinData,
    ethereumData
  );

  const yearlyRatios = calculateBitcoinYearlyRatios(bitcoinData, ethereumData);

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

const calculateBitcoinDailyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { dailyData: bitcoinPrices } = bitcoinData;
  const { dailyData: ethereumPrices } = ethereumData;

  const { prices: bitcoinPriceArray } = bitcoinPrices;
  const { prices: ethereumPriceArray } = ethereumPrices;

  const ratios = ethereumPriceArray.map((ethereumPriceData, index) => {
    const ethereumPrice = ethereumPriceData[1];
    const bitcoinPrice = bitcoinPriceArray[index][1];
    return bitcoinPrice / ethereumPrice;
  });

  return ratios;
};

const calculateBitcoinWeeklyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: { prices: bitcoinPriceArray } = {} } =
    bitcoinData || {};
  const { ninetyDayData: { prices: ethereumPriceArray } = {} } =
    ethereumData || {};

  const slicedBitcoinArray = bitcoinPriceArray.slice(0, 200);
  const slicedEthereumArray = ethereumPriceArray.slice(0, 200);
  const ratios = slicedEthereumArray.map((ethereumPriceData, index) => {
    const ethereumPrice = ethereumPriceData[1];
    const bitcoinPrice = slicedBitcoinArray[index][1];
    return bitcoinPrice / ethereumPrice;
  });
  return ratios;
};

const calculateBitcoinFourteenDayRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: { prices: bitcoinPriceArray } = {} } =
    bitcoinData || {};
  const { ninetyDayData: { prices: ethereumPriceArray } = {} } =
    ethereumData || {};

  const slicedBitcoinArray = bitcoinPriceArray.slice(0, 400);
  const slicedEthereumArray = ethereumPriceArray.slice(0, 400);
  const ratios = slicedEthereumArray.map((ethereumPriceData, index) => {
    const ethereumPrice = ethereumPriceData[1];
    const bitcoinPrice = slicedBitcoinArray[index][1];
    return bitcoinPrice / ethereumPrice;
  });
  return ratios;
};

const calculateBitcoinMonthlyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: { prices: bitcoinPriceArray } = {} } =
    bitcoinData || {};
  const { ninetyDayData: { prices: ethereumPriceArray } = {} } =
    ethereumData || {};

  const slicedBitcoinArray = bitcoinPriceArray.slice(0, 700);
  const slicedEthereumArray = ethereumPriceArray.slice(0, 700);
  const ratios = slicedEthereumArray.map((ethereumPriceData, index) => {
    const ethereumPrice = ethereumPriceData[1];
    const bitcoinPrice = slicedBitcoinArray[index][1];
    return bitcoinPrice / ethereumPrice;
  });
  return ratios;
};

const calculateBitcoinNinetyDayRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: bitcoinPrices } = bitcoinData;
  const { ninetyDayData: ethereumPrices } = ethereumData;

  const { prices: bitcoinPriceArray } = bitcoinPrices;
  const { prices: ethereumPriceArray } = ethereumPrices;
  const minLength = Math.min(
    bitcoinPriceArray.length,
    ethereumPriceArray.length
  );

  const slicedBitcoinArray = bitcoinPriceArray.slice(0, minLength);
  const slicedEthereumArray = ethereumPriceArray.slice(0, minLength);

  const ratios = slicedEthereumArray.map((ethereumPriceData, index) => {
    const ethereumPrice = ethereumPriceData[1];
    const bitcoinPrice = slicedBitcoinArray[index][1];
    return bitcoinPrice / ethereumPrice;
  });

  return ratios;
};

const calculateBitcoinYearlyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { yearlyData: bitcoinPrices } = bitcoinData;
  const { yearlyData: ethereumPrices } = ethereumData;

  const { prices: bitcoinPriceArray } = bitcoinPrices;
  const { prices: ethereumPriceArray } = ethereumPrices;

  const ratios = ethereumPriceArray.map((ethereumPriceData, index) => {
    const ethereumPrice = ethereumPriceData[1];
    const bitcoinPrice = bitcoinPriceArray[index][1];
    return bitcoinPrice / ethereumPrice;
  });

  return ratios;
};

export const computeRatioValue = (selectedUnit: string, array: number[]) => {
  let initialValue, sum: number;
  let numericArray;
  switch (selectedUnit) {
    case "1D":
      initialValue = 0;

      numericArray = array.filter(
        (value) => typeof value === "number" && !isNaN(value)
      );

      sum = numericArray.reduce((accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      }, initialValue);

      return sum / array.length;
    case "7D":
      initialValue = 0;

      numericArray = array.filter(
        (value) => typeof value === "number" && !isNaN(value)
      );

      sum = numericArray.reduce((accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      }, initialValue);

      return sum / array.length;

    case "14D":
      initialValue = 0;

      numericArray = array.filter(
        (value) => typeof value === "number" && !isNaN(value)
      );

      sum = numericArray.reduce((accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      }, initialValue);

      return sum / array.length;

    case "1M":
      initialValue = 0;

      numericArray = array.filter(
        (value) => typeof value === "number" && !isNaN(value)
      );

      sum = numericArray.reduce((accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      }, initialValue);

      return sum / array.length;
    case "3M":
      initialValue = 0;

      numericArray = array.filter(
        (value) => typeof value === "number" && !isNaN(value)
      );

      sum = numericArray.reduce((accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      }, initialValue);

      return sum / array.length;

    case "1Y":
      initialValue = 0;

      numericArray = array.filter(
        (value) => typeof value === "number" && !isNaN(value)
      );

      sum = numericArray.reduce((accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      }, initialValue);

      return sum / array.length;
  }
};
