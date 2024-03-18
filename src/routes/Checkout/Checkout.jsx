import { useContext } from 'react';

import './Checkout.scss';
import { CartContext } from '../../contexts/cart-context';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const Checkout = () => {
    const {
        cartItems,
        cartTotal
    } = useContext(CartContext);

    const cartItemList = cartItems.map((cartItem) => (
        <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem}
        />
    ));

    const checkoutHeader = (
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
    );

    return (
        <div className='checkout-container'>
            {checkoutHeader}
            {cartItemList}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    );
};

export default Checkout;
