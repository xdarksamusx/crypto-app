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
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
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
