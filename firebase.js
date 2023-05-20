// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6SOhgjXJJoZM52FQhpBDNLoBaPfEbFpc",
  authDomain: "instagram-8316e.firebaseapp.com",
  projectId: "instagram-8316e",
  storageBucket: "instagram-8316e.appspot.com",
  messagingSenderId: "1079196119232",
  appId: "1:1079196119232:web:808dea77e8ed4fb56cfd25",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage}