import React, { useEffect } from "react";
import CopyIcon from "./CopyIcon";
import Link from "next/link";

interface PageData {
  pageData: {
    description: {
      en: string;
    };
  };
}

const CoinDescription: React.FC<PageData> = ({ pageData }) => {
  return (
    <>
      <div>
        <div className="text-sm">{pageData.description.en}</div>
        <div className="flex mt-8  gap-x-10">
          {" "}
          <span className="flex items-center justify-center">
            {" "}
            url
            <CopyIcon />
          </span>
          <span className="flex items-center justify-center">
            url <CopyIcon />
          </span>
          <span className="flex items-center justify-center">
            {" "}
            url
            <CopyIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default CoinDescription;
