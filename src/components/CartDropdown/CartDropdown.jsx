import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './CartDropdown.scss';
import Button from '../Button/Button';
import { CartContext } from '../../contexts/cart-context';
import CartItem from '../CartItem/CartItem';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const tempCartItemList = cartItems.map((cartItem) => (
        <CartItem
            key={cartItem.id}
            cartItem={cartItem}
        />
    ));

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {tempCartItemList}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
