import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getInitialCoinState } from "../../app/utils/apiData";
import { CoinState, CoinData } from "../../app/utils/interfaces";

const initialState: CoinState = {
  coins: getInitialCoinState().map((coin) => ({
    ...coin,
    price_change_percentage_24h: coin.market_cap_change_percentage_24h,
    weeklyColor: coin.weeklyPriceChange > 0 ? "green" : "red",
    hourlyColor: coin.hourly_price_change > 0 ? "green" : "red",
  })),
  sortKey: "market_cap",
  status: "idle",
  error: null,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortByIncreasing(state) {
      state.coins.sort((a, b) => {
        const aValue = a[state.sortKey];
        const bValue = b[state.sortKey];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.localeCompare(bValue);
        } else {
          return (aValue as number) - (bValue as number);
        }
      });
    },
    sortByDecreasing(state) {
      state.coins.sort((a, b) => {
        const aValue = a[state.sortKey as keyof CoinData];
        const bValue = b[state.sortKey as keyof CoinData];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return bValue.localeCompare(aValue);
        } else {
          return (bValue as number) - (aValue as number);
        }
      });
    },
    setSortKey(state, action) {
      state.sortKey = action.payload;
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

export const { sortByIncreasing, sortByDecreasing, setSortKey, updateColors } =
  sortSlice.actions;

export default sortSlice.reducer;
