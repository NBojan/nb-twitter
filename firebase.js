import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
  authDomain: "twitter-clone-bf6ea.firebaseapp.com",
  projectId: "twitter-clone-bf6ea",
  storageBucket: "twitter-clone-bf6ea.appspot.com",
  messagingSenderId: "798604863934",
  appId: "1:798604863934:web:d2740b91593eca43bfb1ef"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { db, storage }