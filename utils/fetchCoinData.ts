import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

import { TableCoinData } from "@utils/interfaces";

export const transformCoinData = (data: any): TableCoinData => {
  return {
    ath: data.ath || 0,
    ath_change_percentage: data.ath_change_percentage || 0,
    ath_date: data.ath_date || "",
    atl: data.atl || 0,
    atl_change_percentage: data.atl_change_percentage || 0,
    atl_date: data.atl_date || "",
    circulating_supply: data.circulating_supply || 0,
    current_price: data.current_price || 0,
    fully_diluted_valuation: data.fully_diluted_valuation || null,
    high_24h: data.high_24h || 0,
    id: data.id || "",
    image: data.image || "",
    last_updated: data.last_updated || "",
    low_24h: data.low_24h || 0,
    market_cap: data.market_cap || 0,
    market_cap_change_24h: data.market_cap_change_24h || 0,
    market_cap_change_percentage_24h:
      data.market_cap_change_percentage_24h || 0,
    market_cap_rank: data.market_cap_rank ?? Number.MAX_SAFE_INTEGER, // Assign max rank if null
    max_supply: data.max_supply || null,
    name: data.name || "",
    price_change_24h: data.price_change_24h || 0,
    price_change_percentage_1h_in_currency:
      data.price_change_percentage_1h_in_currency || null,
    price_change_percentage_7d_in_currency:
      data.price_change_percentage_7d_in_currency || null,
    price_change_percentage_24h: data.price_change_percentage_24h || 0,
    price_change_percentage_24h_in_currency:
      data.price_change_percentage_24h_in_currency || 0,
    roi: data.roi || null,
    sparkline_in_7d: data.sparkline_in_7d || { price: [] },
    symbol: data.symbol || "",
    total_supply: data.total_supply || null,
    total_volume: data.total_volume || 0,
  };
};
const fetchCoinData = async (currency: any): Promise<TableCoinData[]> => {
  try {
    const collectionRef = collection(db, `${currency.currency}Coins`);
    const querySnapshot = await getDocs(collectionRef);

    const coins = querySnapshot.docs.map(
      (doc) => transformCoinData(doc.data()) // Transform here
    );

    const sortedData = coins.sort((a, b) => {
      const rankA = a.market_cap_rank ?? Number.MAX_SAFE_INTEGER;
      const rankB = b.market_cap_rank ?? Number.MAX_SAFE_INTEGER;
      return rankA - rankB;
    });

    return sortedData;
  } catch (error) {
    console.error("Error fetching coin data:", error);
    return [];
  }
};

export default fetchCoinData;
