"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolio: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCoin: (state, action) => {
      state.portfolio.push(action.payload);
    },
    deleteCoin: (state, action) => {
      state.portfolio.filter((coin) => coin.id !== action.payload);
    },
  },
});

export const { addCoin, deleteCoin } = portfolioSlice.actions;

export default portfolioSlice.reducer;
