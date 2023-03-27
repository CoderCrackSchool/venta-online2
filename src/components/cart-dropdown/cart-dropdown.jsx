
import Button from '../button/button';
import './cart-dropdown.css';

import products_data from "../../products.json"
import CartItem from '../cart-item/cart-item';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    const navigate = useNavigate();
    const { currentCart } = useContext(CartContext);

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {currentCart.map((product) => {
                    return (<CartItem key={product.id} product={product} />)
                })}
            </div>
            <Button onClick={goToCheckoutHandler} text="GO TO CHECKOUT"></Button>
        </div>
    );
};

export default CartDropdown;
