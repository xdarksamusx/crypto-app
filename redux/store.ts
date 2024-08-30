import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./features/marketSlice";
import sortSlice from "./features/sortSlice";
import coinSelectionSlice from "./features/coinSelectionSlice";
import portfolioSlice from "./features/portfolioSlice";

import themesSlice from "./features/themesSlice";
const store = configureStore({
  reducer: {
    coins: coinSlice,
    theme: themesSlice,
    sort: sortSlice,
    selectedCoin: coinSelectionSlice,
    portfolio: portfolioSlice,
  },
});

const currentState = store.getState();
console.log("current state", currentState);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

export default store;
