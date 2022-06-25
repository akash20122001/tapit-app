// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiw_EKTgpS8y44tiZZ-mVNbkO8NRfAUi8",
  authDomain: "tapit-35468.firebaseapp.com",
  projectId: "tapit-35468",
  storageBucket: "tapit-35468.appspot.com",
  messagingSenderId: "1076571518593",
  appId: "1:1076571518593:web:05bcda1874c8773d73bf80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);