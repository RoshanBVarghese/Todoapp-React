// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXfOGYLIU4ncf5Ue7gts4a5M1fi3dWN-4",
  authDomain: "todo-c3483.firebaseapp.com",
  projectId: "todo-c3483",
  storageBucket: "todo-c3483.appspot.com",
  messagingSenderId: "540683113771",
  appId: "1:540683113771:web:abe28d701ce8846879216e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);