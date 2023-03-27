

import CheckoutItem from "../../components/checkout-item/checkout-item";
import products_data from "../../products.json"

import './checkout.css';

const Checkout = () => {

    return (
        <div className='checkout-container'>
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
            {products_data?.map((product) => (
                <CheckoutItem key={product.id} product={product} />
            ))}

            <div className='total'>TOTAL: $1125</div>

        </div>
    );
};

export default Checkout;