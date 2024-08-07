"use client";

import { useEffect } from "react";
import axios from "axios";

const fetchData = async (coinId: string) => {
  console.log("hi", coinId);
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${coinId}`
  );
  return data;
};

const Page = ({ params }: { params: { coinId: string } }) => {
  const { coinId } = params;
  try {
    useEffect(() => {
      const data = fetchData(coinId);
      console.log(data);
    }, [params]);

    return <div>me hi</div>;
  } catch (error) {
    console.log("error", error);
  }
};

export default Page;
