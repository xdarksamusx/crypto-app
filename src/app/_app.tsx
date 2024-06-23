// src/pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import StoreProvider from "@/redux/StoreProvider"; // Ensure the correct path

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default MyApp;
