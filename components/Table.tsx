"use client";

import React, { useEffect, useState } from "react";
import Star from "../icons/Star";
import LineChart from "./7DayChart";
import { CoinData } from "../utils/interfaces";
import { initialState } from "../redux/features/marketSlice";
import {
  calculateWeeklyPriceChange,
  calculateHourlyPriceChange,
  capitalizeFirstLetter,
} from "../utils/apiData";

import SortDownArrow from "../icons/SortDownArrow";
import SortUpArrow from "../icons/SortUpArrow";

function Table() {
  const { coins: coinData } = initialState;
  console.log(coinData);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 ">
      <table className="min-w-full bg-white border border-gray-200 border-collapse ">
        <thead>
          <tr className="bg-gray-100 ">
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              <div className="flex items-center justify-end">
                <span className="flex items-end ">
                  {" "}
                  <SortUpArrow />
                  <span className="text-right px-4 "> #</span>
                </span>
              </div>
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              Coin
            </th>

            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              Price
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              1HR
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              24h
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              7D
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              24H Volume
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              MarketCap
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              Chart
            </th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((coin, index) => {
            const coinName = capitalizeFirstLetter(coin.id);

            return (
              <tr key={coin.id} className="">
                <td className="px-6   border-b border-gray-200 text-sm">
                  <div className="  flex items-center justify-center  h-30 w-30">
                    <Star />
                    <span className="mx-2"> {index + 1}</span>
                  </div>
                </td>
                <td className="px-0   border-b border-gray-200 text-sm">
                  <div className="flex items-center ">
                    <img className="w-6 h-6" src={`${coin.image}`} />{" "}
                    <span className="px-2">{coinName}</span>
                  </div>
                </td>
                <td className="px-0    border-b border-gray-200 text-sm">
                  <span>(d){coin.current_price.toLocaleString()}</span>
                </td>
                <td className="px-0  border-b border-gray-200 text-sm">
                  {coin.hourly_price_change}%
                </td>
                <td className="px-0    border-b border-gray-200 text-sm ">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="px-0  border-b border-gray-200 text-sm ">
                  <span className="text-left ">{coin.weeklyPriceChange}%</span>
                </td>
                <td className="px-0 border-b border-gray-200 text-sm">
                  (d){coin.total_volume.toLocaleString()}
                </td>
                <td className="px-0   border-b border-gray-200 text-sm">
                  (d){coin.market_cap.toLocaleString()}
                </td>
                <td className="px-0   border-b border-gray-200 text-sm">
                  <LineChart coin={coin} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
