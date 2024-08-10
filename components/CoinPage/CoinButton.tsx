import React, { useEffect } from "react";

const CoinButton = () => {
  return (
    <>
      <div className="circle-container">
        <div className="flex justify-center items-center bg-blue-950 h-6 w-6">
          <svg width="17px" height="17px" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12H20M12 4V20"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default CoinButton;
