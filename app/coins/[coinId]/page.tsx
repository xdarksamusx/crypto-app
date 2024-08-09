"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SortUpArrow from "../../../icons/SortUpArrow";

interface PageData {
  description?: {
    en?: string;
  };
}

interface Error {
  error?: string;
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

const Page = ({ params }: { params: { coinId: string } }) => {
  const { coinId } = params;

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

  return (
    <>
      <div className="flex w-full   ">
        <div className="gap-x-2.5 bg-blue-300 w-96">
          <div className="flex gap-x-2.5">
            <div className="image">Image</div>

            <div>
              <div>
                Bitcoin <span>BTC</span>
              </div>

              <div>url</div>
            </div>
          </div>

          <div class="price">
            price <span>(24hr)</span> <span> change</span>
          </div>

          <div>
            Cap rank: <span>rank</span>
          </div>

          <div className="data-container">
            <div className="historic-price-container">
              <div className="price-ath-container">
                <div className="flex">
                  {" "}
                  <span></span>{" "}
                  <div className="flex">
                    {" "}
                    <span className="flex items-center ">
                      {" "}
                      <div className="  h-2 text-center flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                          width="18px"
                          height="18px"
                          viewBox="-96 0 512 512"
                        >
                          <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z" />
                        </svg>
                      </div>
                      All time high
                    </span>{" "}
                    <span className="pl-36	">price</span>
                  </div>
                </div>
                <div>date</div>
              </div>
            </div>
          </div>
        </div>
        {/* ,........................................... */}

        <div className="gap-x-2.5 bg-green-300 w-96">
          <div className="flex gap-x-2.5">
            <div className="image">Image</div>

            <div>
              <div>
                Bitcoin <span>BTC</span>
              </div>

              <div>url</div>
            </div>
          </div>

          <div class="price">
            price <span>(24hr)</span> <span> change</span>
          </div>

          <div>
            Cap rank: <span>rank</span>
          </div>

          <div className="data-container">
            <div className="historic-price-container">
              <div className="price-ath-container">
                <div className="flex">
                  {" "}
                  <span></span>{" "}
                  <div className="flex">
                    {" "}
                    <span className="flex items-center ">
                      {" "}
                      <div className="  h-6 text-center flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                          width="18px"
                          height="18px"
                          viewBox="-96 0 512 512"
                        >
                          <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" />
                        </svg>{" "}
                      </div>
                      All time Low
                    </span>{" "}
                    <span className="pl-36	">price</span>
                  </div>
                </div>
                <div>date</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {pageData && <div>{pageData.description?.en}</div>} */}
    </>
  );
};

export default Page;
