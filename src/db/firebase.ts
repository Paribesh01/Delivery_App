// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQj7DEdRi5iI_jFq15MuOpTOFf2j4ACoU",
  authDomain: "project-a3f53.firebaseapp.com",
  projectId: "project-a3f53",
  storageBucket: "project-a3f53.appspot.com",
  messagingSenderId: "936785417325",
  appId: "1:936785417325:web:72339239f0c7e3a1359b64",
  measurementId: "G-FTGS3EEZ2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);