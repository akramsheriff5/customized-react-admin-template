// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD77bWBuwSek_WMrNh35leKWENRMUHkOkE",
  authDomain: "reactjs-auth-seewise.firebaseapp.com",
  projectId: "reactjs-auth-seewise",
  storageBucket: "reactjs-auth-seewise.appspot.com",
  messagingSenderId: "887195713821",
  appId: "1:887195713821:web:c73b477e17f6726ca421f4",
  measurementId: "G-20TQVQ4RVC"
};

// Initialize Firebase
export const   app = initializeApp(firebaseConfig);
