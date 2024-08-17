import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectCoin, selectUnit } from "../redux/features/coinSelectionSlice";

interface ChartButtonsProps {
  selectedUnit: string;
  handleSelectedUnit: (unit: string) => void;
}

const ChartButtons: React.FC<ChartButtonsProps> = ({
  handleSelectedUnit,
  selectedUnit,
}) => {
  const units = ["1D", "7D", "14D", "1M", "3M", "1Y", "5Y"];

  return (
    <>
      <div className="max-w-7xl mx-auto  ">
        <div className="  h-full    flex  justify-around w-96 border-2 ">
          {units.map((unit) => (
            <button
              onClick={() => handleSelectedUnit(unit)}
              key={unit}
              className={`flex-grow h-12 ${
                unit === selectedUnit ? "bg-gray-500" : ""
              }`}
            >
              {unit}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChartButtons;
