import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLygZa2EDyHBuCT8RTZEMIcnvYW-D-67g",
  authDomain: "dailyprofit-b9600.firebaseapp.com",
  projectId: "dailyprofit-b9600",
  storageBucket: "dailyprofit-b9600.firebasestorage.app",
  messagingSenderId: "879891413676",
  appId: "1:879891413676:web:bfba99ee5b95c45b957d09",
  measurementId: "G-T5FJ81FP62"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
