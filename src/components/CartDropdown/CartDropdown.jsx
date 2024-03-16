import { useContext } from 'react';

import './CartDropdown.scss';
import Button from '../Button/Button';
import { CartContext } from '../../contexts/cart-context';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    const tempCartItemList = cartItems.map(({ name, id, quantity }) => (
        <span key={id}>{name} x {quantity}</span>
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
