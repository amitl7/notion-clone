// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2EVRyXFHBk0pYfLuHEi-0Nfjlh5T5l4s",
  authDomain: "notion-clone-1c951.firebaseapp.com",
  projectId: "notion-clone-1c951",
  storageBucket: "notion-clone-1c951.firebasestorage.app",
  messagingSenderId: "250584231497",
  appId: "1:250584231497:web:0c102f2e24a52a73631998",
  measurementId: "G-CB0LN525YE"
};

const app = getApps().length == 0 ? initializeApp(firebaseConfig) :getApp();
const db = getFirestore(app)

export {db}

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);