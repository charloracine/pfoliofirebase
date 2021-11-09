// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsgpYcXNHhKc0Tldy3u33fSJDZ_-PvG0Q",
  authDomain: "pfolioracc.firebaseapp.com",
  projectId: "pfolioracc",
  storageBucket: "pfolioracc.appspot.com",
  messagingSenderId: "77709709407",
  appId: "1:77709709407:web:61ea279763b3d0f62b0bea",
  measurementId: "G-B10FD71DC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app);

const analytics = getAnalytics(app);

export { db };
