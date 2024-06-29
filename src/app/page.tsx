"use client";

import Table from "@/components/Table";
import Header from "@/components/Header";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { fetchTop20Coins } from "@/redux/features/marketSlice";
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coins.coins);
  const status = useAppSelector((state) => state.coins.status);
  const error = useAppSelector((state) => state.coins.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTop20Coins());
    }
  }, [dispatch, status]);

  return (
    <div>
      <Header />
      <Table />
    </div>
  );
};

export default Home;
