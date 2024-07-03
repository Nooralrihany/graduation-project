// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkH1l-SAF8rcP9L-3s5h6iXE-ajT2jtTk",
  authDomain: "graduation-project-817fd.firebaseapp.com",
  projectId: "graduation-project-817fd",
  storageBucket: "graduation-project-817fd.appspot.com",
  messagingSenderId: "30969186280",
  appId: "1:30969186280:web:2594247ae9671328eb465d",
  measurementId: "G-TZ6Z8L6PLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, auth};