"use client";

import React from "react";
import SearchBar from "./SearchBar";
import Gear from "../icons/gear.svg";

function Navigation() {
  return (
    <div className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center">
          <span className="text-xl font-bold">LOGO</span>
        </div>
        <div className="flex space-x-8">
          <SearchBar />

          <div>
            {" "}
            <button>
              <Gear />{" "}
            </button>
          </div>
          <div>
            <button>profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
