import { createContext, useState } from 'react';

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
