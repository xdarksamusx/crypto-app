import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { createPortal } from "react-dom";
import { selectCoin, selectUnit } from "../redux/features/coinSelectionSlice";
import { formatPercentage } from "@utils/calculations";
import { TableCoinData } from "../utils/interfaces";

import { CoinData } from "../utils/interfaces"; // import { convertCurrency } from "@utils/CurrencyConversions";

interface CarouselProps {
  top20Coins: TableCoinData[];
}

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
  return (
    <>
      <button
        className=" mt-1.5  mx-3 shadow-md	 flex justify-center items-center  absolute top-[42%] left-0 translate-y-[-50%]  border-2  text-2xl cursor-pointer rounded-full p-2 z-[9999] w-9 h-9  "
        onClick={onClick}
      >
        &lt;
      </button>
      ,
    </>
  );
};

const CustomRightArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <>
      <button
        className=" mx-3   mt-1.5 flex shadow-md justify-center items-center absolute top-[42%] right-0 translate-y-[-50%] border-2 text-2xl cursor-pointer rounded-full p-2 z-[9999] w-9 h-9"
        onClick={onClick}
      >
        &gt;
      </button>
      ,
    </>
  );
};

export const Carousels: React.FC<CarouselProps> = ({ top20Coins }) => {
  const coins = useAppSelector((state) => state.selectedCoin.coins);
  const currency = useAppSelector((state) => state.currency.currency);

  const currencySymbol = useAppSelector(
    (state) => state.currency.currencySymbol
  );

  const selectedCoin = useAppSelector(
    (state) => state.selectedCoin.selectedCoin
  );

  const selectedUnit = useAppSelector(
    (state) => state.selectedCoin.selectedUnit
  );
  const dispatch = useAppDispatch();

  const handleOnClick = () => {};

  const handleSelectedCoin = (coin: CoinData) => {
    dispatch(selectCoin(coin.name.toLowerCase()));
  };

  useEffect(() => {
    if (selectedCoin === null) {
    }
  }, [selectedCoin, dispatch]);

  return (
    <div className="relative max-w-7xl mx-auto mt-12 overflow-visible z-20  text-xs  ">
      <Carousel
        transitionDuration={0}
        infinite={true}
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow onClick={handleOnClick} />}
        customRightArrow={<CustomRightArrow onClick={handleOnClick} />}
      >
        {top20Coins.map((coin: any) => (
          <div
            key={coin.id}
            className={` bg-${
              coin.id === selectedCoin ? "bg-gray-500" : "none"
            }  flex border border-blue-100 px-3 justify-center items-center py-4  hover:bg-slate-700  hover:text-white/80 `}
            onClick={() => handleSelectedCoin(coin)}
          >
            <p>
              <img className="w-8 h-8" src={`${coin.image}`} alt={coin.name} />
            </p>
            <div className="ml-2">
              <p>{coin.name}</p>
              <div className="flex">
                <p className="mr-2">
                  {" "}
                  <span>
                    {currencySymbol}
                    {coin.current_price}
                  </span>
                </p>
                <p
                  className={`${
                    coin.market_cap_change_percentage_24h > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin.market_cap_change_percentage_24h > 0 ? "▲" : "▼"}

                  {formatPercentage(coin.market_cap_change_percentage_24h)}
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
