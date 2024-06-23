import axios from "axios";

export const fetchCoins = async () => {
  const response = await axios(
    `https://api.coingecko.com/api/v3/coins/markets`
  );

  return response.data;
};
