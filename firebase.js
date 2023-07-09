import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC1DOduCqXfuF6YlDVyFDMMEgWEgxt2MtQ",
  authDomain: "cryptowallet-9da1d.firebaseapp.com",
  projectId: "cryptowallet-9da1d",
  storageBucket: "cryptowallet-9da1d.appspot.com",
  messagingSenderId: "839176772710",
  appId: "1:839176772710:web:cc7f27813bf79aac92a1a7"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db,auth}