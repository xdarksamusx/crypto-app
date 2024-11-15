"use client";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { createVolumeChart } from "@app/utils/selectedChartPeriod";
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

import { createLabels } from "@app/utils/selectedChartPeriod";

const VolumeChart: React.FC = ({ coindata }) => {
  // console.log("volume chart", coindata);

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
  const volumeData: [] = createVolumeChart(coin, unit);

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
        data: volumeData,
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

  console.log("curerency", currency);

  useEffect(() => {
    if (!coin) return;
  }, [selectedUnit, selectedCoin, currency]);

  useEffect(() => {
    if (!coin || !currency) return; // Ensures data is only fetched if both are defined

    const fetchData = async () => {
      try {
        console.log(
          "url",
          `https://xdarksamusx.github.io/chart-files/charts/${currency}-charts/${coin.name.toLowerCase()}.json`
        );
        const response = await fetch(
          `https://xdarksamusx.github.io/chart-files/charts/${currency}-charts/${coin.name.toLowerCase()}.json`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
      } catch (error) {
        console.error("Error fetching data:", {
          message: error.message,
          stack: error.stack,
          coin,
          currency,
        });
      }
    };

    fetchData();
  }, [coin, currency]);

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
