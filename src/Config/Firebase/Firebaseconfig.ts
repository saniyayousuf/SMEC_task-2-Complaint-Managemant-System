// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrak_ukNI6uyONf1RhH90yM9vrgwqa7Zo",
  authDomain: "saylani-devathon-a1bb8.firebaseapp.com",
  projectId: "saylani-devathon-a1bb8",
  storageBucket: "saylani-devathon-a1bb8.appspot.com",
  messagingSenderId: "1030130957819",
  appId: "1:1030130957819:web:00138793bfd374e3f2df5e",
  measurementId: "G-8VVDZXPE0G"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);