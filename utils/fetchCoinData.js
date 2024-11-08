// src/utils/fetchCoinData.js
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig"; // Adjust the path to your firebaseConfig file

const fetchCoinData = async (currency) => {
  try {
    console.log("currency", currency);
    const collectionRef = collection(db, `${currency.currency}Coins`); // Your collection name
    const querySnapshot = await getDocs(collectionRef);

    // Extract and log the data
    const coins = querySnapshot.docs.map((doc) => doc.data());
    console.log(
      "Before sorting:",
      coins.map((coin) => coin.market_cap_rank)
    );

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
    console.error("Error fetching coin data:", error);
    return [];
  }
};

export default fetchCoinData;
