const admin = require("firebase-admin");

// Make sure to replace this path with the full path to your service account JSON file
const serviceAccount = require("/Users/gus100/Desktop/crypto-app/firebase/crypto-three-firebase-adminsdk-rqz2r-cc0fa623e6.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com", // Make sure to replace with your project ID
});

const db = admin.firestore();

// Function to check if a collection has data
async function checkCollection(collectionName) {
  try {
    const snapshot = await db.collection(collectionName).get();
    if (snapshot.empty) {
      console.log(`No documents found in ${collectionName}`);
    } else {
      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    }
  } catch (error) {
    console.error("Error checking collection:", error);
  }
}

// Call the function for your collections
checkCollection("usdCoins"); // Add this to check USD data
