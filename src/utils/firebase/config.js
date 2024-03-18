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
    signOut,
    GoogleAuthProvider,

    // Check the explanation below.
    onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  // collection,
  // writeBatch
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

// LOGOUT: 3.1. 
//                                                   [auth] 
//                                                   是一直以來用來追蹤auth狀態的singleton
// 因為在用到signOutUser的地方要拿值，所以改為async
export const signOutUser = async () => await signOut(auth);
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

// [onAuthStateChanged Step 1.]
// onAuthStateChanged is an observable listener
// - that takes the auth singleton and callback
// - in order to help you
// - 1. track auth state changes and
// - 2. centralize the auth related logic
// - (actual logic placement)
// .
// Also,
// - the auth singleton
// - would track the auth state
// - even though the user refreshes pages
// .
// Furthermore,
// - it will return [an unsubscriber]
// - in order for us 
// - to prevent [the open listener] from [memory leak].
// - i.e. Stop the listener when a context provider component unmount
// .
// the signature of the callback
// callback = (userAuth) => { .... }
// See available properties and methods [of] userAcc
// on the doc.
// https://firebase.google.com/docs/reference/js/auth.user
// .
// ==The moment we create the listener==
// - is just telling the firebase/auth;
// - hey, create [the listener] for me [using the callback].
// .
// The onAuthStateChanged is just building
// - [the listener model] for us.
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

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

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);

//   objectsToAdd.forEach((theObjectToAdd) => {
//                   // doc($collectionRef, $documentKey)
//     console.log(theObjectToAdd);
//     const docRef = doc(collectionRef, theObjectToAdd.title.toLowerCase());
//     batch.set(docRef, theObjectToAdd);
//   });

//   try {
//     await batch.commit();
//   } catch (error) {
//     console.log('addCollectionAndDocuments', error);
//   }
  
//   console.log('done');
// };
