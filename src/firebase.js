import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2lEYLtg9hHkytda9yBfLdNf_yTUV4Xfs",
  authDomain: "challange-c663f.firebaseapp.com",
  projectId: "challange-c663f",
  storageBucket: "challange-c663f.appspot.com",
  messagingSenderId: "669247982468",
  appId: "1:669247982468:web:8d8caabd0b2a58649eebd1",
  measurementId: "G-5HME36WRP8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
