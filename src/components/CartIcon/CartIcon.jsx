import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { CartContext } from '../../contexts/cart-context';

const CartIcon = () => {
    const { 
        isCartOpen, 
        setIsCartOpen,
        cartCount
    } = useContext(CartContext);

    // 不直接操作setter !! // ???
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;
