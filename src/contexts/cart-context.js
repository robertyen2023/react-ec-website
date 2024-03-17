import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    cartCount: 0,

    // 不直接操作setter !! // ???
    addItemToCart: () => {}
});

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) => (
            cartItem.id === productToAdd.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        ));
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    // 不直接操作setter !! // ???
    const addItemToCart = (productToAdd) => {
        // 思考，addCartItem 放在 Provider 裡面 或 拉到外面
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const providerValue = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        cartCount,

        addItemToCart
    };

    return (
        <CartContext.Provider value={providerValue}>
            {children}
        </CartContext.Provider>
    );
};
