"use client";

import React, { useEffect, useState, useRef } from "react";
import fetchCoinData from "./utils/fetchCoinData";
import { fetchCoins } from "./utils/apiData";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchTop20Coins } from "../redux/features/marketSlice";
import Table from "../components/Table";
import Carousels from "../components/Carousel";
import Pagination from "../components/Pagination";
import VolumeChart from "../components/VolumeChart";
import {
  setCurrency,
  setCurrencyData,
} from "../redux/features/currencySelection";

import ChartButtons from "../components/ChartButtons";

import { updateColors } from "../redux/features/sortSlice";
import { selectUnit } from "../redux/features/coinSelectionSlice";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const coinData = useAppSelector((state) => state.currency.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastVisible, setLastVisible] = useState(null);
  const dispatch = useAppDispatch();
  const dispatchCurrencyData = useAppDispatch();
  // const coins = useAppSelector((state) => state.coins.coins);
  const status = useAppSelector((state) => state.coins.status);
  const dispatchSortingColors = useAppDispatch();
  const fetchOnce = useRef(false);
  const [isClient, setIsClient] = useState(false);
  const currency = useAppSelector((state) => state.currency);

  const dispatchBox = useAppDispatch();

  const itemsPerPage = 100;

  const selectedUnit = useAppSelector(
    (state) => state.selectedCoin.selectedUnit
  );

  const handleSelectedUnit = (unit: string) => {
    dispatchBox(selectUnit(unit));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCoins = coins.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(coins.length / itemsPerPage);

  const top20Coins = coins.slice(0, 20);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData(currency);
      setCoins(data);
    };

    fetchData();
  }, []);

  // Handle sorting colors
  useEffect(() => {
    dispatchSortingColors(updateColors());
    setIsClient(true);
  }, [dispatch]);

  // Render nothing on the server-side
  if (!isClient) {
    return null;
  }

  return (
    <div>
      <div className="max-w-full mx-auto">
        <Carousels />
      </div>
      <div className="mt-8 flex max-w-7xl mx-auto justify-around items-center"></div>
      <VolumeChart coindata={top20Coins} />
      <div className="mt-8">
        <ChartButtons
          handleSelectedUnit={handleSelectedUnit}
          selectedUnit={selectedUnit}
        />
      </div>
      {/* Pass the tokens to your Table component */}
      <Table coins={currentCoins} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <div className="text-center mt-4"></div>
    </div>
  );
};

export default Home;
