"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Gear from "../icons/Gear";
import ProfileIcon from "../icons/Profile";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toogleTheme } from "../redux/features/themesSlice";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import {
  setCurrency,
  setCurrencyData,
} from "../redux/features/currencySelection";

interface NavigationProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Navigation() {
  const currencyArray = ["$", "€", "£", "₿", "Ξ"];
  const [settingsDropdownVisible, setSettingsDropdownVisible] = useState(false);
  const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [changeImage, setChangeImage] = useState(false);

  const currency = useAppSelector((state) => state.currency.currency);

  const currencySymbol = useAppSelector(
    (state) => state.currency.currencySymbol
  );

  const dispatchTheme = useAppDispatch();

  const dispatchCurrency = useAppDispatch();

  const handdleThemeChange = () => {
    dispatchTheme(toogleTheme());
  };

  const handleChangeImage = () => {
    setChangeImage(!changeImage);
  };

  const handleDropDownMenu = () => {
    setAccountDropdownVisible(false);
  };


  const handleCurrencySelection = (currencySymbol: string) => {
    const currencyMap = {
      $: "usd",
      "€": "eur",
      "£": "gbp",
      "₿": "btc",
      Ξ: "eth",
    };
    const currency = currencyMap[currencySymbol];
    if (currency) {
      dispatchCurrency(selectCurrency({ currency, currencySymbol }));
    }
  };

  return (
    <div className="w-full border-b  shadow-sm  border-t relative">
      <div className="   max-w-7xl mx-auto flex justify-between items-center py-4  ">
        <div className="flex items-center">
          <span className="text-xl font-bold">LOGO</span>
        </div>
        <div className="flex h-5  space-x-8">
          <SearchBar />

          <div className="static  w-28 focus:outline-none   ">
            {" "}
            <button
              className=" border-2   bg-slate-200 transform transition-transform duration-300 ease-in-out flex items-center  justify-center focus:outline-none  h-6 w-8 hover:scale-125 "
              onClick={() => {
                handdleThemeChange();
                handleChangeImage();
              }}
            >
              {changeImage ? (
                <div className="flex justify-center items-center 	">
                  <Moon />
                </div>
              ) : (
                <div className="flex justify-start items-center  	">
                  <Sun />
                </div>
              )}
            </button>
          </div>
          <div>
            <button
              className=" border-2  bg-slate-200 transform transition-transform duration-300 ease-in-out flex items-center  justify-center focus:outline-none  h-6 w-8 hover:scale-125 "
              onMouseEnter={() => setAccountDropdownVisible(true)}
              onClick={() => handleDropDownMenu()}
            >
              <div className="w-6 h-6   flex justify-center items-center ">
                {currencySymbol}
              </div>
              {accountDropdownVisible && (
                <div className="absolute top-4  bg-dropdown-bg-color  shadow-md p-2  text-left  w-8     bg-slate-200 border-2 border-black-600  z-999">
                  <div className="flex flex-col  text-xs items-end  justify-between text-align">
                    {currencyArray.map((currencySymb) => {
                      return (
                        <p
                          key={currency}
                          onClick={() => handleCurrencySelection(currencySymb)}
                        >
                          {currencySymb}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
