import React from "react";

interface CustomSVGStyle extends React.CSSProperties {
  enableBackground?: string;
}

interface DropDownArrow {
  isOpen: boolean;
  showList: boolean;

  setIsOpen: (value: boolean) => void;
  setShowList: (value: boolean) => void;
}

const DropDownArrow: React.FC<DropDownArrow> = ({
  isOpen,
  setIsOpen,
  setShowList,
  showList,
}) => {
  const style: CustomSVGStyle = {
    enableBackground: "new 0 0 841.9 595.3",
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    setShowList(!showList);
  };
  return (
    <>
      <div
        className={`arrow ${isOpen ? "block" : "block"}`}
        onClick={() => handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};
export default DropDownArrow;
