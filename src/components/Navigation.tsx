"use client";

import React from "react";

function Navigation() {
  return (
    <div className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center">
          <span className="text-xl font-bold">LOGO</span>
        </div>
        <div className="flex space-x-8">
          <div>Coins</div>
          <div>Exchanges</div>
          <div>Market Cap</div>
          <div>24h Vol</div>
          <div>Dominance</div>
          <div>Search</div>
          <div>Profile</div>
          <div>Account</div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
