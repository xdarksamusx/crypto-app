import React from "react";
import CoinButton from "./CoinButton";

// data  => map these points. 3 cards

interface CardProps {
  label1: string;
  label2: string;
  label3?: string;
  value1: string | number | undefined;
  value2: string | number | undefined;
  value3?: string | number | undefined;
}

const CoinTokenInfoCard: React.FC<CardProps> = ({
  label1,
  value1,
  label2,
  value2,
  label3,
  value3,
}) => {
  return (
    <>
      <div className="px-10 py-4 flex justify-between w-7/8      ">
        <div>
          <div className=" flex items-center gap-x-3 ">
            {" "}
            <CoinButton /> <span className="">{label1} </span>
          </div>
        </div>

        <div>{value1 ? value1 : "N/A"}</div>
      </div>
      <div className="px-10 py-3 flex justify-between  w-7/8    ">
        <div>
          <div className=" flex items-center gap-x-3   ">
            {" "}
            <CoinButton /> <span>{label2} </span>
          </div>
        </div>

        <div>{value2}</div>
      </div>

      <div className="px-10 py-3 flex justify-between  w-7/8     ">
        <div>
          {label3 && (
            <div className=" flex items-center gap-x-3  ">
              {" "}
              <CoinButton /> <span>{label3} </span>
            </div>
          )}
        </div>

        <div>{value3}</div>
      </div>
    </>
  );
};

export default CoinTokenInfoCard;
