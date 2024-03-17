import { useContext } from 'react';

import './CartDropdown.scss';
import Button from '../Button/Button';
import { CartContext } from '../../contexts/cart-context';
import CartItem from '../CartItem/CartItem';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    const tempCartItemList = cartItems.map((cartItem) => (
        <CartItem
            key={cartItem.id}
            cartItem={cartItem}
        />
    ));

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {tempCartItemList}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
