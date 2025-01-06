"use client";

import React from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import ChartButtons from "../../components/ChartButtons";
import RatioChart from "../../components/Convertor/RatioChart";
import { selectUnit } from "../../redux/features/coinSelectionSlice";
import DoubleArrows from "../../components/Convertor/DoubleArrows";
import Box from "../../components/Convertor/Boxes";
import { convertCurrency } from "../../utils/conversions";
import { useEffect } from "react";
import Link from "next/link";
import { TableCoinData } from "@utils/interfaces";

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  market_data: {
    current_price: {
      usd: number;
    };
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  description?: string;
  categories?: string[];
}

export default function Convertor() {
  const dispatch = useAppDispatch();
  const selectedUnit = useAppSelector(
    (state) => state.selectedCoin.selectedUnit
  );

  const [input, setInput] = useState<string>("");

  const [activePage, setActivePage] = useState("convertor");

  const [coins, setCoins] = useState<TableCoinData[]>([]);
  const currency = useAppSelector((state) => state.currency);

  const [btcInput, setBtcInput] = useState<string>("");
  const [btcData, setBtcData] = useState<CoinData | null>(null);
  const [ethData, setEthData] = useState<CoinData | null>(null);
  const [ethInput, setEthInput] = useState<string>("");
  const [boxSwap, setBoxSwap] = useState<boolean>(true);
  const [bitcoinChart, setBitcoinChart] = useState({});
  const [ethereumChart, setEthereumChart] = useState({});

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const bitcoinResponse = await fetch(
          "https://raw.githubusercontent.com/xdarksamusx/ratioFIles/main/bitcoin-ratio.json"
        );
        const bitcoinChartResponse = await fetch(
          `https://xdarksamusx.github.io/chart-files/charts/usd-charts/bitcoin.json`
        );
        const bitcoinData = await bitcoinResponse.json();
        const bitcoinChartData = await bitcoinChartResponse.json();

        setBtcData(bitcoinData);
        setBitcoinChart(bitcoinChartData);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    fetchBitcoinData();
  }, []);

  useEffect(() => {
    const fetchEthereumData = async () => {
      try {
        const ethereumResponse = await fetch(
          "https://raw.githubusercontent.com/xdarksamusx/ratioFIles/main/ethereum-ratio.json"
        );
        const ethereumChartResponse = await fetch(
          `https://xdarksamusx.github.io/chart-files/charts/usd-charts/ethereum.json`
        );
        const ethereumData = await ethereumResponse.json();
        const ethereumChartData = await ethereumChartResponse.json();

        setEthData(ethereumData);
        setEthereumChart(ethereumChartData);
      } catch (error) {
        console.error("Error fetching Ethereum data:", error);
      }
    };

    fetchEthereumData();
  }, []);

  if (!btcData || !ethData) {
    return <div>Loading...</div>;
  }

  const btcToUsd = btcData?.market_data?.current_price?.usd || 0;
  const ethToUsd = ethData?.market_data?.current_price?.usd || 0;

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

  const handleActivePage = (page: string) => {
    setActivePage(page);
  };

  return (
    <>
      <div className="  max-w-7xl mx-auto  flex  items-center mt-8 ">
        <div
          className={` cursor-pointer flex items-center w-[125px] h-[46px] px-4 ${
            activePage === "coins" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleActivePage("coins")}
        >
          <Link href="/">Coins</Link>
        </div>

        <div
          className={`   cursor-pointer flex items-center w-[125px] h-[46px] px-4 ${
            activePage === "convertor"
              ? "bg-blue-700 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleActivePage("convertor")}
        >
          {" "}
          <Link href="/convertor">Convertor</Link>
        </div>
      </div>

      <div className="flex flex-col">
        <div className=" flex gap-5 ">
          {boxSwap ? (
            <Box data={btcData} input={btcInput} setInput={handleBtcInput} />
          ) : (
            <Box data={ethData} input={ethInput} setInput={handleEthInput} />
          )}
          <div className="flex items-center justify-center">
            <DoubleArrows handleCurrencySwap={handleCurrencySwap} />
          </div>
          {!boxSwap ? (
            <Box data={btcData} input={btcInput} setInput={handleBtcInput} />
          ) : (
            <Box data={ethData} input={ethInput} setInput={handleEthInput} />
          )}
        </div>

        <RatioChart
          selectedUnit={selectedUnit}
          boxSwap={boxSwap}
          bitcoinChart={bitcoinChart}
          ethereumChart={ethereumChart}
        />
        <ChartButtons
          selectedUnit={selectedUnit}
          handleSelectedUnit={handleSelectedUnit}
        />
      </div>
    </>
  );
}
