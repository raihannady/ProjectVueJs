import { getFirestore, serverTimestamp } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXiiqyUZlMIgYg1CSP1QT2GFGG3PkRB9U",
  authDomain: "tugas-11-firebase-crud.firebaseapp.com",
  projectId: "tugas-11-firebase-crud",
  storageBucket: "tugas-11-firebase-crud.appspot.com",
  messagingSenderId: "592044126631",
  appId: "1:592044126631:web:ea982776350caa2bf34682",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const timestamp = serverTimestamp();
const auth = getAuth(app);

const db = getFirestore(app);

export { db, timestamp, auth };
