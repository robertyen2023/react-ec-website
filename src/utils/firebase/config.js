import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    
    // Native Provider v.s. Additional Provider
    // - Native Provider: function only
    // - Additional Provider: class, cuz 3rd party
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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

// [class instance] compare with [auth singleton]
// which means we might have many providers
const googleProvider = new GoogleAuthProvider(); 
googleProvider.setCustomParameters({ prompt: 'select_account' });

// [auth singleton] compare with [class instance]
// which means we can only have 1 auth singleton
export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// [Interface Layer] for 3rd party utilities
// - allows us to have [a separation layer]
// - between [the front end] and [the services it relies on]
// - .
// - pros 1. easy for managing the code of a 3rd party utility
// - pros 2. * only need to update [this interface layer]
// - if there's any change of the 3rd party utility 
export const createAuthUserWithEmailAndPassword = async (email, passwrod) => {
  if (!email || !passwrod) return;
                                            // * the auth here means [the auth singleton] above
                                            // - NOT the userAuth
                                            // .
                                            // * we DON'T really store password
                                            // - into the firestore
                                            // - firebase auth. has a systen for authenticating users
                                            // - with password but without storing [the plain code 明碼 / 明文]
                                            // - into the database
  return await createUserWithEmailAndPassword(auth, email, passwrod);
};

export const signInAuthUserWithEmailAndPassword = async (email, passwrod) => {
  if (!email || !passwrod) return;
                                            // * the auth here means [the auth singleton] above
                                            // - NOT the userAuth
                                            // .
                                            // * we DON'T really store password
                                            // - into the firestore
                                            // - firebase auth. has a systen for authenticating users
                                            // - with password but without storing [the plain code 明碼 / 明文]
                                            // - into the database
  return await signInWithEmailAndPassword(auth, email, passwrod);
};

export const createUserDocumentFromAuth = async (
  userAuth,

  // i.e. additionalInformation { displayName: 'Alvin' }
  additionalInformation
) => {
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
        createdAt,
        ...additionalInformation
        // i.e. replace { displayName: null }
        // - with additionalInformation { displayName: 'Alvin' }
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}
