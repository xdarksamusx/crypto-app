"use  client";

import { useState } from "react";
import React from "react";

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  market_data: {
    current_price: {
      usd: number;
    };
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
}

interface BoxProps {
  data: CoinData;
  input: string;
  setInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Box: React.FC<BoxProps> = ({ data, input, setInput }) => {
  console.log("dataaafsdfs", data);

  return (
    <>
      <div className="px-9 py-3 w-[650px] h-[200px]  bg-slate-300">
        <p className="mb-9 px-0 py-0 mx-0 my-0">You buy</p>

        <div className=" border-b-2 border-blue-200 flex justify-between py-2">
          <div className="flex">
            {" "}
            <span className="flex items-center justify-center">
              <img className="w-5 h-5" src={data?.image?.small} alt="" />
            </span>{" "}
            <p>{/* {data.id} ({data.symbol}) */}</p>{" "}
            <span className="flex items-center justify-center"></span>
          </div>
          <div className="amount">
            <input onChange={setInput} value={input} type="amount" />
          </div>
        </div>

        <p className="mt-5">
          {/* 1 {data.symbol.toUpperCase()} = {data.market_data.current_price.usd} */}
        </p>
      </div>
    </>
  );
};
export default Box;
