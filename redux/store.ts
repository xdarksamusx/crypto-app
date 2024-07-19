import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./features/marketSlice";
import themesSlice from "./features/themesSlice";
const store = configureStore({
  reducer: {
    coins: coinSlice,
    theme: themesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

export default store;
