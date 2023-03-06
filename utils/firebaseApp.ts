// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGZSTHmCJgtikytzY0qzI890q0hBgHbYc",
  authDomain: "weblingwelfare.firebaseapp.com",
  projectId: "weblingwelfare",
  storageBucket: "weblingwelfare.appspot.com",
  messagingSenderId: "592772593151",
  appId: "1:592772593151:web:dad0884b108f68bf3fa3ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firestoreDB = getFirestore(app);
