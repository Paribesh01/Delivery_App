// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKy9xK29e_IFpuwilbz2kh4qOlcDxOwqI",
  authDomain: "ecom-2a9ec.firebaseapp.com",
  projectId: "ecom-2a9ec",
  storageBucket: "ecom-2a9ec.appspot.com",
  messagingSenderId: "840130887864",
  appId: "1:840130887864:web:f19a3ed66bbf4d9cb7744d",
  measurementId: "G-M9E9D7B1RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
export{auth,db}