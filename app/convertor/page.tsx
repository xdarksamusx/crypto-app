"use client";

import React from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { CoinData } from "@utils/interfaces";
import ChartButtons from "@components/ChartButtons";
import RatioChart from "@components/Convertor/RatioChart";
import { selectUnit } from "../../redux/features/coinSelectionSlice";
import { useMemo } from "react";
import DoubleArrows from "@components/Convertor/DoubleArrows";
import Box from "@components/Convertor/Boxes";
import { convertCurrency } from "@utils/conversions";
import { useEffect } from "react";
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

  const [input, setInput] = useState<string>("");

  const [btcInput, setBtcInput] = useState<string>("");
  const [ethInput, setEthInput] = useState<string>("");
  const [boxSwap, setBoxSwap] = useState<boolean>(true);
  const [isClient, setIsClient] = useState(false);
  const bitcoinData = coins[0];
  const ethereumData = coins[1];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  const btcToUsd: number = bitcoinData.current_price;
  const ethToUsd: number = ethereumData.current_price;

  const ethValue = btcInput
    ? convertCurrency(parseFloat(btcInput), btcToUsd, ethToUsd).toString()
    : "";

  const btcValue = ethInput
    ? convertCurrency(parseFloat(ethInput), ethToUsd, btcToUsd).toString()
    : "";

  const handleSelectedUnit = (unit: string) => {
    dispatch(selectUnit(unit));
  };

  const handleBtcInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setBtcInput(value);
      const ethConverted = convertCurrency(Number(value), btcToUsd, ethToUsd);
      setEthInput(ethConverted.toString());
    }
  };

  const handleEthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setEthInput(value);
      const btcConverted = convertCurrency(Number(value), ethToUsd, btcToUsd);
      setBtcInput(btcConverted.toString());
    }
  };

  const handleCurrencySwap = () => {
    setBoxSwap(!boxSwap);
  };

  return (
    <div className="flex flex-col">
      <div className=" flex gap-5 ">
        {boxSwap ? (
          <Box data={bitcoinData} input={btcInput} setInput={handleBtcInput} />
        ) : (
          <Box data={ethereumData} input={ethInput} setInput={handleEthInput} />
        )}
        <div className="flex items-center justify-center">
          <DoubleArrows handleCurrencySwap={handleCurrencySwap} />
        </div>
        {!boxSwap ? (
          <Box data={bitcoinData} input={btcInput} setInput={handleBtcInput} />
        ) : (
          <Box data={ethereumData} input={ethInput} setInput={handleEthInput} />
        )}
      </div>

      <RatioChart selectedUnit={selectedUnit} />
      <ChartButtons
        selectedUnit={selectedUnit}
        handleSelectedUnit={handleSelectedUnit}
      />
    </div>
  );
}
