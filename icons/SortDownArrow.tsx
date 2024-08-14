import React from "react";

interface CustomSVGStyle extends React.CSSProperties {
  enableBackground?: string;
}

const SortDownArrow: React.FC = () => {
  const style: CustomSVGStyle = {
    enableBackground: "new 0 0 841.9 595.3",
  };

  return (
    <>
      <svg
        className="h-1 w-2 bg-svg-color  my-4 relative  "
        xmlns="http://www.w3.org/2000/svg"
        height="17"
        width="7"
        viewBox="0 0 56 38.75"
        fill="none"
        x="0px"
        y="0px"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.1897 1.54304C0.309378 1.25379 0.485686 0.982442 0.718619 0.745952C0.72766 0.73677 0.736777 0.727656 0.745959 0.718614C1.23235 0.239535 1.86618 -2.78707e-06 2.5 -2.73166e-06L53.0641 1.68879e-06C53.7507 1.74882e-06 54.3728 0.276829 54.8246 0.724966L54.8439 0.744377C55.078 0.981571 55.2549 1.25387 55.3749 1.54417C55.4968 1.83863 55.5641 2.16146 55.5641 2.5C55.5641 3.18665 55.2873 3.80865 54.8391 4.26047L54.8283 4.27133L29.8484 29.1901C29.7618 29.3168 29.6623 29.4373 29.5498 29.5498C28.5735 30.5261 26.9906 30.5261 26.0143 29.5498L0.733961 4.26949C0.728827 4.26436 0.723711 4.25921 0.718619 4.25404C0.485686 4.01755 0.309378 3.74621 0.1897 3.45696C0.0674653 3.16219 2.39915e-06 2.83897 2.42878e-06 2.5C2.45842e-06 2.16102 0.0674654 1.83781 0.1897 1.54304Z"
          fill="black"
        />
        <text
          x="0"
          y="46"
          fill="#000000"
          font-size="5px"
          font-weight="bold"
          font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        >
          Created by Michael
        </text>
        <text
          x="0"
          y="51"
          fill="#000000"
          font-size="5px"
          font-weight="bold"
          font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        ></text>
      </svg>
    </>
  );
};
SortDownArrow.displayName = "SortDownArrow";
export default SortDownArrow;
