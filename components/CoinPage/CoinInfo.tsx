import React, { useEffect, useState } from "react";
import axios from "axios";
import CopyIcon from "./CopyIcon";
import CoinDescription from "./CoinDescription";
import CoinTokenInfoCard from "./TokenInfoCard";
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
  error?: string;
}

interface CoinId {
  coinId: string;
}

interface CardProps {
  label1: string;
  label2: string;
  label3?: string;
  value1: string | number | undefined;
  value2: string | number | undefined;
  value3?: string | number | undefined;
}

interface CoinDescriptionProps {
  pageData: PageData;
}

const fetchData = async (coinId: string) => {
  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
    return data;
  } catch (error) {}
};

type CoinInfoProps = CoinId & CardProps & CoinDescriptionProps;

const CoinInfo: React.FC<CoinInfoProps> = ({
  coinId,
  label1,
  label2,
  label3,
  value1,
  value2,
  value3,
  pageData,
}) => {
  // need to total volume/market_cap ratio

  const { market_data } = pageData || {};

  let totalVolumeInEN: string | undefined;
  let fullyDilutedValuationEN: string | undefined;
  let circulatingSupply: string | undefined;
  let maxSupply: string | undefined;
  let volumeMarketRatio: number | undefined;
  let marketCapEN: string | undefined;

  if (market_data) {
    const {
      total_volume,
      fully_diluted_valuation,
      circulating_supply,
      max_supply,
      market_cap,
    } = market_data as MarketData;

    totalVolumeInEN = total_volume?.usd;
    fullyDilutedValuationEN = fully_diluted_valuation?.usd;
    circulatingSupply = circulating_supply;
    maxSupply = max_supply;

    marketCapEN = market_cap.usd;

    volumeMarketRatio = Number(totalVolumeInEN) / Number(marketCapEN);
  }
  return (
    <>
      <div className="flex gap-x-10 border-b-2 border-gray-100">
        <div className="  w-full flex   ">
          <div className=" flex  flex-col gap-y-6 gap-x-2.5 bg-gray-100 w-96 py-8 px-7">
            <div className="flex gap-x-2.5">
              <div className="image">
                <img src={pageData.image?.small || ""} alt="coin-image" />{" "}
              </div>

              <div>
                <div>
                  {pageData.id} <span>{pageData.symbol}</span>
                </div>

                <div className="flex  justify-normal  ">
                  <span className="cursor-pointer">
                    {pageData.links?.homepage?.[0] || "N/A"}{" "}
                  </span>
                  <CopyIcon />
                </div>
              </div>
            </div>

            <div className="price mt-6 ">
              price <span>(24hr)</span>{" "}
              <span> {market_data?.high_24h?.usd || "N/A"}</span>
            </div>

            <div className="border-b-2 border-gray-100 ">
              <div className="mb-2">
                Cap rank: {pageData.market_cap_rank || "N/A"}
              </div>
            </div>

            <div className="mt-4">
              <div className="historic-price-container">
                <div className="">
                  <div className="flex">
                    {" "}
                    <span></span>{" "}
                    <div className="flex">
                      {" "}
                      <div className="flex items-center ">
                        {" "}
                        <div className="  fill-gray-100 h-4 text-center flex justify-center items-stretch">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                            width="22px"
                            height="22px"
                            viewBox="-96 0 512 512"
                          >
                            <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z" />
                          </svg>
                        </div>
                        All time high
                      </div>{" "}
                      <div className="  flex justify-center text-center pl-36	">
                        (#) {market_data?.ath?.usd || "N/A"}
                      </div>
                    </div>
                  </div>
                  <div>{market_data?.ath_date?.usd || "N/A"}</div>
                </div>
              </div>
              <div className="historic-price-container">
                <div className="w-96">
                  <div className="flex">
                    {" "}
                    <span></span>{" "}
                    <div className="flex">
                      {" "}
                      <div className="flex items-center ">
                        {" "}
                        <div className=" fill-gray-100 h-4 text-center flex justify-center items-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                            width="22px"
                            height="22px"
                            viewBox="-96 0 512 512"
                          >
                            <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" />
                          </svg>
                        </div>
                        All time low
                      </div>{" "}
                      <span className="  flex justify-center text-center pl-36 	">
                        {" "}
                        ## {market_data?.atl?.usd || "N/A"}
                      </span>
                    </div>
                  </div>
                  <div>{market_data?.atl_date?.usd || "N/A"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {pageData && <CoinDescription pageData={pageData} />}
      </div>
      ‹
      <div className=" flex flex-wrap mt-8   ">
        <div className="flex flex-col  py-4    gap-y-3  bg-gray-100   w-2/5  ">
          {pageData && (
            <CoinTokenInfoCard
              value1={totalVolumeInEN}
              label1={"total volume"}
              value2={totalVolumeInEN}
              label2={"market_data"}
              value3={volumeMarketRatio}
              label3={"volumeMarketRatio"}
            />
          )}
        </div>
        <div className="flex flex-col py-4 px-2 ml-8  gap-y-3 bg-gray-100 w-2/5 ">
          {pageData && (
            <CoinTokenInfoCard
              value1={maxSupply}
              label1={"max_supply"}
              value2={circulatingSupply}
              label2={"circulating_supply"}
            />
          )}
        </div>
        <div className="flex flex-col  py-4  my-4 gap-y-3   bg-gray-100   w-2/5  ">
          {pageData && (
            <CoinTokenInfoCard
              value1={fullyDilutedValuationEN}
              label1={"fully_diluted_valuation"}
              value2={marketCapEN}
              label2={"market_cap"}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default CoinInfo;
