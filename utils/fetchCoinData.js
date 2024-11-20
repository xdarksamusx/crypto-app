import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";

const fetchCoinData = async (currency: string): Promise<Coin[]> => {
  try {
     const collectionRef = collection(db, `${currency}Coins`);
    const querySnapshot = await getDocs(collectionRef);

    return querySnapshot.docs.map((doc) => doc.data() as Coin);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    return [];
  }
};

export default fetchCoinData;
