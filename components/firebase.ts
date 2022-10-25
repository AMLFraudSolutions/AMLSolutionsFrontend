import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "Test", // Auth / General Use
  authDomain: "YOUR_APP.firebaseapp.com", // Auth with popup/redirect
  databaseURL: "https://YOUR_APP.firebaseio.com", // Realtime Database
  storageBucket: "YOUR_APP.appspot.com", // Storage
  messagingSenderId: "123456789",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
