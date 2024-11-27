import React, { useEffect } from "react";
import CopyIcon from "./CopyIcon";
import Link from "next/link";
interface CoinDescriptionProps {
  pageData: {
    description?: {
      en: string;
    };
    links?: {
      homepage?: string[];
      blockchain_site?: string[];
    };
  };
}

const CoinDescription: React.FC<CoinDescriptionProps> = ({ pageData }) => {
  return (
    <div className="bg-gray-100 flex flex-col justify-between py-5 px-5 ">
      <div className="">
        {pageData.description?.en || "Description not available"}
      </div>
      <div className="flex gap-2 py-2">
        {pageData.links?.blockchain_site
          ?.filter((url) => url && url !== "")
          .map((url) => (
            <div className="flex bg-gray-200 py-1" key={url}>
              {url} <CopyIcon />{" "}
            </div>
          )) || <div>No blockchain site available</div>}
      </div>
    </div>
  );
};

export default CoinDescription;
