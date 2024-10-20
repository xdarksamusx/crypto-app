"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { createVolumeChart } from "@utils/selectedChartPeriod";
import { selectCoin, selectUnit } from "../redux/features/coinSelectionSlice";
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

import { createLabels } from "@utils/selectedChartPeriod";
import { convertCurrencyArray } from "@utils/CurrencyConversions";

const VolumeChart: React.FC = () => {
  const coins = useAppSelector((state) => state.selectedCoin.coins);
  const selectedUnit = useAppSelector(
    (state) => state.selectedCoin.selectedUnit
  );

  const selectedCoin = useAppSelector(
    (state) => state.selectedCoin.selectedCoin
  );

  const currency = useAppSelector((state) => state.currency.currency);
  const previousCurrency = useAppSelector(
    (state) => state.currency.previousCurrency
  );

  const unit = selectedUnit;
  const coin = selectedCoin;
  const volumeData: [] = createVolumeChart(coin, unit);
  const currencyArray: number[] = convertCurrencyArray(
    currency,
    previousCurrency,
    volumeData
  );

  const dataLabels = createLabels(unit);

  const extendedLabels = Array(volumeData.length).fill("");

  const interval = Math.ceil(volumeData.length / dataLabels.length);
  for (let i = 0; i < dataLabels.length; i++) {
    extendedLabels[i * interval] = dataLabels[i];
  }

  const dispatch = useAppDispatch();

  const data = {
    labels: extendedLabels,
    datasets: [
      {
        data: currencyArray,
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

  useEffect(() => {
    if (!coin) return;
  }, [selectedUnit, selectedCoin, currency]);

  return (
    <>
      <div className="w-9/12 h-full relative mr-4  py-8 border-2   px-16 ">
        Volume
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default VolumeChart;
