import { useContext } from 'react';

import './Checkout.scss';
import { CartContext } from '../../contexts/cart-context';

const Checkout = () => {
    const {
        cartItems,
    } = useContext(CartContext);

    const cartItemList = cartItems.map((cartItem) => {
        const { 
            id, 
            name, 
            quantity 
        } = cartItem;

        return (
            <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <br />
                <span>decrement</span>
                <br />
                <span>increment</span>
            </div>
        );
    });

    return (
        <div className='checkout-container'>
            <h1>I am the checkout page.</h1>
            <div>{cartItemList}</div>
        </div>
    );
};

export default Checkout;
