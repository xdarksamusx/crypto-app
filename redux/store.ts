import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./features/marketSlice";
import themesSlice from "./features/themesSlice";

 import sortSlice from "./features/sortSlice";
 
const store = configureStore({
  reducer: {
    coins: coinSlice,
    theme: themesSlice,
        sort: sortSlice,

   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

export default store;
