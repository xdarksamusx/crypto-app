"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { CoinData } from "@utils/interfaces";
import ChartButtons from "@components/ChartButtons";
import RatioChart from "@components/Convertor/RatioChart";
import { selectUnit } from "../../redux/features/coinSelectionSlice";
import { useMemo } from "react";
import DoubleArrows from "@components/Convertor/DoubleArrows";
import Box from "@components/Convertor/Boxes";

interface Prices {
  dailyPrices: number[];
  weeklyPrices: number[];
  fourteenDayPrices: number[];
  monthlyPrices: number[];
  ninetyDayPrices: number[];
  yearlyPrices: number[];
}

export default function Convertor() {
  const dispatch = useAppDispatch();
  const selectedUnit = useAppSelector(
    (state) => state.selectedCoin.selectedUnit
  );
  const coins = useAppSelector((state) => state.coins.coins);

  const bitcoinData = coins[0];
  const ethereumData = coins[1];

  const handleSelectedUnit = (unit: string) => {
    dispatch(selectUnit(unit));
  };

  return (
    <div className="flex flex-col">
      <div className=" flex gap-5 ">
        <Box data={bitcoinData} />
        <div className="flex items-center justify-center">
          <DoubleArrows />
        </div>
        <Box data={ethereumData} />
      </div>

      <RatioChart selectedUnit={selectedUnit} />
      <ChartButtons
        selectedUnit={selectedUnit}
        handleSelectedUnit={handleSelectedUnit}
      />
    </div>
  );
}
