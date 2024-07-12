import React from "react";

const Star: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    className="w-4 h-4 flex items-center "
    enable-background="new 0 0 50 50"
    height="50px"
    width="50px"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 50 50"
  >
    <rect fill="none" />
    <polygon
      fill="none"
      points="25,3.553 30.695,18.321 46.5,19.173   34.214,29.152 38.287,44.447 25,35.848 11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321 "
      stroke="#000000"
      stroke-miterlimit="10"
      stroke-width="2"
    />
  </svg>
);

export default Star;
