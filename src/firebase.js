// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-v2-d1f66.firebaseapp.com",
  projectId: "x-next-v2-d1f66",
  storageBucket: "x-next-v2-d1f66.appspot.com",
  messagingSenderId: "113939245183",
  appId: "1:113939245183:web:0283ffe366d0fef244b74a",
  measurementId: "G-BRZM9EJBVV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);