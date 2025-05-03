// Firebase basic setup

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBoTlgSLHUKy0AAwKuhvoajvcj5_4-taH8",
    authDomain: "uniexplore-b6947.firebaseapp.com",
    projectId: "uniexplore-b6947",
    storageBucket: "uniexplore-b6947.firebasestorage.app",
    messagingSenderId: "389006098804",
    appId: "1:389006098804:web:e9edfc33bbc554912c2c21"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
