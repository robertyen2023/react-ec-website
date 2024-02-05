import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAIFudx30r4nHD_IiQm22a70cJ9p-WoNhY",
  authDomain: "react-ec-website-db.firebaseapp.com",
  projectId: "react-ec-website-db",
  storageBucket: "react-ec-website-db.appspot.com",
  messagingSenderId: "83736969615",
  appId: "1:83736969615:web:360436380bd171c2540bfa"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
