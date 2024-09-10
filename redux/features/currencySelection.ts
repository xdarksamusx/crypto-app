import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Currency {
  currency: string;
}

const initialState: Currency = {
  currency: "$",
};

const currencySlice = createSlice({
  name: "currency",
  initialState: initialState,
  reducers: {
    selectCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

// if i select a currency, i replace the symbol and perform some calculations
// if I  have  a dollar,  i select another currency and covert it. there are 12 conversions

// each currency would need four conversions

export const { selectCurrency } = currencySlice.actions;

export default currencySlice.reducer;
