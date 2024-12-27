interface Prices {
  dailyData: {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
  };
  ninetyDayData: {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
  };
  yearlyData: {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
  };
}

export const calculateEthereumRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const dailyRatios = calculateEthereumDailyRatios(bitcoinData, ethereumData);
  const weeklyRatios = calculateEthereumWeeklyRatios(bitcoinData, ethereumData);
  const fourteenDayRatios = calculateEthereumFourteenDayRatios(
    bitcoinData,
    ethereumData
  );
  const ninetyDayRatios = calculateEthereumNinetyDayRatios(
    bitcoinData,
    ethereumData
  );
  const yearlyRatios = calculateEthereumYearlyRatios(bitcoinData, ethereumData);

  const ratios = {
    dailyRatios,
    weeklyRatios,
    fourteenDayRatios,
    ninetyDayRatios,
    yearlyRatios,
  };

  return ratios;
};

const calculateEthereumDailyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { dailyData: bitcoinDailyData } = bitcoinData;
  const { dailyData: ethereumDailyData } = ethereumData;
  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;

  console.log("bitcoin prices", bitcoinPrices);

  const ratios = bitcoinPrices.map((bitcoinEntry: any, index: number) => {
    const [, bitcoinPrice] = bitcoinEntry;
    const [, ethereumPrice] = ethereumPrices[index];
    return ethereumPrice / bitcoinPrice;
  });

  return ratios;
};

const calculateEthereumWeeklyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: bitcoinDailyData } = bitcoinData;
  const { ninetyDayData: ethereumDailyData } = ethereumData;

  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;

  const bitcoinSlicedArray = bitcoinPrices.slice(0, 100);

  const ratios = bitcoinSlicedArray.map((bitcoinEntry, index) => {
    const [, bitcoinPrice] = bitcoinEntry;
    const [, ethereumPrice] = ethereumPrices[index];
    return ethereumPrice / bitcoinPrice;
  });

  return ratios;
};

const calculateEthereumFourteenDayRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: bitcoinDailyData } = bitcoinData;
  const { ninetyDayData: ethereumDailyData } = ethereumData;

  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;

  const bitcoinSlicedArray = bitcoinPrices.slice(0, 200);

  const ratios = bitcoinSlicedArray.map((bitcoinEntry: any, index: number) => {
    const [, bitcoinPrice] = bitcoinEntry;
    const [, ethereumPrice] = ethereumPrices[index];
    return ethereumPrice / bitcoinPrice;
  });

  return ratios;
};

const calculateEthereumMonthyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: bitcoinDailyData } = bitcoinData;
  const { ninetyDayData: ethereumDailyData } = ethereumData;

  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;

  const bitcoinSlicedArray = bitcoinPrices.slice(0, 250);

  const ratios = bitcoinSlicedArray.map((bitcoinEntry: any, index: number) => {
    const [, bitcoinPrice] = bitcoinEntry;
    const [, ethereumPrice] = ethereumPrices[index];
    return ethereumPrice / bitcoinPrice;
  });

  return ratios;
};

const calculateEthereumNinetyDayRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: bitcoinDailyData } = bitcoinData;
  const { ninetyDayData: ethereumDailyData } = ethereumData;

  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;

  const ratios = bitcoinPrices.map((bitcoinEntry: any, index: number) => {
    const [, bitcoinPrice] = bitcoinEntry;
    const [, ethereumPrice] = ethereumPrices[index];
    return ethereumPrice / bitcoinPrice;
  });

  return ratios;
};

const calculateEthereumYearlyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { yearlyData: bitcoinDailyData } = bitcoinData;
  const { yearlyData: ethereumDailyData } = ethereumData;

  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;

  const ratios = bitcoinPrices.map((bitcoinEntry: any, index: number) => {
    const [, bitcoinPrice] = bitcoinEntry;
    const [, ethereumPrice] = ethereumPrices[index];
    return ethereumPrice / bitcoinPrice;
  });

  return ratios;
};

