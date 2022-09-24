// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8tEgGD6zK2_lcloxsdAC8iPYh_lQct7o",
  authDomain: "bestbid-5f972.firebaseapp.com",
  projectId: "bestbid-5f972",
  storageBucket: "bestbid-5f972.appspot.com",
  messagingSenderId: "245836175850",
  appId: "1:245836175850:web:9bc722558a8811284a7a93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Firestore
const db = getFirestore();

export { auth, db };
