import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useAppSelector } from "../redux/hooks";
import { createPortal } from "react-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface CustomArrowProps {
  onClick: () => void;
}

const CustomLeftArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return createPortal(
    <button
      className="absolute top-[42%] left-[99px] translate-y-[-50%] bg-red-500 border-none text-2xl cursor-pointer rounded-full p-2 z-[9999]"
      onClick={onClick}
    >
      &lt;
    </button>,
    document.body
  );
};

const CustomRightArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return createPortal(
    <button
      className="absolute top-[42%] right-[99px] translate-y-[-50%] bg-green-500 border-none text-2xl cursor-pointer rounded-full p-2 z-[9999]"
      onClick={onClick}
    >
      &gt;
    </button>,
    document.body
  );
};

export const Carousels: React.FC = () => {
  const coins = useAppSelector((state) => state.sort.coins);

  const handleOnClick = () => {
    console.log("Arrow clicked");
  };

  return (
    <div className="relative max-w-7xl mx-auto mt-12 overflow-visible z-20">
      <Carousel
        transitionDuration={0}
        infinite={true}
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow onClick={handleOnClick} />}
        customRightArrow={<CustomRightArrow onClick={handleOnClick} />}
      >
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="flex border border-blue-200 px-3 justify-center items-center py-4"
          >
            <p>
              <img
                className="w-14 h-14"
                src={`${coin.image}`}
                alt={coin.name}
              />
            </p>
            <div className="ml-2">
              <p>{coin.name}</p>
              <div className="flex">
                <p className="mr-2">{coin.current_price}</p>
                <p style={{ color: coin.dailyColor }}>
                  {coin.market_cap_change_percentage_24h} %
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
