"use client";

import { useEffect, useState } from "react";
import axios from "axios";

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

  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);

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
        setError(error);
      }
    };

    getData();

    return () => {
      isMounted = false;
    };
  }, [coinId]);

  return (
    <>
      <div>me hi</div>

      {pageData && <div>{pageData.description?.en}</div>}
    </>
  );
};

export default Page;
