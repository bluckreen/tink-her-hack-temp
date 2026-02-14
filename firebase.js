// firebase.js

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAdMMYHYzQaDFVlTKMC5XzISZIN7TBKmBU",
  authDomain: "spacebooker-3abd9.firebaseapp.com",
  projectId: "spacebooker-3abd9",
  storageBucket: "spacebooker-3abd9.firebasestorage.app",
  messagingSenderId: "76226422507",
  appId: "1:762264225076:web:2a9ae8901f68f442e7d161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

// Signup function
export function signupUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login function
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Forgot password function
export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}
