import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};

export default config;
