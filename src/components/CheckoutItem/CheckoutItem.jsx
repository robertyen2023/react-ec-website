import { useContext } from 'react';

import './CheckoutItem.scss';
import { CartContext } from '../../contexts/cart-context';

const CheckoutItem = ({ cartItem }) => {
    const {
        clearItemFromCart,
        removeItemFromCart,
        addItemToCart
    } = useContext(CartContext);

    const { 
        name, 
        quantity,
        imageUrl,
        price
    } = cartItem;

    // Why we create handlers / interfaces?
    // - 1. separate, 
    // - 2. easier to identify than jsx
    const clearItemHandler = () => clearItemFromCart(cartItem);

    const cartItemDecrementHandler = () => removeItemFromCart(cartItem);

    const cartItemIncrementHandler = () => addItemToCart(cartItem);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img  src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            
            <span className="quantity">
                <div 
                    className="arrow"
                    onClick={cartItemDecrementHandler}
                >
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div 
                    className="arrow"
                    onClick={cartItemIncrementHandler}
                >
                    &#10095;
                </div>
            </span>
            
            <span className="price">{price}</span>
            <div 
                className="remove-button"
                onClick={clearItemHandler}
            >
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
