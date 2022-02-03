import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoOlmVst4y52vZ8HsjBJKWYZ7i2GioWYs",
    authDomain: "login-auth-51730.firebaseapp.com",
    projectId: "login-auth-51730",
    storageBucket: "login-auth-51730.appspot.com",
    messagingSenderId: "874700304304",
    appId: "1:874700304304:web:361a801821fea6202bf075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
