// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuW0G19q7Se_OUS0-DdjvnTDBCkXPFq0Y",
  authDomain: "hero-task-a200a.firebaseapp.com",
  projectId: "hero-task-a200a",
  storageBucket: "hero-task-a200a.appspot.com",
  messagingSenderId: "678340520700",
  appId: "1:678340520700:web:af4a69baf29e3472208579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;