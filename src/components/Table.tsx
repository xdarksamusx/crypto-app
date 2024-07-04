"use client";

import React from "react";

function Table() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              Coin
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              Price
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              1h
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              24h
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              7d
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              24h Volume
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              MarketCap
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">
              Chart
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">Coin</td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">
              Price
            </td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">1h</td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">24h</td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">7d</td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">
              24h Volume
            </td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">
              MarketCap
            </td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">
              Chart
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">Coin</td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">
              Price
            </td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">1h</td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">24h</td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">7d</td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">
              24h Volume
            </td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">
              MarketCap
            </td>
            <td className="px-6 py-4 border-b border-gray-200 text-sm">
              Chart
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
