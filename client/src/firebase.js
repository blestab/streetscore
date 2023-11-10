// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "streetscore-65e16.firebaseapp.com",
  projectId: "streetscore-65e16",
  storageBucket: "streetscore-65e16.appspot.com",
  messagingSenderId: "422953383056",
  appId: "1:422953383056:web:d812f76ac909f8a28d9415",
  measurementId: "G-9W5JH7T7YJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
