"use client";

import React, { useEffect, useState } from "react";
import CoinInfo from "../../../components/CoinPage/CoinInfo";

import axios from "axios";

interface PageData {
  description: {
    en: string;
  };
  links: {
    homepage?: string[];
    blockchain_site?: string[];
  };
  market_data?: MarketData;
  image?: {
    small?: string;
  };
  id?: string;
  symbol?: string;
  market_cap_rank: number;
}

interface MarketData {
  market_cap: {
    usd?: string;
  };
  total_volume?: {
    usd?: string;
  };
  fully_diluted_valuation?: {
    usd?: string;
  };
  circulating_supply?: string;
  max_supply?: string;
  high_24h?: {
    usd?: string;
  };
  ath?: {
    usd?: string;
  };
  ath_date?: {
    usd?: string;
  };
  atl?: {
    usd?: string;
  };
  atl_date?: {
    usd?: string;
  };
}

interface Error {
  error: string;
}

const Page = ({ params }: { params: { coinId: string } }) => {
  const { coinId } = params;
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        setPageData(data);
      } catch (error) {
        setError({ error: "Failed to fetch data" });
      }
    };

    fetchData();
  }, [coinId]);

  if (error) {
    return <div>{error.error}</div>;
  }

  return (
    <>
      {pageData && (
        <CoinInfo
          coinId={coinId}
          pageData={pageData}
          label1="Specific Label 1"
          label2="Specific Label 2"
          label3="Specific Label 3"
          value1="Specific Value 1"
          value2="Specific Value 2"
          value3="Specific Value 3"
        />
      )}
    </>
  );
};

export default Page;
