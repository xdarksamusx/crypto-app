import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CopyIcon from "./CopyIcon";
import CoinDescription from "./CoinDescription";
interface PageData {
  description?: {
    en?: string;
  };
}

interface Error {
  error?: string;
}

interface CoinId {
  coinId: string;
}

const fetchData = async (coinId: string) => {
  try {
    console.log("hi", coinId);
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const CoinInfo: React.FC<CoinId> = ({ coinId }) => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const result = await fetchData(coinId);
        if (isMounted) {
          setPageData(result);
          console.log("results", result);
        }
      } catch (error) {
        setError(error as Error);
      }
    };

    getData();

    return () => {
      isMounted = false;
    };
  }, [coinId]);

  console.log("page data object", pageData);

  return (
    <>
      <div className="flex gap-x-10">
        <div className="  w-full flex   ">
          <div className=" flex  flex-col gap-y-6 gap-x-2.5 bg-blue-500 w-96 py-8 px-7">
            <div className="flex gap-x-2.5">
              <div className="image">Image</div>

              <div>
                <div>
                  Bitcoin <span>BTC</span>
                </div>

                <div className="flex  justify-normal  ">
                  <span className="cursor-pointer">url </span>
                  <CopyIcon />
                </div>
              </div>
            </div>

            <div className="price mt-6 ">
              price <span>(24hr)</span> <span> change</span>
            </div>

            <div className="border-b-2 border-red-500 ">
              <div className="mb-2">Cap rank: rank</div>
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
                        <div className="  h-4 text-center flex justify-center items-stretch">
                          <svg
                            style={{ fill: "green" }}
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
                      <div className="  flex justify-center text-center pl-40	">
                        price
                      </div>
                    </div>
                  </div>
                  <div>date</div>
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
                        <div className="  h-4 text-center flex justify-center items-end">
                          <svg
                            style={{ fill: "red" }}
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
                      <span className="  flex justify-center text-center pl-40 	">
                        {" "}
                        price
                      </span>
                    </div>
                  </div>
                  <div>date</div>
                </div>
              </div>
            </div>
          </div>
          {/* ,........................................... */}
        </div>

        <CoinDescription pageData={pageData} />
      </div>
    </>
  );
};

export default CoinInfo;
