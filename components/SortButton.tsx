import React, { useState } from "react";
import SortUpArrow from "../icons/SortUpArrow";
import SortDownArrow from "../icons/SortDownArrow";

interface SortButtonProps {
  IconComponent: React.ComponentType<any>;
  handleSortByDescending: () => void;
  handleSortByAscending: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({
  IconComponent,
  handleSortByDescending,
  handleSortByAscending,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isUp, setIsUp] = useState(true);

  const handleClick = () => {
    setIsClicked(true);
    setIsUp(!isUp);
    setIsVisible(true);
    if (isUp) {
      handleSortByAscending();
    } else {
      handleSortByDescending();
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
          className=""
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: "7px", height: "20px" }}
        >
          {isVisible && <IconComponent />}
        </button>
      ) : (
        <button onClick={handleClick} style={{ width: "7px", height: "20px" }}>
          {" "}
          {isUp ? <SortUpArrow /> : <SortDownArrow />}
        </button>
      )}
    </>
  );
};

export default SortButton;
