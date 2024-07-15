import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getInitialCoinState } from "../../utils/apiData";
import { CoinState } from "../../utils/interfaces";
// import {
//   sortMarketCapAscending,
//   sortMarketCapDescending,
//   sortCurrentPriceAscending,
//   sortHourlyPriceChangeDescending,
//   sortHourlyPriceChangeAscending,
//   sortCurrentPriceDescending,
//   sortCurrentWeeklyPriceChangeAscending,
//   sortCurrentWeeklyPriceChangeDescending,
//   sortRankAscending,
//   sortRankDescending,
//   sortNameAscending,
//   sortNameDescending,
//   sortDailyPriceChangeAscending,
//   sortDailyPriceChangeDescending,
//   sortTotalVolumeAscending,
//   sortTotalVolumeDescending,
// } from "../utils/sortFunctions";
const initialState = {
  coins: getInitialCoinState(),
  sortKey: "market_cap",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortByIncreasing(state) {
      state.coins.sort((a, b) => a[state.sortKey] - b[state.sortKey]);
    },
    sortByDecreasing(state) {
      state.coins.sort((a, b) => b[state.sortKey] - a[state.sortKey]);
    },
    setSortKey(state, action) {
      state.sortKey = action.payload;
    },
    setCoins(state, action) {
      state.coins = action.payload;
    },
  },
});

export const { sortByIncreasing, sortByDecreasing, setSortKey, setCoins } =
  sortSlice.actions;
export default sortSlice.reducer;
