import React from "react";

function Table() {
  console.log("Table being rendered");
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h Volume</th>
            <th>MarketCap</th>
            <th>chart</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default Table;
