"use client";

import React from "react";

function Header() {
  const classes = "w-full bg-blue-700 text-white text-xs font-medium";

  return (
    <div className="w-full bg-blue-700 text-white text-xs font-medium">
      <div className="max-w-7xl mx-auto flex justify-between py-4 px-4 sm:px-6 lg:px-8 space-x-4">
        <h5 className="flex items-center space-x-4">
          <span>Coins: placeholder</span>
          <span>Exchanges: placeholder</span>
          <span>Arrow: Total marketcap</span>
          <span>Total 24 hr volume: placeholder</span>
          <span>Bitcoin dominance: placeholder bar</span>
          <span>Ethereum dominance: placeholder bar</span>
        </h5>
      </div>
    </div>
  );
}

export default Header;
