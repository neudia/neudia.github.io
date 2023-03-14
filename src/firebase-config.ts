import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDhIQJRDjKsZuBLIHS9z8Nh854Ajdjmay8",
  authDomain: "neudia.firebaseapp.com",
  projectId: "neudia",
  storageBucket: "neudia.appspot.com",
  messagingSenderId: "1064530947505",
  appId: "1:1064530947505:web:2af343302dc8343d41a190",
};

const app = firebase.initializeApp(config);
export const db = getFirestore(app);
