import React, { useEffect, useState } from "react";
import SortUpArrow from "../icons/SortUpArrow";
import SortDownArrow from "../icons/SortUpArrow";

interface SortButtonProps {
  IconComponent: React.ComponentType<any>;
}

const SortButton: React.FC<SortButtonProps> = ({ IconComponent }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button
      // onMouseEnter={() => setIsVisible(true)}
      // onMouseLeave={() => setIsVisible(false)}
      >
        <IconComponent />
      </button>
    </>
  );
};

export default SortButton;
