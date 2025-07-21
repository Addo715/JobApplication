import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration from .env
const firebaseConfig = {
  apiKey:  "AIzaSyDS2x0qvH1iw0yFQj-hTTaSp9_DihpQ-HU",
  authDomain: "jobappliction.firebaseapp.com",
  projectId: "jobappliction",
  storageBucket: "jobappliction.firebasestorage.app",
  messagingSenderId: "715708029795",
  appId: "1:715708029795:web:3031f7bbf5a16e8ef31156",
  measurementId: "G-8HFD891FY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

//  Register user
const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local", // corrected typo from 'authProvide'
      email,
    });
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
    throw error;
  }
};

//  Login user
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
    throw error;
  }
};

//  Logout user
const logout = () => {
  signOut(auth);
};


export { auth, db, login, signUp, logout };

// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   signInWithEmailAndPassword,
//   signOut,
// } from 'firebase/auth';
// import { addDoc, collection, getFirestore } from 'firebase/firestore';
// import { toast } from 'react-toastify';

// // Safe environment variable check
// let apiKey;
// try {
//   apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
//   if (!apiKey) {
//     console.warn('Firebase API key not found in environment variables');
//   }
// } catch (error) {
//   console.warn('Environment variables not available, using fallback configuration');
// }

// // Firebase configuration with fallbacks
// const firebaseConfig = {
//   apiKey: (() => {
//     try {
//       return process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDS2x0qvH1iw0yFQj-hTTaSp9_DihpQ-HU";
//     } catch {
//       return "AIzaSyDS2x0qvH1iw0yFQj-hTTaSp9_DihpQ-HU";
//     }
//   })(),
//   authDomain: (() => {
//     try {
//       return process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "jobappliction.firebaseapp.com";
//     } catch {
//       return "jobappliction.firebaseapp.com";
//     }
//   })(),
//   projectId: (() => {
//     try {
//       return process.env.REACT_APP_FIREBASE_PROJECT_ID || "jobappliction";
//     } catch {
//       return "jobappliction";
//     }
//   })(),
//   storageBucket: (() => {
//     try {
//       return process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "jobappliction.firebasestorage.app";
//     } catch {
//       return "jobappliction.firebasestorage.app";
//     }
//   })(),
//   messagingSenderId: (() => {
//     try {
//       return process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "715708029795";
//     } catch {
//       return "715708029795";
//     }
//   })(),
//   appId: (() => {
//     try {
//       return process.env.REACT_APP_FIREBASE_APP_ID || "1:715708029795:web:3031f7bbf5a16e8ef31156";
//     } catch {
//       return "1:715708029795:web:3031f7bbf5a16e8ef31156";
//     }
//   })(),
//   measurementId: (() => {
//     try {
//       return process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-8HFD891FY0";
//     } catch {
//       return "G-8HFD891FY0";
//     }
//   })(),
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Register user
// const signUp = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;

//     await addDoc(collection(db, 'users'), {
//       uid: user.uid,
//       name,
//       authProvider: 'local',
//       email,
//     });
//     toast.success('User registered successfully');
//   } catch (error) {
//     const errorMessage = error.code ? error.code.split('/')[1].split('-').join(' ') : error.message;
//     toast.error(errorMessage);
//     throw error;
//   }
// };

// // Login user
// const login = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     toast.success('Logged in successfully');
//   } catch (error) {
//     const errorMessage = error.code ? error.code.split('/')[1].split('-').join(' ') : error.message;
//     toast.error(errorMessage);
//     throw error;
//   }
// };

// // Logout user
// const logout = () => {
//   signOut(auth);
//   toast.success('Logged out successfully');
// };

// export { auth, db, login, signUp, logout };