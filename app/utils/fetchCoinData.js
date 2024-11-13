// src/utils/fetchCoinData.js
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig"; // Adjust the path to your firebaseConfig file

const fetchCoinData = async (currency) => {
  try {
    // Check and log the currency object before processing
    if (!currency || !currency.currency) {
      console.error("Invalid currency object:", currency);
      return [];
    }

    const sanitizedCurrency = currency.currency.trim();
    if (!sanitizedCurrency) {
      console.error(
        "Sanitized currency is empty after trimming:",
        currency.currency
      );
      return [];
    }

    console.log(
      "Collection path before creation:",
      `${sanitizedCurrency}Coins`
    );

    // Validate that the collection name is alphanumeric (with underscores or hyphens allowed)
    if (!sanitizedCurrency.match(/^[a-zA-Z0-9_-]+$/)) {
      console.error("Invalid sanitized currency format:", sanitizedCurrency);
      return [];
    }

    // Construct the collection reference and fetch documents
    const collectionRef = collection(db, `${sanitizedCurrency}Coins`);
    console.log("coleection ref", collectionRef);
    const querySnapshot = await getDocs(collectionRef);
    console.log("query snap shot", querySnapshot);

    // Extract and log the data
    const coins = querySnapshot.docs.map((doc) => doc.data());
    console.log(
      "Before sorting:",
      coins.map((coin) => coin.market_cap_rank)
    );

    // Sort the coins based on market cap rank
    const sortedData = coins.sort((a, b) => {
      if (a.market_cap_rank === null) return 1;
      if (b.market_cap_rank === null) return -1;
      return a.market_cap_rank - b.market_cap_rank;
    });

    console.log(
      "After sorting:",
      sortedData.map((coin) => coin.market_cap_rank)
    );
    return sortedData;
  } catch (error) {
    // Improved error logging for better debugging
    console.error("Error fetching coin data:", error.message, error.stack);
    return [];
  }
};

export default fetchCoinData;
