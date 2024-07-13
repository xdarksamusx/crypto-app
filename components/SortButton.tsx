import React, { useEffect, useState } from "react";
import SortUpArrow from "../icons/SortUpArrow";
import SortDownArrow from "../icons/SortUpArrow";

interface SortButtonProps {
  IconComponent: React.ComponentType<any>;
}

const SortButton: React.FC<SortButtonProps> = ({ IconComponent }) => {
  const [isVisible, setIsVisible] = useState(false);

  console.log("is it visible", isVisible);

  return (
    <>
      {IconComponent.displayName === "SortUpArrow" ? (
        <button>
          {" "}
          <IconComponent />
        </button>
      ) : (
        <button
          className=""
          onMouseEnter={() => setIsVisible(!isVisible)}
          onMouseLeave={() => setIsVisible(!isVisible)}
          style={{ width: "7px", height: "20px" }}
        >
          {isVisible && <IconComponent />}
        </button>
      )}
    </>
  );
};

export default SortButton;
