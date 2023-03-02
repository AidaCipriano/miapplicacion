// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyAyCu2bYJ9u3Mg25fldJ-rVz850b-ddYeg",
    authDomain: "fb-proyecto-e05ef.firebaseapp.com",
    projectId: "fb-proyecto-e05ef",
    storageBucket: "fb-proyecto-e05ef.appspot.com",
    messagingSenderId: "848190661320",
    appId: "1:848190661320:web:fb654d8e0427cfc8bc3bfd",
    databaseURL: "https://fb-proyecto-e05ef-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();   
