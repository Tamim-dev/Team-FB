// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtn9KV3kqRM5T3zOE0b6L0yWODN5sC6hw",
  authDomain: "team-fb.firebaseapp.com",
  projectId: "team-fb",
  storageBucket: "team-fb.appspot.com",
  messagingSenderId: "400626273965",
  appId: "1:400626273965:web:1d93873349003a21ad0024"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;