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
    <div>
      <div>{pageData.description?.en || "Description not available"}</div>
      <div>
        {pageData.links?.blockchain_site?.map((url) => (
          <div key={url}>{url}</div>
        )) || <div>No blockchain site available</div>}
      </div>
    </div>
  );
};

export default CoinDescription;
