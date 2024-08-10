"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CoinInfo from "@components/CoinPage/CoinInfo";

interface PageData {
  description?: {
    en?: string;
  };
}

interface Error {
  error?: string;
}

const Page = ({ params }: { params: { coinId: string } }) => {
  const { coinId } = params;

  return (
    <>
      <CoinInfo coinId={coinId} />

      {/* {pageData && <div>{pageData.description?.en}</div>} */}
    </>
  );
};

export default Page;
