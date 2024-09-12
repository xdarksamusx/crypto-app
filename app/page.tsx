"use client";

import React, { useEffect, useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchTop20Coins } from "../redux/features/marketSlice";
import Table from "../components/Table";
import Carousels from "@components/Carousel";
import PriceChart from "@components/PriceChart";
import VolumeChart from "@components/VolumeChart";
import ChartButtons from "@components/ChartButtons";
import Header from "../components/Header";

import Navigation from "../components/Navigation";
import { toogleTheme, setTheme } from "../redux/features/themesSlice";
import "./globals.css";

import { updateColors } from "../redux/features/sortSlice";
import { selectCoin, selectUnit } from "../redux/features/coinSelectionSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const dispatchBox = useAppDispatch();
  const coins = useAppSelector((state) => state.coins.coins);
  const dispatchSortingColors = useAppDispatch();
  const status = useAppSelector((state) => state.coins.status);
  const error = useAppSelector((state) => state.coins.error);
  const fetchOnce = useRef(false);
  const dispatchTheme = useAppDispatch();
  const themeColor = useAppSelector((state) => state.theme.dark);
  const [isClient, setIsClient] = useState(false);

  const selectedCoin = useAppSelector(
    (state) => state.selectedCoin.selectedCoin
  );

  const selectedUnit = useAppSelector(
    (state) => state.selectedCoin.selectedUnit
  );

  const handleSelectedUnit = (unit: string) => {
    dispatchBox(selectUnit(unit));
  };

  useEffect(() => {
    dispatchSortingColors(updateColors());

    setIsClient(true);
  }, [dispatch]);

  useEffect(() => {
    if (!fetchOnce.current) {
      if (status === "idle" && coins.length === 0) {
        dispatch(fetchTop20Coins());
      }
      fetchOnce.current = true;
    }
  }, [dispatch, status]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="">
      <div className=""></div>
      <div className="max-w-full mx-auto ">
        <Carousels />
      </div>
      <div className=" mt-8 flex max-w-7xl mx-auto justify-around items-center ">
        <VolumeChart />
        <PriceChart />
      </div>
      <div className=" mt-8">
        <ChartButtons
          handleSelectedUnit={handleSelectedUnit}
          selectedUnit={selectedUnit}
        />
      </div>
      <Table />
    </div>
  );
};

export default Home;
