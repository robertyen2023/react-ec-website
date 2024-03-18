import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    cartCount: 0,
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,

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

// Why is that we always create the new object at the function returns ?
// - cuz, if we don't return A NEW OBJECT,
// - react won't trigger the re-render process,
// - React would think [the object data state] is still the old one
// - even though we mutate the properties of [the object data state].
const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity !== 1) {
        return cartItems.map((cartItem) => (
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        ));
    }

    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    // **Why do we separate useEffects even though they depend on the same value (cartItems) ?**
    // - 1. Each effect should only govern ONE singular responsibility.
    // --- Like each function should only govern ONE singular responsibility.
    // - 2. Readability
    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);
    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, { price,  quantity }) => total + (price * quantity),
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    // 不直接操作setter !! // ???
    const addItemToCart = (productToAdd) => {
        // 思考，addCartItem 放在 Provider 裡面 或 拉到外面
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    const providerValue = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal,

        addItemToCart
    };

    return (
        <CartContext.Provider value={providerValue}>
            {children}
        </CartContext.Provider>
    );
};
