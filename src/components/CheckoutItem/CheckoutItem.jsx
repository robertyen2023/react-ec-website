import { useContext } from 'react';

import './CheckoutItem.scss';
import { CartContext } from '../../contexts/cart-context';

const CheckoutItem = ({ cartItem }) => {
    const {
        clearItemFromCart
    } = useContext(CartContext);

    const { 
        name, 
        quantity,
        imageUrl,
        price
    } = cartItem;

    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img  src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
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
