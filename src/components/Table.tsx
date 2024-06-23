"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks"; // Ensure this path is correct
import { fetchTop20Coins } from "@/redux/features/marketSlice"; // Ensure this path is correct

function Table() {
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
    <>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h Volume</th>
            <th>MarketCap</th>
            <th>chart</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default Table;
