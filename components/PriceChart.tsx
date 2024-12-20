"use client";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { computePriceCharts } from "../utils/selectedChartPeriod";
import { selectCoin, selectUnit } from "../redux/features/coinSelectionSlice";
import { Line } from "react-chartjs-2";
import {
  Chart,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { ChartOptions, ChartData } from "chart.js";
import { setCurrencyData } from "../redux/features/currencySelection";
import { createLabels } from "../utils/selectedChartPeriod";

interface Error {
  message: string;
  stack: string;
  coin: string;
  currency: string;
}

const PriceChart: React.FC = () => {
  const [priceChart, setPriceChart] = useState([]);
  const [chart, setChart] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const coinData = useAppSelector((state) => state.currency.data);

  const top20coins = coinData.slice(0, 20);

  const coins = useAppSelector((state) => state.selectedCoin.coins);
  const selectedUnit = useAppSelector(
    (state) => state.selectedCoin.selectedUnit
  );

  const selectedCoin = useAppSelector(
    (state) => state.selectedCoin.selectedCoin
  );

  const currency = useAppSelector((state) => state.currency.currency);

  const unit = selectedUnit;
  const coin = selectedCoin;

  useEffect(() => {
    if (!coin || !currency) return;

    const fetchData = async () => {
      if (!coin || !currency) {
        console.error("Coin or currency is missing");
        return;
      }

      try {
        const response = await fetch(
          `https://xdarksamusx.github.io/chart-files/charts/${currency.toLowerCase()}-charts/${coin.toLowerCase()}.json`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const newPriceData = computePriceCharts(data, unit);

        setChart(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching data:", {
            message: error.message,
            stack: error.stack,
            coin,
            currency,
          });
          setError(error.message);
        } else {
          console.error("Unknown error occurred:", error);
          setError("An unknown error occurred");
        }
      }
    };

    fetchData();
  }, [coin, currency, unit, coinData]);

  useEffect(() => {
    if (chart) {
      try {
        const computedData = computePriceCharts(chart, selectedUnit);
        setPriceChart(computedData);
      } catch (error) {
        console.error("Error computing chart data:", error);
      }
    }
  }, [chart, selectedUnit]);

  const dataLabels = createLabels(unit);

  const extendedLabels = Array(priceChart.length).fill("");

  const interval = Math.ceil(priceChart.length / dataLabels.length);
  for (let i = 0; i < dataLabels.length; i++) {
    extendedLabels[i * interval] = dataLabels[i];
  }

  const data = {
    labels: extendedLabels,
    datasets: [
      {
        data: priceChart,
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        backgroundColor: ["rgba(255, 99, 132)"],
        borderColor: ["rgb(54, 162, 235)"],
        borderWidth: 1,
      },
    ],
  };
  const options: any = {
    type: "bar",
    data,
    options: {
      indexAxis: "y",
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxTicksLimit: 7,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="w-9/12 h-full relative mr-4  py-8 border-2   px-16 ">
        Price``
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default PriceChart;
