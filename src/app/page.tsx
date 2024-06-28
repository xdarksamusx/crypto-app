"use client";

import Table from "@/components/Table";
import React, { useEffect, useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { fetchTop20Coins } from "@/redux/features/marketSlice";
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coins.coins);
  const status = useAppSelector((state) => state.coins.status);
  const error = useAppSelector((state) => state.coins.error);
  const fetchOnce = useRef(false);

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
      <Table />
    </div>
  );
};

export default Home;
