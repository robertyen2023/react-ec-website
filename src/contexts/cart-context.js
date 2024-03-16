import { createContext, useState } from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const providerValue = {
        isCartOpen,
        setIsCartOpen
    };

    return (
        <CartContext.Provider value={providerValue}>
            {children}
        </CartContext.Provider>
    );
};
