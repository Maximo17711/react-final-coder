// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoO5TZZQUHvcNCc8zCe8E_XBs3x1IWb08",
  authDomain: "tienda-coderhouse-f74eb.firebaseapp.com",
  projectId: "tienda-coderhouse-f74eb",
  storageBucket: "tienda-coderhouse-f74eb.appspot.com",
  messagingSenderId: "950106327390",
  appId: "1:950106327390:web:fb40b9cde4f05c7b48a7cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) //db = database

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBoO5TZZQUHvcNCc8zCe8E_XBs3x1IWb08",
//   authDomain: "tienda-coderhouse-f74eb.firebaseapp.com",
//   projectId: "tienda-coderhouse-f74eb",
//   storageBucket: "tienda-coderhouse-f74eb.appspot.com",
//   messagingSenderId: "950106327390",
//   appId: "1:950106327390:web:fb40b9cde4f05c7b48a7cf"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);