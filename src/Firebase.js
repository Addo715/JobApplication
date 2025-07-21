import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration from .env
const firebaseConfig = {
  apiKey: "AIzaSyDS2x0qvH1iw0yFQj-hTTaSp9_DihpQ-HU",
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
