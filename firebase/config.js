const { initializeApp } = require("firebase/app");
const { getFirestore, collection } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCUikEk7-OysdR0q_Kv702LR6sOjCfTfFE",
  authDomain: "social-app-948ff.firebaseapp.com",
  projectId: "social-app-948ff",
  storageBucket: "social-app-948ff.appspot.com",
  messagingSenderId: "914339803605",
  appId: "1:914339803605:web:3b8a7079268227dd788d5c",
  measurementId: "G-XNTRERTWLD",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const Users = collection(db, "users");

module.exports = Users;
