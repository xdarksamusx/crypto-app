import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectCoin, selectUnit } from "../redux/features/coinSelectionSlice";

const ChartButtons: React.FC = () => {
  const units = ["1D", "7D", "14D", "1M", "3M", "1Y", "5Y"];
  const selectedCoin = useAppSelector(
    (state) => state.selectedCoin.selectedCoin
  );

  const selectedUnit = useAppSelector(
    (state) => state.selectedCoin.selectedUnit
  );

  const dispatch = useAppDispatch();

  const handleSelectedUnit = (unit: string) => {
    dispatch(selectUnit(unit));
  };

  return (
    <>
      <div className="max-w-7xl mx-auto  ">
        <div className="  h-full    flex  justify-around w-96 border-2 ">
          {units.map((unit) => (
            <button
              key={unit}
              style={{ background: `${unit === selectedUnit ? "gray" : ""}` }}
              className=" flex-grow        h-12  "
              onClick={() => handleSelectedUnit(unit)}
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
