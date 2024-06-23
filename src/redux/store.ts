// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "@/redux/features/marketSlice"; // Ensure the path is correct

const store = configureStore({
  reducer: {
    coins: coinSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

export default store;
