import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// Config pública do app web (não é segredo; a segurança vem das regras).
const firebaseConfig = {
  apiKey: "AIzaSyAmsEEG2E-J-2ElBSM9baw7d_hZueYOU5E",
  authDomain: "saladonada-3d165.firebaseapp.com",
  projectId: "saladonada-3d165",
  storageBucket: "saladonada-3d165.firebasestorage.app",
  messagingSenderId: "1061184364059",
  appId: "1:1061184364059:web:09c71db3a79e82f930e2be",
  measurementId: "G-SJ7P9727CE"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); setPersistence(auth, browserLocalPersistence);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
export * from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
export * from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
export * from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
