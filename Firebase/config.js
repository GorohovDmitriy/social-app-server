const { initializeApp } = require("firebase/app");
const { getFirestore, collection } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BYCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.MESSAGING_SENDER_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const Users = collection(db, "users");

module.exports = {
  Users,
};
