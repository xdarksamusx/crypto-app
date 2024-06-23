import { fetchCoins } from "@/app/utils/apiData";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CryptoCurrency, Status, CoinState } from "@/app/utils/interfaces";

export const fetchTop20Coins = createAsyncThunk(
  "coins/fetchTop20",

  async () => {
    const coinData = await fetchCoins();
    return coinData;
  }
);

const initialState: CoinState = {
  coins: [],
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
  },
});

export default coinSlice.reducer;
