"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

interface LineChartProps {
  chart: { price: number[] };
  coin: { price_change_percentage_7d_in_currency: number };
}

const monthsArray: string[] = [
  "July-2023",
  "August-2023",
  "September-2023",
  "October-2023",
  "November-2023",
  "December-2023",
  "January-2024",
  "February-2024",
  "March-2024",
  "April-2024",
  "May-2024",
  "June-2024",
  "July-2024",
];

const labels = monthsArray;

const LineChart: React.FC<LineChartProps> = ({ chart, coin }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "data",
        backgroundColor:
          coin.price_change_percentage_7d_in_currency > 0 ? "green" : "red",
        borderColor:
          coin.price_change_percentage_7d_in_currency > 0 ? "green" : "red",
        data: chart.price,
      },
    ],
  };

  return (
    <div className="flex items-center w-36 h-20">
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
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default LineChart;
