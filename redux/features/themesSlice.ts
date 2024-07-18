import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: false,
};

const updateTheme = (dark: boolean) => {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toogleTheme: (state) => {
      state.dark = !state.dark;

      if (state.dark) {
        document.documentElement.style.setProperty(
          "--foreground-color",
          "#fff"
        );
        document.documentElement.style.setProperty(
          "--background-color",
          "#000"
        );
        document.documentElement.style.setProperty("--svg-color", "#fff");

        document.documentElement.style.setProperty(
          "--dropdown-bg-color",
          "#2d2d2d"
        );
        document.documentElement.style.setProperty(
          "--dropdown-text-color",
          "#fff"
        );
      } else {
        document.documentElement.style.setProperty(
          "--foreground-color",
          "#000"
        );
        document.documentElement.style.setProperty(
          "--background-color",
          "#fff"
        );
        document.documentElement.style.setProperty("--svg-color", "#000");

        document.documentElement.style.setProperty(
          "--dropdown-bg-color",
          "#ffffff"
        );
        document.documentElement.style.setProperty(
          "--dropdown-text-color",
          "#000"
        );
      }
    },
  },
});

export const { toogleTheme } = themeSlice.actions;
export default themeSlice.reducer;
