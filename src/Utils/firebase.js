// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Tw6-UduCH7RJG2-la4ZhmfvZA1oDZq0",
  authDomain: "finalswiggyclone.firebaseapp.com",
  projectId: "finalswiggyclone",
  storageBucket: "finalswiggyclone.appspot.com",
  messagingSenderId: "1036066263451",
  appId: "1:1036066263451:web:b736b43026bcd4c716d13e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth()