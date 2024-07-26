import React, { useEffect, useState } from "react";

const ChartButtons: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto  ">
        <div className="  h-full    flex  justify-around w-96 border-2 ">
          <button className=" flex-grow    hover:bg-slate-700  hover:text-white/80   h-12  ">
            1D
          </button>
          <button className=" flex-grow hover:bg-slate-700  hover:text-white/80      h-12  ">
            7D
          </button>
          <button className=" flex-grow   hover:bg-slate-700  hover:text-white/80    h-12  ">
            14D
          </button>
          <button className=" flex-grow  hover:bg-slate-700  hover:text-white/80     h-12  ">
            1M
          </button>
          <button className=" flex-grow  hover:bg-slate-700  hover:text-white/80     h-12  ">
            3M
          </button>
          <button className=" flex-grow  hover:bg-slate-700   hover:text-white/80    h-12  ">
            1Y
          </button>
          <button className=" flex-grow  hover:bg-slate-700  hover:text-white/80     h-12  ">
            5Y
          </button>
        </div>
      </div>
    </>
  );
};

export default ChartButtons;
