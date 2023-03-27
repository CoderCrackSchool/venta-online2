
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button';

import './product-card.css';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonClass='inverted' text="Add to cart" onClick={() => addItemToCart(product)} />

        </div>
    );
};

export default ProductCard;