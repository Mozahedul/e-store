import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGDMT1UkvgWhLLlkv3-mi4MPo-CMLW9qM",
  authDomain: "estore-mern.firebaseapp.com",
  projectId: "estore-mern",
  storageBucket: "estore-mern.appspot.com",
  messagingSenderId: "458708526159",
  appId: "1:458708526159:web:eba165918ae9214380363a",
  measurementId: "G-1PYZWPVRYD",
};

// Initialize firebase app
firebase.initializeApp(firebaseConfig);

// authenticate user to our app
export const auth = firebase.auth();

// To get google's user authentication credentials i.e; user's name, email
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
