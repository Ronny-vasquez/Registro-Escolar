import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyChcsFpF9aqziP1-uMTV1cHd_WCNdUac24",
  authDomain: "proyecto-final-3126f.firebaseapp.com",
  projectId: "proyecto-final-3126f",
  storageBucket: "proyecto-final-3126f.appspot.com",
  messagingSenderId: "350683161520",
  appId: "1:350683161520:web:3e77e046cfa4cfd93dac75",
  measurementId: "G-XTJ2S6RQBN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
