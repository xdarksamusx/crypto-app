"use client";

import React, { useEffect } from "react";

function Header() {
  return (
    <>
      <div>
        <div className="flex justify-center bg-blue-700 text-white text-xs font-serif space-x-4 ">
          <h5>
            Coins : <span> placeholder</span>
          </h5>
          <h5>
            Exchanges : <span> placeholder</span>
          </h5>
          <h5>
            Arrow : <span> Total marketcap</span>
          </h5>
          <h5>
            Total 24 hr volume : <span> placeholder</span>
          </h5>

          <h5>
            Bitcoin dominance : <span> placeholder bar</span>
          </h5>

          <h5>
            Ethereum dominance : <span> placeholder bar </span>
          </h5>
        </div>
      </div>
    </>
  );
}

export default Header;
