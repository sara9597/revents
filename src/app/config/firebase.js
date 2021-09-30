import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCNxybeRu-TFSYVDDnjZ2z7Ld8tp0_yuI8",
  authDomain: "revents-327509.firebaseapp.com",
  projectId: "revents-327509",
  storageBucket: "revents-327509.appspot.com",
  messagingSenderId: "281233292828",
  appId: "1:281233292828:web:17988c4964d9653359e9d9",
  measurementId: "G-3Q2CPCWK79"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
