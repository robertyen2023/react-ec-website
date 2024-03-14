import { createContext, useState, useEffect } from 'react';

import { 
    onAuthStateChangedListener,
    createUserDocumentFromAuth
 } from '../utils/firebase/config';

// 1. create a context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {},
});

// 3. create the corresponding context provider
// Consider a provider as [a parent component],
// and it will pass down the context value (prop)
// to its child components.
export const UserProvider = ({ children }) => {
                                        // 因為是 [useState] !!
                                        // defaultState要放currentUser的初始值，
                                        // 而不是整個context的defaultContextValue,
                                        // 如 { currentUser, setCurrentUser }
    const [currentUser, setCurrentUser] = useState(null);
    // [onAuthStateChanged Step 2.] Remove all the setCurrentUser at other places
    // - and replace it with the if else statement below
    // [onAuthStateChanged Step 3.] Move all the createUserDocumentFromAuth 
    // - at other places to the if else statement below
    // - except [the one at SignUpForm] cuz we need the displayName.
    // .
    // - Also, we don't need to worry about whether 
    // - the user has existed in firestore or not
    // - cuz we have the checker in [createUserDocumentFromAuth].
    // .
    // [onAuthStateChanged Step 4.] Apply onAuthStateChangedListener in useEffect
    // - Also apply setCurrentUser inside the callback of onAuthStateChangedListener
    // .
    // [onAuthStateChanged Step 5.]
    // - Now, the user context governs [the (domain / 領域) of everything]
    // - related to users and authentication and storage.
    useEffect(() => {
        const unsubscriber = onAuthStateChangedListener((userAuth) => {
            if (userAuth) {
                createUserDocumentFromAuth(userAuth);
            }
            setCurrentUser(userAuth);
            console.log(userAuth);
        });
        return unsubscriber;
    }, []);

    const providerValue = {
        currentUser,
        setCurrentUser
    };

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    );
};
