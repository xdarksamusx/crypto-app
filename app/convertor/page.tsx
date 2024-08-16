"use client";

import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { calculateRatios } from "@utils/calculateRatios";
import { CoinData } from "@utils/interfaces";

export default function Convertor() {
  const coins = useAppSelector((state) => state.coins.coins);

  const bitcoinData = coins[0];
  const ethereumData = coins[1];
  calculateRatios(bitcoinData, ethereumData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {" "}
      this is the converter page
    </main>
  );
}
