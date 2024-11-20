"use client";

import React from "react";
import Star from "../icons/Star";
import LineChart from "./7DayChart";
import { capitalizeFirstLetter } from "../app/utils/apiData";
import SortButton from "./SortButton";
import SortDownArrow from "../icons/SortDownArrow";
import SortUpArrow from "../icons/SortUpArrow";
import Link from "next/link";
import { useAppSelector } from "../redux/hooks";
import { selectCurrency } from "../redux/features/currencySelection";
import { numberWithCommas } from "../app/utils/moreComputations";

function Table({ coins }) {
  const coinData = useAppSelector((state) => state.currency.data);

  const currency = useAppSelector((state) => state.currency.currencySymbol);
  console.log("coins", coinData);

  return (
    <div className="max-w-7xl mx-auto mt-12">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full border-gray-200 border-collapse">
          <thead className="border-t-2 border-b-2 text-xs">
            <tr>
              {/* Headers for the table */}
              <th className="px-6 py-1 border-b border-gray-200 text-left text-sm uppercase font-medium">
                <div className="flex items-end justify-start">
                  <span className="flex items-end">
                    <SortButton IconComponent={SortUpArrow} sortKey="rank" />
                    <span className="mx-1">#</span>
                  </span>
                </div>
              </th>
              <th className="px-6 py-1 border-b border-gray-200 text-left text-sm uppercase font-medium">
                <div className="flex items-end justify-start">
                  <span className="flex items-center">
                    <SortButton IconComponent={SortDownArrow} sortKey="name" />
                    <span className="mx-1">Coin</span>
                  </span>
                </div>
              </th>
              <th className="px-6 py-1 border-b border-gray-200 text-left text-sm uppercase font-medium">
                <div className="flex items-center justify-start">
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortKey="current_price"
                  />
                  <span className="mx-1">Price</span>
                </div>
              </th>

              <th className="px-6 py-1 border-b border-gray-200 text-left text-sm uppercase font-medium">
                <div className="flex items-center justify-start">
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortKey="current_price"
                  />
                  <span className="mx-1">1hr</span>
                </div>
              </th>

              <th className="px-6 py-1 border-b border-gray-200 text-left text-sm uppercase font-medium">
                <div className="flex items-center justify-start">
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortKey="current_price"
                  />
                  <span className="mx-1">24hr</span>
                </div>
              </th>

              <th className="px-6 py-1 border-b border-gray-200 text-left text-sm uppercase font-medium">
                <div className="flex items-center justify-start">
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortKey="current_price"
                  />
                  <span className="mx-1">7D</span>
                </div>
              </th>

              <th className="px-6 py-1 border-b border-gray-200 text-left text-sm uppercase font-medium">
                <div className="flex items-center justify-start">
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortKey="current_price"
                  />
                  <span className="mx-1">24hr Volume</span>
                </div>
              </th>

              <th className="px-6 py-1 border-b border-gray-200 text-left text-sm uppercase font-medium">
                <div className="flex items-center justify-start">
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortKey="current_price"
                  />
                  <span className="mx-1">MarketCap</span>
                </div>
              </th>

              <th className="px-6 py-1 border-b border-gray-200 text-left text-sm uppercase font-medium">
                <div className="flex items-center justify-start">
                  <SortButton
                    IconComponent={SortDownArrow}
                    sortKey="current_price"
                  />
                  <span className="mx-1">Last 7 Days</span>
                </div>
              </th>

              {/* Other headers here */}
            </tr>
          </thead>
          <tbody>
            {coinData.map((coin: any) => {
              const coinName = capitalizeFirstLetter(coin.id);

              return (
                <tr key={coin.id}>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    <div className="flex items-center justify-center">
                      <Star />
                      <span className="mx-2">{coin.market_cap_rank}</span>
                    </div>
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    <div className="flex items-center">
                      <img
                        className="w-6 h-6"
                        src={coin.image}
                        alt={coin.name}
                      />
                      <span className="px-2">
                        <Link href={`/coins/${coin.id.toLowerCase()}`}>
                          {coinName}
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    <span className="px-3">
                      <span>
                        {currency} {numberWithCommas(coin.current_price)}{" "}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 border-b border-gray-200 text-sm">
                    <span className="px-3">
                      <span>
                        {currency}
                        {coin.price_change_percentage_1h_in_currency?.toFixed(
                          2
                        )}{" "}
                      </span>
                    </span>
                  </td>

                  <td className="px-6 border-b border-gray-200 text-sm">
                    <span className="px-3">
                      <span>
                        {currency}
                        {coin.price_change_percentage_24h_in_currency?.toFixed(
                          2
                        )}{" "}
                      </span>
                    </span>
                  </td>

                  <td className="px-6 border-b border-gray-200 text-sm">
                    <span className="px-3">
                      <span>
                        {currency}
                        {coin.price_change_percentage_7d_in_currency?.toFixed(
                          2
                        )}{" "}
                      </span>
                    </span>
                  </td>

                  <td className="px-6 border-b border-gray-200 text-sm">
                    <span className="px-3">
                      <span>
                        {currency}
                        {numberWithCommas(coin.total_volume)}{" "}
                      </span>
                    </span>
                  </td>

                  <td className="px-6 border-b border-gray-200 text-sm">
                    <span className="px-3">
                      <span>
                        {currency}
                        {numberWithCommas(coin.market_cap)}{" "}
                      </span>
                    </span>
                  </td>

                  <td className="px-6 border-b border-gray-200 text-sm">
                    <LineChart chart={coin.sparkline_in_7d} />
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

// sparkline_in_7d
