"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "../redux/hooks";
import {
  calculateBitcoinDominance,
  calculateEthereumDominance,
  calculateTotalMarketCap,
  calculateTotalVolume,
} from "../utils/headerCalculations";
function Header() {
  const [headerState, setHeaderState] = useState({
    totalMarketCap: 0,
    totalVolume: 0,
    ethDominance: 0,
    btcDominance: 0,
    exchanges: 0,
    totalCoins: 0,
  });

  const coins = useAppSelector((state) => state.coins.coins);

  const currency = useAppSelector((state) => state.currency.currency);
  const previousCurrency = useAppSelector(
    (state) => state.currency.previousCurrency
  );

  useEffect(() => {
    const fetchData = async () => {
      const exchangeData = await axios.get(
        `https://api.coingecko.com/api/v3/exchanges`
      );
      const coinListData = await axios.get(
        `https://api.coingecko.com/api/v3/coins/list`
      );

      const { data: exchangeArray } = exchangeData;
      const { data: coinListArray } = coinListData;
      const exchangeArrayLength = exchangeArray.length;
      const coinListArrayLength = coinListArray.length;
      const totalMarketCap = calculateTotalMarketCap(coins);
      const totalVolume = calculateTotalVolume(coins);
      const ethDominance = calculateEthereumDominance(coins, totalMarketCap);
      const btcDominance = calculateBitcoinDominance(coins, totalMarketCap);
      setHeaderState({
        totalMarketCap: totalMarketCap,
        totalVolume: totalVolume,
        ethDominance: ethDominance,
        btcDominance: btcDominance,
        exchanges: exchangeArrayLength,
        totalCoins: coinListArrayLength,
      });
    };
    fetchData();
  }, []);

  const {
    totalMarketCap,
    totalVolume,
    ethDominance,
    btcDominance,
    exchanges,
    totalCoins,
  } = headerState;

  return (
    <div className="w-full  text-xs font-medium">
      <div className="max-w-7xl mx-auto flex justify-between py-4 px-4 sm:px-6 lg:px-8 space-x-4">
        <h5 className="flex items-center space-x-4">
          <span>Coins: {totalCoins}</span>
          <span>Exchanges: {exchanges}</span>
          <span>
            {" "}
            Total marketcap: {currency}
            {(totalMarketCap / 1e12).toFixed(2)} trillion{" "}
          </span>
          <span>
            {" "}
            Total 24 hr volume: {currency}
            {(totalVolume / 1e9).toFixed(2)} billion
          </span>
          <span>Bitcoin dominance: {(btcDominance * 100).toFixed(2)} %</span>
          <span>Ethereum dominance: {(ethDominance * 100).toFixed(2)}%</span>
        </h5>
      </div>
    </div>
  );
}

export default Header;
