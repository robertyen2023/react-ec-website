import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIFudx30r4nHD_IiQm22a70cJ9p-WoNhY",
  authDomain: "react-ec-website-db.firebaseapp.com",
  projectId: "react-ec-website-db",
  storageBucket: "react-ec-website-db.appspot.com",
  messagingSenderId: "83736969615",
  appId: "1:83736969615:web:360436380bd171c2540bfa"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
                  // doc($db, $collectionS, $uniqueId/$identifier);
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  // based on the userAuth.uid
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}
