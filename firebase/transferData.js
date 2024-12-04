// const admin = require("firebase-admin");

//  const serviceAccountSource = require("/Users/gus100/Desktop/crypto-app/firebase/crypto-three-firebase-adminsdk-rqz2r-cc0fa623e6.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccountSource),
//   databaseURL: "https://your-source-project.firebaseio.com",
// });

// const sourceDb = admin.firestore();

//  const serviceAccountDestination = require("/Users/gus100/Desktop/crypto-app/firebase/crypto-three-firebase-adminsdk-rqz2r-cc0fa623e6.json");
// const destinationApp = admin.initializeApp(
//   {
//     credential: admin.credential.cert(serviceAccountDestination),
//     databaseURL: "https://your-destination-project.firebaseio.com",
//   },
//   "destination"
// );

// const destinationDb = admin.firestore(destinationApp);

//  async function transferCollection(collectionName) {
//   try {
//     const snapshot = await sourceDb.collection(collectionName).get();
//     if (snapshot.empty) {
//       console.log(`No documents found in ${collectionName}`);
//       return;
//     }
//     snapshot.forEach((doc) => {
//       console.log(`Transferring document with ID: ${doc.id}`);
//       destinationDb
//         .collection(collectionName)
//         .doc(doc.id)
//         .set(doc.data())
//         .then(() => console.log(`Document ${doc.id} transferred successfully`))
//         .catch((error) =>
//           console.error(`Error transferring document ${doc.id}:`, error)
//         );
//     });

//     console.log(`Data transfer for ${collectionName} complete`);
//   } catch (error) {
//     console.error("Error transferring data:", error);
//   }
// }

//  transferCollection("btcCoins");
// transferCollection("ethCoins");
