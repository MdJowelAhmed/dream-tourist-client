// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtSBAvSN7GCIjruZqdY8ac_B07S8hDkQs",
  authDomain: "southeast-asia-tourists-sport.firebaseapp.com",
  projectId: "southeast-asia-tourists-sport",
  storageBucket: "southeast-asia-tourists-sport.appspot.com",
  messagingSenderId: "568891950216",
  appId: "1:568891950216:web:7efe1fa7ff14f656fd4b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app