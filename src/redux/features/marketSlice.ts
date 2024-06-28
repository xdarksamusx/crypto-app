import {
  fetchCoins,
  fetchHistoricalData,
  fetchDataWithDelay,
  delay,
  storage,
  getInitialCoinState,
} from "@/app/utils/apiData";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CryptoCurrency, Status, CoinState } from "@/app/utils/interfaces";
import axios from "axios";

export const fetchTop20Coins = createAsyncThunk(
  "coins/fetchTop20",

  async () => {
    try {
      const coinData = await fetchCoins();
      const delayMS = 12000;

      const fetchedHistoricalData = await fetchDataWithDelay(coinData, delayMS);

      storage(fetchedHistoricalData);

      return fetchedHistoricalData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState: CoinState = {
  coins: getInitialCoinState(),
  status: "idle",
  error: null,
};

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTop20Coins.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchTop20Coins.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.coins = action.payload;
    });
    builder.addCase(fetchTop20Coins.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "failed to fetch coins";
    });
    builder.addCase;
  },
});

export default coinSlice.reducer;