export const calculateBitcoinRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  console.log("bitcoin datttttta", bitcoinData);

  const dailyRatios = calculateBitcoinDailyRatios(bitcoinData, ethereumData);
  const weeklyRatios = calculateBitcoinWeeklyRatios(bitcoinData, ethereumData);
  const fourteenDayRatios = calculateBitcoinFourteenDayRatios(
    bitcoinData,
    ethereumData
  );
  const monthlyRatios = calculateBitcoinMonthyRatios(bitcoinData, ethereumData);
  const ninetyDayRatios = calculateBitcoinNinetyDayRatios(
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
  const { dailyData: bitcoinDailyData } = bitcoinData;
  const { dailyData: ethereumDailyData } = ethereumData;
  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;

  const ratios = ethereumPrices.map((ethEntry: any, index: number) => {
    const [, ethereumPrice] = ethEntry;
    const [, bitcoinPrice] = bitcoinPrices[index];
    return bitcoinPrice / ethereumPrice;
  });

  return ratios;
};

const calculateBitcoinWeeklyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: bitcoinDailyData } = bitcoinData;
  const { ninetyDayData: ethereumDailyData } = ethereumData;

  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;

  const ethereumSlicedArray = ethereumPrices.slice(0, 300);

  const ratios = ethereumSlicedArray.map((ethEntry: any, index: number) => {
    const [, ethereumPrice] = ethEntry;
    const [, bitcoinPrice] = bitcoinPrices[index];
    return bitcoinPrice / ethereumPrice;
  });

  return ratios;
};

const calculateBitcoinFourteenDayRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: bitcoinDailyData } = bitcoinData;
  const { ninetyDayData: ethereumDailyData } = ethereumData;

  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;
  const minLength = Math.min(bitcoinPrices.length, ethereumPrices.length);

  const truncatedBitcoinPrices = bitcoinPrices.slice(0, 600);
  const truncatedEthereumPrices = ethereumPrices.slice(0, 600);

  const ratios = truncatedEthereumPrices.map((ethEntry: any, index: number) => {
    const [, ethereumPrice] = ethEntry;
    const [, bitcoinPrice] = bitcoinPrices[index];
    return bitcoinPrice / ethereumPrice;
  });

  return ratios;
};

const calculateBitcoinMonthyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: bitcoinDailyData } = bitcoinData;
  const { ninetyDayData: ethereumDailyData } = ethereumData;

  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;

  const minLength = Math.min(bitcoinPrices.length, ethereumPrices.length);
  const truncatedBitcoinPrices = bitcoinPrices.slice(0, minLength);
  const truncatedEthereumPrices = ethereumPrices.slice(0, minLength);

  const ratios = truncatedEthereumPrices.map((ethEntry: any, index: number) => {
    const [, ethereumPrice] = ethEntry;
    const [, bitcoinPrice] = truncatedBitcoinPrices[index];
    return bitcoinPrice / ethereumPrice;
  });
  return ratios;
};

const calculateBitcoinNinetyDayRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { ninetyDayData: bitcoinDailyData } = bitcoinData;
  const { ninetyDayData: ethereumDailyData } = ethereumData;

  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;

  const minLength = Math.min(bitcoinPrices.length, ethereumPrices.length);

  const truncatedBitcoinPrices = bitcoinPrices.slice(0, minLength);
  const truncatedEthereumPrices = ethereumPrices.slice(0, minLength);

  const ratios = truncatedEthereumPrices.map((ethEntry: any, index: number) => {
    const [, ethereumPrice] = ethEntry;
    const [, bitcoinPrice] = bitcoinPrices[index];
    return bitcoinPrice / ethereumPrice;
  });

  return ratios;
};

const calculateBitcoinYearlyRatios = (
  bitcoinData: Prices,
  ethereumData: Prices
) => {
  const { yearlyData: bitcoinDailyData } = bitcoinData;
  const { yearlyData: ethereumDailyData } = ethereumData;

  const bitcoinPrices = bitcoinDailyData.prices;
  const ethereumPrices = ethereumDailyData.prices;

  const ratios = ethereumPrices.map((ethEntry: any, index: number) => {
    const [, ethereumPrice] = ethEntry;
    const [, bitcoinPrice] = bitcoinPrices[index];
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
