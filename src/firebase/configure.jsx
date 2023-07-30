// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA48ZxWBx3lzYGZV3hsZ5rW4M3GiQC_a-4",
  authDomain: "blog-f4568.firebaseapp.com",
  projectId: "blog-f4568",
  storageBucket: "blog-f4568.appspot.com",
  messagingSenderId: "26613042526",
  appId: "1:26613042526:web:0803f0a9d4549dc26f53cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auths=getAuth(app);
export const db=getFirestore(app);