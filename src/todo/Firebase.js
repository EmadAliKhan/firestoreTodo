// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNWL0cRqftKFYa1zFo8gWFndqsY1DR49c",
  authDomain: "firestore-7ac6c.firebaseapp.com",
  projectId: "firestore-7ac6c",
  storageBucket: "firestore-7ac6c.appspot.com",
  messagingSenderId: "861204202414",
  appId: "1:861204202414:web:e2cadeb511b4de6b9ffe3f",
  measurementId: "G-C00L8RRVD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
    db
}