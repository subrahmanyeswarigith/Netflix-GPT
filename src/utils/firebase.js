// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlgDGgfqlz16yUtuEM_a-PIJ_Z0OlqYC0",
  authDomain: "netflixgpt-6fb3d.firebaseapp.com",
  projectId: "netflixgpt-6fb3d",
  storageBucket: "netflixgpt-6fb3d.appspot.com",
  messagingSenderId: "939382475798",
  appId: "1:939382475798:web:ddfd280c17dccfbd03f937",
  measurementId: "G-WYSN8NSZR9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
