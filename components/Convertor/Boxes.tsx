import { CoinData } from "@utils/interfaces";
import { useState } from "react";
import { convertCurrency } from "@utils/conversions";

interface BoxProps extends CoinData {
  data: CoinData;
}

const Box: React.FC<BoxProps> = ({ data, input, setInput }) => {
  return (
    <>
      <div className="px-9 py-3 w-[650px] h-[200px]  bg-slate-300">
        <p className="mb-9 px-0 py-0 mx-0 my-0">You buy</p>

        <div className=" border-b-2 border-blue-200 flex justify-between py-2">
          <div className="flex">
            {" "}
            <span className="flex items-center justify-center">
              <img className="w-5 h-5" src={data.image} alt="" />
            </span>{" "}
            <p>
              {data.id} ({data.symbol})
            </p>{" "}
            <span className="flex items-center justify-center"></span>
          </div>
          <div className="amount">
            <input onChange={setInput} value={input} type="amount" />
          </div>
        </div>

        <p className="mt-5">
          1 {data.symbol.toUpperCase()} = {data.current_price}
        </p>
      </div>
    </>
  );
};
export default Box;
