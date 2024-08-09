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
                <span className="flex    items-center cursor-pointer px-2  ">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    height="15px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {" "}
                    <path
                      d="M6.59961 11.3974C6.59961 8.67119 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C17.9549 5.61426 19.3125 5.61426 20.1561 6.46118C20.9996 7.3081 20.9996 8.6712 20.9996 11.3974V16.2167C20.9996 18.9429 20.9996 20.306 20.1561 21.1529C19.3125 21.9998 17.9549 21.9998 15.2396 21.9998H12.3596C9.64432 21.9998 8.28667 21.9998 7.44314 21.1529C6.59961 20.306 6.59961 18.9429 6.59961 16.2167V11.3974Z"
                      fill="#1C274C"
                    />{" "}
                    <path
                      opacity="0.5"
                      d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V12C3 15.7712 3 17.6569 4.17157 18.8284C4.78913 19.446 5.6051 19.738 6.79105 19.8761C6.59961 19.0353 6.59961 17.8796 6.59961 16.2167V11.3974C6.59961 8.6712 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C16.8915 5.61426 18.0409 5.61426 18.8777 5.80494C18.7403 4.61146 18.4484 3.79154 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157Z"
                      fill="#1C274C"
                    />{" "}
                  </svg>
                </span>{" "}
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

      {/* {pageData && <div>{pageData.description?.en}</div>} */}
    </>
  );
};

export default Page;
