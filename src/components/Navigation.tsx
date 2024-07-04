"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Gear from "../icons/gear.svg";
import ProfileIcon from "../icons/profile.svg";

function Navigation() {
  const [settingsDropdownVisible, setSettingsDropdownVisible] = useState(false);
  const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);
  return (
    <div className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="  max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center">
          <span className="text-xl font-bold">LOGO</span>
        </div>
        <div className="flex h-5  space-x-8">
          <SearchBar />

          <div className="static  w-28">
            {" "}
            <button
              className="  transform transition-transform duration-300 ease-in-out flex  justify-center items-start  h-10 w-10 hover:scale-125 "
              onMouseEnter={() => setSettingsDropdownVisible(true)}
              onMouseLeave={() => setSettingsDropdownVisible(false)}
            >
              <Gear style={{ height: "15px", width: "31px" }} />
              {settingsDropdownVisible && (
                <div className="absolute top-6 right-3 bg-white  shadow-md p-2 w-56 text-left      border-2 border-black-600 ">
                  <p>hi</p>
                  <p>its</p>
                  <p>me</p>
                </div>
              )}
            </button>
          </div>
          <div>
            <button
              className="  transform transition-transform duration-300 ease-in-out flex  justify-center items-start  h-10 w-10 hover:scale-125   "
              onMouseEnter={() => setAccountDropdownVisible(true)}
              onMouseLeave={() => setAccountDropdownVisible(false)}
            >
              <ProfileIcon style={{ height: "15px", width: "31px" }} />
              {accountDropdownVisible && (
                <div className="absolute top-6 right-3 bg-white  shadow-md p-2 w-56 text-left  border-2 border-black-600  ">
                  <p>hi</p>
                  <p>its</p>
                  <p>me</p>
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
