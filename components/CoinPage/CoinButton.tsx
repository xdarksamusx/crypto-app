import React, { useEffect } from "react";

const CoinButton = () => {
  return (
    <>
      <div className="circle-container">
        <div className="flex justify-center rounded-full  items-center bg-red-500 h-4 w-4">
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
