// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwx8P979ZrxjmEe4rlx15zBnn2X_J-Mbo",
  authDomain: "chat-app-42c59.firebaseapp.com",
  projectId: "chat-app-42c59",
  storageBucket: "chat-app-42c59.appspot.com",
  messagingSenderId: "178225484748",
  appId: "1:178225484748:web:a14fdace4d301233aa8369",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
