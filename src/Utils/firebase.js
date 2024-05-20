
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM3TdcPp6s13iaki2rWPlT-46OxamW8aU",
  authDomain: "swiggyclone1.firebaseapp.com",
  projectId: "swiggyclone1",
  storageBucket: "swiggyclone1.appspot.com",
  messagingSenderId: "1097147844132",
  appId: "1:1097147844132:web:01369f64ad2cd752fbfab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
