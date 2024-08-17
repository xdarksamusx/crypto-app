"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { CoinData } from "@utils/interfaces";
import ChartButtons from "@components/ChartButtons";
import RatioChart from "@components/Convertor/RatioChart";
import { selectUnit } from "../../redux/features/coinSelectionSlice";
import { useMemo } from "react";

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

  const handleSelectedUnit = (unit: string) => {
    dispatch(selectUnit(unit));
  };

  return (
    <div>
      <ChartButtons
        selectedUnit={selectedUnit}
        handleSelectedUnit={handleSelectedUnit}
      />
      this is the converter page
      <RatioChart selectedUnit={selectedUnit} />
    </div>
  );
}
