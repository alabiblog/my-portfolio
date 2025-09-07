// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiPLFe6TdGWfW4MTnvcLGZDF12c9nQey4",
  authDomain: "my-portfolio-7f69e.firebaseapp.com",
  projectId: "my-portfolio-7f69e",
  storageBucket: "my-portfolio-7f69e.firebasestorage.app",
  messagingSenderId: "327384939744",
  appId: "1:327384939744:web:009a5dfc778a0814c06485"
};

// Initialize Firebase
const app = getApps().length == 0 ?  initializeApp(firebaseConfig): getApp;
const db = getFirestore(app);
const storage = getStorage(app);

export{db,storage}
