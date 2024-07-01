import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDxfUjjtzUVnbcScT512y3_1v2bjMwyYTo",
    authDomain: "petfinder-424117.firebaseapp.com",
    projectId: "petfinder-424117",
    storageBucket: "petfinder-424117.appspot.com",
    messagingSenderId: "991197753755",
    appId: "1:991197753755:web:e8dd53b5d0d443c7ae713e",
    measurementId: "G-VL1Q4RP904"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};
