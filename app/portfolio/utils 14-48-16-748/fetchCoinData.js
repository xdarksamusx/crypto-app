import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const fetchCoinData = async (currency) => {
  try {
    if (!currency || !currency.currency) {
      console.error("Invalid currency object:", currency);
      return [];
    }

    const sanitizedCurrency = currency.currency.trim();
    if (!sanitizedCurrency) {
      return [];
    }

    if (!sanitizedCurrency.match(/^[a-zA-Z0-9_-]+$/)) {
      return [];
    }

    const collectionRef = collection(db, `${sanitizedCurrency}Coins`);
    const querySnapshot = await getDocs(collectionRef);

    const coins = querySnapshot.docs.map((doc) => doc.data());

    const sortedData = coins.sort((a, b) => {
      if (a.market_cap_rank === null) return 1;
      if (b.market_cap_rank === null) return -1;
      return a.market_cap_rank - b.market_cap_rank;
    });

    return sortedData;
  } catch (error) {
    console.error("Error fetching coin data:", error.message, error.stack);
    return [];
  }
};

export default fetchCoinData;
