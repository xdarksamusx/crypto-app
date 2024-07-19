"use client";

import React, { useEffect, useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchTop20Coins } from "../redux/features/marketSlice";
import Table from "../components/Table";

import Header from "../components/Header";

import Navigation from "../components/Navigation";
import { toogleTheme } from "../redux/features/themesSlice";
import "./globals.css";

const Home = () => {
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coins.coins);
  const status = useAppSelector((state) => state.coins.status);
  const error = useAppSelector((state) => state.coins.error);
  const fetchOnce = useRef(false);

  const dispatchTheme = useAppDispatch();
  const themeColor = useAppSelector((state) => state.theme.dark);

  const handdleThemeChange = () => {
    console.log("click !!! and", themeColor);
    dispatchTheme(toogleTheme());
  };

  useEffect(() => {
    dispatchTheme(toogleTheme());
  }, [dispatch]);

  useEffect(() => {
    if (!fetchOnce.current) {
      if (status === "idle" && coins.length === 0) {
        dispatch(fetchTop20Coins());
      }
      fetchOnce.current = true;
    }
  }, [dispatch, status]);
  return (
    <div>
      <Header />
      <Navigation
        themeColor={themeColor}
        onClick={() => handdleThemeChange()}
      />
      <Table />
    </div>
  );
};

export default Home;
