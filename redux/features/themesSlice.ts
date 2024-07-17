import { createSlice } from "@reduxjs/toolkit";

const initialColor = {
  dark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialColor,

  reducers: {
    toogleTheme: (state) => {
      state.dark = !state.dark;

      if (state.dark) {
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.style.setProperty(
          "--foreground-color",
          "#fff"
        );
        document.documentElement.style.setProperty(
          "--background-color",
          "#000"
        );
        document.documentElement.style.setProperty("--svg-color", "#fff");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        document.documentElement.style.setProperty(
          "--foreground-color",
          "#000"
        );
        document.documentElement.style.setProperty(
          "--background-color",
          "#fff"
        );
        document.documentElement.style.setProperty("--svg-color", "#000");
      }
    },
  },
});

export const { toogleTheme } = themeSlice.actions;
export default themeSlice.reducer;
