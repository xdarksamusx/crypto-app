import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: false,
};

const updateTheme = (dark: boolean) => {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");

  document.documentElement.style.setProperty(
    "--foreground-color",
    dark ? "#ffffff" : "#000000"
  );
  document.documentElement.style.setProperty(
    "--background-color",
    dark ? "#000000" : "#ffffff"
  );
  document.documentElement.style.setProperty(
    "--svg-color",
    dark ? "#ffffff" : "#000000"
  );
  document.documentElement.style.setProperty(
    "--input-bg-color",
    dark ? "#1f2937" : "#f3f4f6"
  );
  document.documentElement.style.setProperty(
    "--input-text-color",
    dark ? "#ffffff" : "#000000"
  );
  document.documentElement.style.setProperty(
    "--dropdown-bg-color",
    dark ? "#374151" : "#f9fafb"
  );
  document.documentElement.style.setProperty(
    "--dropdown-text-color",
    dark ? "#ffffff" : "#000000"
  );
  document.documentElement.style.setProperty(
    "--search-bar-color",
    dark ? "#ffffff" : "#000000"
  );
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toogleTheme: (state) => {
      state.dark = !state.dark;
      updateTheme(state.dark);
    },
    setTheme: (state, action) => {
      state.dark = action.payload;
      updateTheme(state.dark);
    },
  },
});

export const { toogleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
