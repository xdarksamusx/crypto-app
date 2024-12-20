import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Currency {
  currency: string;
  currencySymbol: string | null;
  data: any[]; // Assuming data is an array
}

const mapCurrencySymbolToCode = (symbol: string): string => {
  const currencyMapping: Record<string, string> = {
    $: "usd",
    "€": "euro",
    "£": "gbp",
    "₿": "btc",
    Ξ: "eth",
  };
  return currencyMapping[symbol] || symbol;
};

const initialState: Currency = {
  currency: "usd",
  currencySymbol: "$",
  data: [],
};
const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currencySymbol = action.payload;
      state.currency = mapCurrencySymbolToCode(action.payload);
    },
    setCurrencyData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
    selectCurrency: (
      state,
      action: PayloadAction<{ currency: string; currencySymbol: string }>
    ) => {
      state.currency = action.payload.currency;
      state.currencySymbol = action.payload.currencySymbol;
    },
  },
});

export const { setCurrency, setCurrencyData, selectCurrency } =
  currencySlice.actions;

export default currencySlice.reducer;
