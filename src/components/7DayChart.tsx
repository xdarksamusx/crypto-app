import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
    {
      params: {
        start: 1,
        limit: 20,
        sort: "market_cap",
        convert: "USD",
      },
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY,
        "Cache-Control": "no-cache",
        "User-Agent": "axios/1.7.2",
        Accept: "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    }
  );

  const { data } = response;
};

function Chart() {
  return <></>;
}

export default Chart;
