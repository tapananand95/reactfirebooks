import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzZ9_5z_YbD_Chwkh2p13r5RDHtn5bEN0",
  authDomain: "react-firebase-gallery-56f56.firebaseapp.com",
  projectId: "react-firebase-gallery-56f56",
  storageBucket: "react-firebase-gallery-56f56.appspot.com",
  messagingSenderId: "607573571359",
  appId: "1:607573571359:web:12ba0a191a5d17e792a22a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
