import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products-context';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Shop.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    const productList = products.map((product) => (
        <ProductCard
            key={product.id}
            product={product} 
        />
    ));

    return (
        <div className='products-container'>
            {productList}
        </div>
    );
};

export default Shop;
