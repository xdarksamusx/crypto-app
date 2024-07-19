import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getInitialCoinState } from "../../utils/apiData";
import { CoinState, CoinData } from "../../utils/interfaces";

const initialState = {
  coins: getInitialCoinState().map((coin) => ({
    ...coin,
    price_change_percentage_24h:
      coin.market_cap_change_percentage_24h > 0 ? "green" : "red",
    weeklyColor: coin.weeklyPriceChange > 0 ? "green" : "red",
    hourlyColor: coin.hourly_price_change > 0 ? "green" : "red",
  })),
  sortKey: "market_cap",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortByIncreasing(state) {
      state.coins.sort((a, b) => {
        console.log("type of sort key", state.sortKey);
        const aValue = a[state.sortKey as string];
        const bValue = b[state.sortKey as string];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.localeCompare(bValue);
        } else {
          return aValue - bValue;
        }
      });
    },
    sortByDecreasing(state) {
      state.coins.sort((a, b) => {
        const aValue = a[state.sortKey as string];
        const bValue = b[state.sortKey as string];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return bValue.localeCompare(aValue);
        } else {
          return bValue - aValue;
        }
      });
    },
    setSortKey(state, action) {
      state.sortKey = action.payload;
    },
    setCoins(state, action) {
      state.coins = action.payload;
    },

    updateColors(state) {
      state.coins.forEach((coin) => {
        coin.hourlyColor =
          Number(coin.hourly_price_change) > 0 ? "green" : "red";
        coin.dailyColor =
          Number(coin.market_cap_change_percentage_24h) > 0 ? "green" : "red";
        coin.weeklyColor = Number(coin.weeklyPriceChange) > 0 ? "green" : "red";
      });
    },
  },
});

export const {
  sortByIncreasing,
  sortByDecreasing,
  setSortKey,
  setCoins,
  updateColors,
} = sortSlice.actions;
export default sortSlice.reducer;
