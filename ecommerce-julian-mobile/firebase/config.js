
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKIPQue1uBMBsCFeZITSZ3OYnor95Xf_U",
  authDomain: "curso-react-924db.firebaseapp.com",
  projectId: "curso-react-924db",
  storageBucket: "curso-react-924db.appspot.com",
  messagingSenderId: "810586020452",
  appId: "1:810586020452:web:04e75383f01d7968f85d71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);