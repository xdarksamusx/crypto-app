"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { CoinData } from "../utils/interfaces";
import { initialState } from "../redux/features/marketSlice";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const monthsArray: string[] = [
  "July-2023",
  "August-2023",
  "September-2023",
  "October-2023",
  "November-2023",
  "December-2023",
  "January-2024",
  "February-2024",
  "March-2024, April-2024, May-2024, June-2024, July-2024",
];
// const isServer = typeof window === "undefined";

const labels = monthsArray;

function LineChart(chart: any) {
  const { coin } = chart;

  const { ninetyDayPrices } = coin;

  const weeklyPriceArray = ninetyDayPrices.slice(
    ninetyDayPrices.length - 7,
    ninetyDayPrices.length
  );

  const data = {
    labels: labels,

    datasets: [
      {
        label: "data",
        backgroundColor: `${coin.weeklyColor}`,
        borderColor: `${coin.weeklyColor}`,
        data: weeklyPriceArray,
      },
    ],
  };

  return (
    <div className="flex  items-center  w-36  h-20">
      <Line
        data={data}
        options={{
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;

// 287 , 7, 14, 30 , 90, 3
