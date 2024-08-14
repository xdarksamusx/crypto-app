import React, { useState } from "react";
import SortUpArrow from "../icons/SortUpArrow";
import SortDownArrow from "../icons/SortDownArrow";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  sortByIncreasing,
  sortByDecreasing,
  setSortKey,
  updateColors,
} from "../redux/features/sortSlice";
interface SortButtonProps {
  IconComponent: React.ComponentType<any>;

  sortKey: string;
}

const SortButton: React.FC<SortButtonProps> = ({ sortKey, IconComponent }) => {
  const dispatch = useAppDispatch();
  const currentSortKey = useAppSelector((state) => state.sort.sortKey);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isUp, setIsUp] = useState(true);

  const handleClick = () => {
    setIsClicked(true);
    setIsUp(!isUp);
    setIsVisible(true);
    dispatch(setSortKey(sortKey));

    if (isUp) {
      dispatch(updateColors());
      dispatch(sortByIncreasing());
    } else {
      dispatch(sortByDecreasing());
      dispatch(updateColors());
    }
  };

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsVisible(false);
    }
  };

  return (
    <>
      {!isClicked ? (
        <button
          className="w-2 "
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isVisible && <IconComponent />}
        </button>
      ) : (
        <button className="w-2 " onClick={handleClick}>
          {" "}
          {isUp ? <SortUpArrow /> : <SortDownArrow />}
        </button>
      )}
    </>
  );
};

export default SortButton;
