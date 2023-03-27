
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

import './checkout-item.css';

const CheckoutItem = ({ product }) => {
    const { name, imageUrl, price } = product;
    const quantity = 1;

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow'>
                    <AiOutlineLeft />
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' >
                    <AiOutlineRight />
                </div>
            </span>
            <span className='price'> {price}</span>
            <div className='remove-button' >
                <AiOutlineClose />
            </div>
        </div>
    );
};

export default CheckoutItem;
