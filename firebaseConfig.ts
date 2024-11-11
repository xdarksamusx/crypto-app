import {
  collection,
  writeBatch,
  doc,
  getDoc,
  initializeFirestore,
  persistentLocalCache,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import coinData from "/Users/gus100/Desktop/data/coinData copy.json";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh6v9mv7JSN3c4q-pLTh3Bz7elJpXnRKE",
  authDomain: "crypto-proje.firebaseapp.com",
  projectId: "crypto-proje",
  storageBucket: "crypto-proje.firebasestorage.app",
  messagingSenderId: "578800292022",
  appId: "1:578800292022:web:91cac9a08bbc5c4e765617",
  measurementId: "G-1VJBRDX9PY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with offline persistence
const db = initializeFirestore(app, {
  localCache: persistentLocalCache(), // Enables IndexedDB persistence by default
});

// console.log("Firestore initialized with offline persistence.");

// const storeAllCurrencyData = async () => {
//   const currencies: Array<keyof CoinData> = ["usd"];
//   const BATCH_SIZE = 500; // Firestore limit for batch size

//   try {
//     for (const currency of currencies) {
//       const coins = coinData[currency];
//       console.log("checking currency", currency);
//       for (let i = 0; i < coins.length; i += BATCH_SIZE) {
//         const batch = writeBatch(db);
//         const chunk = coins.slice(i, i + BATCH_SIZE);

//         for (const coin of chunk) {
//           const docRef = doc(collection(db, `${currency}Coins`), coin.id);
//           const existingDoc = await getDoc(docRef);

//           if (!existingDoc.exists()) {
//             batch.set(docRef, coin); // Only set if the document does not exist
//           }
//         }

//         await batch.commit();
//         console.log(
//           `Batch for ${currency} from ${i} to ${i + BATCH_SIZE} committed.`
//         );
//         await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
//       }
//     }
//     console.log("All currency data successfully uploaded to Firestore!");
//   } catch (error) {
//     console.error("Error uploading data:", error);
//   }
// };

// storeAllCurrencyData();

export default db;
