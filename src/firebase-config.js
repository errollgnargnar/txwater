
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "waterprice-d63d6.firebaseapp.com",
  projectId: "waterprice-d63d6",
  storageBucket: "waterprice-d63d6.appspot.com",
  messagingSenderId: "999316732360",
  appId: "1:999316732360:web:0d6707f5e1a1ae3a83e8fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);