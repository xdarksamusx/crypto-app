"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Portfolio } from "@utils/portfolioInterface";

const initialState: { portfolio: Portfolio[] } = {
  portfolio: [] as Portfolio[],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<Portfolio>) => {
      state.portfolio.push(action.payload);
    },
    deleteCoin: (state, action) => {
      state.portfolio = state.portfolio.filter(
        (coin) => coin.name !== action.payload
      );
    },
  },
});

export const { addCoin, deleteCoin } = portfolioSlice.actions;

export default portfolioSlice.reducer;
