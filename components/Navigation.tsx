"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Gear from "../icons/Gear";
import ProfileIcon from "../icons/Profile";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toogleTheme } from "../redux/features/themesSlice";

interface NavigationProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function Navigation({ onClick }: NavigationProps) {
  const [settingsDropdownVisible, setSettingsDropdownVisible] = useState(false);
  const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);
  return (
    <div className="w-full border-b  shadow-sm  border-t">
      <div className="   max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center">
          <span className="text-xl font-bold">LOGO</span>
        </div>
        <div className="flex h-5  space-x-8">
          <SearchBar />

          <div className="static  w-28 focus:outline-none  ">
            {" "}
            <button
              className=" border-2   transform transition-transform duration-300 ease-in-out flex items-center  justify-center focus:outline-none  h-6 w-8 hover:scale-125 "
              onMouseEnter={() => setSettingsDropdownVisible(true)}
              onMouseLeave={() => setSettingsDropdownVisible(false)}
            >
              <div className="flex justify-start pr-3	">
                <Gear />
              </div>
              {settingsDropdownVisible && (
                <div
                  style={{
                    backgroundColor: "var(--dropdown-bg-color)",
                    color: "var(--dropdown-text-color)",
                  }}
                  className="absolute top-6 right-3   shadow-md p-2 w-56 text-left      border-2 border-black-600 "
                >
                  <div className="flex  text-xs items-center  justify-between text-align">
                    {" "}
                    <div className="px-0 py-0 mx-0 my-0 ">Language</div>{" "}
                    <div className="px-0 py-0 mx-0 my-0 text-left ">
                      {" "}
                      Selected Language
                    </div>{" "}
                  </div>
                  <div className="flex justify-between  text-xs items-center  ">
                    {" "}
                    <div className="px-0 py-0 mx-0 my-0 ">Currency</div>{" "}
                    <div className="px-0 py-0 mx-0 my-0 text-left ">
                      {" "}
                      Selected Currency
                    </div>{" "}
                  </div>
                  <div className="flex  text-xs  justify-between   items-center ">
                    {" "}
                    <div className="px-0 py-0 mx-0 my-0 "> Dark Mode</div>{" "}
                    <div
                      className="px-0 py-0 mx-0 my-0 text-left "
                      onClick={onClick}
                    >
                      {" "}
                      Selected Mode
                    </div>{" "}
                  </div>
                </div>
              )}
            </button>
          </div>
          <div>
            <button
              className=" border-2   transform transition-transform duration-300 ease-in-out flex items-center  justify-center focus:outline-none  h-6 w-8 hover:scale-125 "
              onMouseEnter={() => setAccountDropdownVisible(true)}
              onMouseLeave={() => setAccountDropdownVisible(false)}
            >
              <ProfileIcon />
              {accountDropdownVisible && (
                <div
                  style={{
                    backgroundColor: "var(--dropdown-bg-color)",
                    color: "var(--dropdown-text-color)",
                  }}
                  className="absolute top-6 right-3   shadow-md p-2 w-56 text-left      border-2 border-black-600 "
                >
                  <div className="flex  text-xs items-center  justify-between text-align">
                    {" "}
                    <div className="px-0 py-0 mx-0 my-0 ">Language</div>{" "}
                    <div className="px-0 py-0 mx-0 my-0 text-left ">
                      {" "}
                      Selected Language
                    </div>{" "}
                  </div>
                  <div className="flex justify-between  text-xs items-center  ">
                    {" "}
                    <div className="px-0 py-0 mx-0 my-0 ">Currency</div>{" "}
                    <div className="px-0 py-0 mx-0 my-0 text-left ">
                      {" "}
                      Selected Currency
                    </div>{" "}
                  </div>
                  <div className="flex  text-xs  justify-between   items-center ">
                    {" "}
                    <div className="px-0 py-0 mx-0 my-0 "> Dark Mode</div>{" "}
                    <div
                      className="px-0 py-0 mx-0 my-0 text-left "
                      onClick={onClick}
                    >
                      {" "}
                      Selected Mode
                    </div>{" "}
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
