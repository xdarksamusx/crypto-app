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
      <Header />
      <div className="">
        <Navigation onClick={() => handdleThemeChange()} />
      </div>
      <div className="max-w-full mx-auto ">
        <Carousels />
      </div>
      <div className=" mt-8 flex max-w-7xl mx-auto justify-around items-center ">
        <VolumeChart />
        <PriceChart />
      </div>
      <div className=" mt-8">
        <ChartButtons />
      </div>
      <Table />
    </div>
  );
};

export default Home;
