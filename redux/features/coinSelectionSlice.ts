import { CoinData, CoinState } from "../../app/utils/interfaces";

import { getInitialCoinState } from "../../app/utils/apiData";
import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectedCoinState extends CoinState {
  selectedCoin: string;
  selectedUnit: string;
}
const initialCoins = getInitialCoinState();

// const initialSelectedCoin = initialCoins.find(
//   (coin) => coin.id === "bitcoin"
// ) as CoinData | null;

const initialState: SelectedCoinState = {
  coins: initialCoins,
  status: "idle",
  error: null,
  sortKey: "market_cap",
  selectedCoin: "bitcoin",
  selectedUnit: "1D",
};

const coinSelectionSlice = createSlice({
  name: "selectedCoin",
  initialState,
  reducers: {
    selectCoin: (state, action: PayloadAction<string>) => {
      state.selectedCoin = action.payload;
    },
    selectUnit: (state, action: PayloadAction<string>) => {
      state.selectedUnit = action.payload;
    },
  },
});

export const { selectCoin, selectUnit } = coinSelectionSlice.actions;
export default coinSelectionSlice.reducer;
