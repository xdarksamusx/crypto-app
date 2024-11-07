const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("/Users/gus100/Desktop/crypto-app/firebase/crypto-proje-firebase-adminsdk-wv6g4-531d6c10f4.json"); // Update with your correct path
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com", // Update with your project ID
});

const db = admin.firestore();

// Function to view a limited set of documents from a collection
async function viewCollection(collectionName) {
  try {
    const snapshot = await db.collection(collectionName).limit(5).get(); // Fetch only 5 documents

    if (snapshot.empty) {
      console.log(`No documents found in ${collectionName}`);
    } else {
      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    }
  } catch (error) {
    console.error("Error viewing collection:", error);
  }
}

// Call the function for your collections
viewCollection("btcCoins");
viewCollection("ethCoins");
viewCollection("usdcCoins");
viewCollection("euroCoins");
viewCollection("gbpCoins");
