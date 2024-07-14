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

import {
  sortMarketCapAscending,
  sortMarketCapDescending,
  sortCurrentPriceAscending,
  sortHourlyPriceChangeDescending,
  sortHourlyPriceChangeAscending,
  sortCurrentPriceDescending,
  sortCurrentWeeklyPriceChangeAscending,
  sortCurrentWeeklyPriceChangeDescending,
  sortRankAscending,
  sortRankDescending,
  sortNameAscending,
  sortNameDescending,
  sortDailyPriceChangeAscending,
  sortDailyPriceChangeDescending,
  sortTotalVolumeAscending,
  sortTotalVolumeDescending,
} from "../utils/sortFunctions";

import SortDownArrow from "../icons/SortDownArrow";
import SortUpArrow from "../icons/SortUpArrow";
import SortButton from "./SortButton";

type sortFunction = (a: CoinDataType, b: CoinDataType) => number;

type CoinDataType = {
  market_cap: number;
  current_price: number;
  hourly_price_change: number;
  weeklyPriceChange: number;
  price_change_percentage_24h: number;
  total_volume: number;
  name: string;
};

function Table() {
  const { coins: initialCoinData } = initialState;

  const [coinData, setCoinData] = useState(initialCoinData as CoinDataType[]);

  const [isClient, setIsClient] = useState(false);

  const handleSortByAscending = (sortFunction) => {
    console.log("sort function", sortFunction);

    const copyOfCoinData: any[] = [...coinData];
    console.log("copy of coin data", copyOfCoinData);
    const sortedData = copyOfCoinData.sort(sortFunction);
    console.log("sorted data", sortedData);
  };

  const handleSortByDescending = (sortFunction) => {
    const copyOfCoinData: any[] = [...coinData];
    const sortedData = copyOfCoinData.sort(sortFunction);
    console.log("sorted data", sortedData);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 ">
      <table className="min-w-full bg-white border border-gray-200 border-collapse  ">
        <thead className="text-xs">
          <tr className="bg-gray-100 ">
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              <div className=" flex items-end justify-start">
                <span className="flex items-end  ">
                  {" "}
                  <SortButton
                    IconComponent={SortUpArrow}
                    handleSortByAscending={() =>
                      handleSortByAscending(sortRankAscending)
                    }
                    handleSortByDescending={() =>
                      handleSortByDescending(sortRankDescending)
                    }
                  />
                  <span className="mx-1">#</span>
                </span>
              </div>{" "}
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              <div className=" flex items-end justify-start">
                <span className="flex items-center">
                  {" "}
                  <SortButton
                    IconComponent={SortDownArrow}
                    handleSortByAscending={() =>
                      handleSortByAscending(sortNameAscending)
                    }
                    handleSortByDescending={() =>
                      handleSortByDescending(sortNameDescending)
                    }
                  />
                  <span className="mx-1">Coin</span>
                </span>
              </div>{" "}
            </th>

            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              <div className=" flex items-center justify-start">
                <SortButton
                  IconComponent={SortDownArrow}
                  handleSortByAscending={() =>
                    handleSortByDescending(sortCurrentPriceAscending)
                  }
                  handleSortByDescending={() =>
                    handleSortByDescending(sortCurrentPriceDescending)
                  }
                />

                <span className="mx-1">Price </span>
              </div>
            </th>
            <th className="px-0 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              <div className=" flex items-end justify-start">
                <span className="flex items-center">
                  <SortButton
                    IconComponent={SortDownArrow}
                    handleSortByAscending={() =>
                      handleSortByAscending(sortHourlyPriceChangeAscending)
                    }
                    handleSortByDescending={() =>
                      handleSortByDescending(sortHourlyPriceChangeDescending)
                    }
                  />

                  <span className="mx-1"> 1 hr</span>
                </span>
              </div>{" "}
            </th>
            <th className="px-0 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              <div className=" flex items-end justify-start">
                <span className="flex items-center">
                  {" "}
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortByAscending={sortDailyPriceChangeAscending}
                    sortByDescending={sortDailyPriceChangeDescending}
                  />
                  <span className="mx-1"> 24 hr</span>
                </span>
              </div>{" "}
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              <div className=" flex items-end justify-start">
                <span className="flex items-center">
                  {" "}
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortByAscending={sortCurrentWeeklyPriceChangeAscending}
                    sortByDescending={sortCurrentWeeklyPriceChangeDescending}
                  />
                  <span className="mx-1"> 7D </span>
                </span>
              </div>{" "}
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              <div className=" flex items-end justify-start">
                <span className="flex items-center">
                  {" "}
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortByAscending={sortMarketCapAscending}
                    sortByDescending={sortMarketCapDescending}
                  />
                  <span className="mx-1"> MarketCap </span>
                </span>
              </div>{" "}
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              <div className=" flex items-end justify-start">
                <span className="flex items-center">
                  {" "}
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortByAscending={sortTotalVolumeAscending}
                    sortByDescending={sortTotalVolumeDescending}
                  />
                  <span className="mx-1"> Total Volume </span>
                </span>
              </div>{" "}
            </th>
            <th className="px-6 py-1 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
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
                  <span className="px-3">
                    (d){coin.current_price.toLocaleString()}
                  </span>
                </td>
                <td className="px-0  border-b border-gray-200 text-sm ">
                  <span className=" px-3 text-center">
                    {" "}
                    {coin.hourly_price_change}%
                  </span>
                </td>
                <td className="px-0    border-b border-gray-200 text-sm ">
                  <span className=" px-3 text-center">
                    {" "}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
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
