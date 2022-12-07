// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: "wizarding-duel.firebaseapp.com",
  projectId: "wizarding-duel",
  storageBucket: "wizarding-duel.appspot.com",
  messagingSenderId: "100857084277",
  appId: "1:100857084277:web:a357da3585e57af1c8fb3c",
  measurementId: "G-QV8053RRV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };