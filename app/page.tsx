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
import { toogleTheme } from "../redux/features/themesSlice";
import "./globals.css";

import { updateColors } from "../redux/features/sortSlice";
import { relative } from "path";

const Home = () => {
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coins.coins);
  const dispatchSortingColors = useAppDispatch();
  const status = useAppSelector((state) => state.coins.status);
  const error = useAppSelector((state) => state.coins.error);
  const fetchOnce = useRef(false);
  const dispatchTheme = useAppDispatch();
  const themeColor = useAppSelector((state) => state.theme.dark);
  const [isClient, setIsClient] = useState(false);

  const handdleThemeChange = () => {
    dispatchTheme(toogleTheme());
  };

  useEffect(() => {
    dispatchTheme(toogleTheme());
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
    <div className="relative">
      <Header />
      <div className="relative">
        <Navigation onClick={() => handdleThemeChange()} />
      </div>
      <div className="relative  overflow-visible ">
        <Carousels />
      </div>
      <div className="flex max-w-7xl mx-auto justify-around ">
        <VolumeChart />
        <PriceChart />
      </div>
      <div className="relative mt-8">
        <ChartButtons />
      </div>
      <Table />
    </div>
  );
};

export default Home;
