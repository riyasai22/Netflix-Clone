import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnmfgYzbg9B4TxOC8xfeQFDyemnri3Na4",
  authDomain: "react-netflix-clone-d66e9.firebaseapp.com",
  projectId: "react-netflix-clone-d66e9",
  storageBucket: "react-netflix-clone-d66e9.appspot.com",
  messagingSenderId: "283023945079",
  appId: "1:283023945079:web:12bfc335a4bf235eb04572",
  measurementId: "G-DS493QFH29",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
