import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "100": "100px",
        "650": "650px",
        "600": "600px",
        "28%": "28%",
        "60%": "60%",
        "45%": "45%",
        "15p": "15%",
      },
      height: {
        "100": "100px",
        "200": "200px",
        "300": "300px",
        "350": "350px",
        "400": "400",
        "500": "500",
      },
      translate: {
        "1/5": "20%",
      },
      colors: {
        "foreground-color": "var(--foreground-color)",
        "background-color": "var(--background-color)",
        "svg-color": "var(--svg-color)",
        "input-bg-color": "var(--input-bg-color)",
        "input-text-color": "var(--input-text-color)",
        "dropdown-bg-color": "var(--dropdown-bg-color)",
        "dropdown-text-color": "var(--dropdown-text-color)",
        "search-bar-color": "var(--search-bar-color)",
      },
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
