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
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  sortByIncreasing,
  sortByDecreasing,
  setSortKey,
  updateColors,
} from "../redux/features/sortSlice";
import SortDownArrow from "../icons/SortDownArrow";
import SortUpArrow from "../icons/SortUpArrow";
import SortButton from "./SortButton";

function Table() {
  const dispatch = useAppDispatch();
  const coinData = useAppSelector((state) => state.sort.coins);

  // };

  return (
    <div className="  max-w-7xl mx-auto  mt-12   ">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full  border-gray-200 border-collapse  ">
          <thead className=" border-t-2 border-b-2  text-xs">
            <tr className=" ">
              <th className="px-6 py-1 border-b border-gray-200  text-left text-sm uppercase font-medium">
                <div className=" flex items-end justify-start">
                  <span className="flex items-end  ">
                    {" "}
                    <SortButton IconComponent={SortUpArrow} sortKey="rank" />
                    <span className="mx-1">#</span>
                  </span>
                </div>{" "}
              </th>

              <th className="px-6 py-1 border-b border-gray-200  text-left text-sm uppercase font-medium">
                <div className=" flex items-end justify-start">
                  <span className="flex items-center">
                    <SortButton IconComponent={SortDownArrow} sortKey="name" />
                    <span className="mx-1">Coin</span>
                  </span>
                </div>{" "}
              </th>

              <th className="px-6 py-1 border-b border-gray-200 t text-left text-sm uppercase font-medium">
                <div className=" flex items-center justify-start">
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortKey="current_price"
                  />

                  <span className="mx-1">Price </span>
                </div>
              </th>
              <th className="px-0 py-1 border-b border-gray-200  text-left text-sm uppercase font-medium">
                <div className=" flex items-end justify-start">
                  <span className="flex items-center">
                    <SortButton
                      IconComponent={SortDownArrow}
                      sortKey="hourly_price_change"
                    />

                    <span className="mx-1"> 1 hr</span>
                  </span>
                </div>{" "}
              </th>
              <th className="px-0 py-1 border-b border-gray-200  text-left text-sm uppercase font-medium">
                <div className=" flex items-end justify-start">
                  <span className="flex items-center">
                    {" "}
                    <SortButton
                      IconComponent={SortDownArrow}
                      sortKey="price_change_percentage_24h"
                    />
                    <span className="mx-1"> 24 hr</span>
                  </span>
                </div>{" "}
              </th>
              <th className="px-6 py-1 border-b border-gray-200  text-left text-sm uppercase font-medium">
                <div className=" flex items-end justify-start">
                  <span className="flex items-center">
                    {" "}
                    <SortButton
                      IconComponent={SortDownArrow}
                      sortKey="price_change_7d"
                    />
                    <span className="mx-1"> 7d </span>
                  </span>
                </div>{" "}
              </th>
              <th className="px-6 py-1 border-b border-gray-200 text-left text-sm uppercase font-medium">
                <div className=" flex items-end justify-start">
                  <span className="flex items-center">
                    {" "}
                    <SortButton
                      IconComponent={SortDownArrow}
                      sortKey="market_cap"
                    />
                    <span className="mx-1"> MarketCap </span>
                  </span>
                </div>{" "}
              </th>
              <th className="px-6 py-1 border-b border-gray-200text-left text-sm uppercase font-medium">
                <div className=" flex items-end justify-start">
                  <span className="flex items-center">
                    {" "}
                    <SortButton
                      IconComponent={SortDownArrow}
                      sortKey="total_volume"
                    />
                    <span className="mx-1"> Total Volume </span>
                  </span>
                </div>{" "}
              </th>
              <th className="px-6 py-1 border-b border-gray-200 text-left text-sm uppercase font-medium">
                <div className=" flex items-end justify-start">
                  <span className="flex items-end"> Chart</span>
                </div>{" "}
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
                      <span className="mx-2"> {coin.rank}</span>
                    </div>
                  </td>
                  <td className="px-0   border-b border-gray-200 text-sm">
                    <div className="flex items-center ">
                      <img className="w-6 h-6" src={`${coin.image}`} />{" "}
                      <span className="px-2">{coinName}</span>
                    </div>
                  </td>
                  <td className="px-0    border-b border-gray-200 text-sm">
                    <span className="px-3">
                      (d){coin.current_price.toLocaleString()}
                    </span>
                  </td>
                  <td
                    style={{ color: coin.hourlyColor }}
                    className="px-0  border-b border-gray-200 text-sm "
                  >
                    <span className=" px-3 text-center">
                      {" "}
                      {coin.hourly_price_change}%
                    </span>
                  </td>
                  <td
                    style={{ color: coin.dailyColor }}
                    className="px-0    border-b border-gray-200 text-sm "
                  >
                    <span className=" px-3 text-center">
                      {" "}
                      {coin.market_cap_change_percentage_24h.toFixed(2)}%
                    </span>
                  </td>
                  <td
                    style={{ color: coin.weeklyColor }}
                    className="px-0  border-b border-gray-200 text-sm "
                  >
                    <span className="text-left ">
                      {coin.weeklyPriceChange}%
                    </span>
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
    </div>
  );
}

export default Table;
