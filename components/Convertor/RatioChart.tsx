"use client";

import React, { useEffect, useState } from "react";
import { createVolumeChart } from "@utils/selectedChartPeriod";
// import { selectCoin, selectUnit } from "../redux/features/coinSelectionSlice";

import { useMemo } from "react";
import { calculateRatios } from "@utils/calculateRatios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

import { createLabels } from "@utils/selectedChartPeriod";
import { selectRatio } from "@utils/selectedChartPeriod";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface SelectedUnit {
  selectedUnit: string;
}

const RatioChart: React.FC<SelectedUnit> = ({ selectedUnit }) => {
  const coins = useAppSelector((state) => state.coins.coins);

  const bitcoinData = coins[0];
  const ethereumData = coins[1];
  const ratios = useMemo(
    () => calculateRatios(bitcoinData, ethereumData),
    [bitcoinData, ethereumData]
  );

  const selectedRatioData = selectRatio(selectedUnit, ratios);

  const dataLabels = createLabels(selectedUnit);

  const extendedLabels = Array(selectedRatioData.length).fill("");

  const interval = Math.ceil(selectedRatioData.length / dataLabels.length);
  for (let i = 0; i < dataLabels.length; i++) {
    extendedLabels[i * interval] = dataLabels[i];
  }

  // const dispatch = useAppDispatch();

  const data = {
    labels: extendedLabels,
    datasets: [
      {
        data: selectedRatioData,
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

  //   useEffect(() => {
  //     if (!coin) return;
  //   }, [selectedUnit, selectedCoin]);

  return (
    <>
      <div className="w-9/12 h-full relative mr-4  py-8 border-2   px-16 bg-slate-300 my-8 ">
        Eth-BTC Ratio
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default RatioChart;
