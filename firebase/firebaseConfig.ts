import {
  collection,
  writeBatch,
  doc,
  getDoc,
  initializeFirestore,
  persistentLocalCache,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
});

// console.log("Environment variable check:", process.env.FIREBASE_API_KEY);

// console.log("Firestore initialized with offline persistence.", db);
// console.log("Firebase config:", firebaseConfig);

// console.log("Firebase API Key:", process.env.FIREBASE_API_KEY);
// console.log("Firebase Auth Domain:", process.env.FIREBASE_AUTH_DOMAIN);
// console.log("Firebase Project ID:", process.env.FIREBASE_PROJECT_ID);

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
