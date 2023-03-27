

import ProductCard from '../../components/product-card/product-card';

import products_data from '../../products.json'

import './shop.css';

const Shop = () => {

    return (
        <div className='products-container'>
            {products_data.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;