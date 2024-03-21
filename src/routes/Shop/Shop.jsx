import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories-context';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Shop.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const productList = categoriesMap.map((product) => (
        <ProductCard
            key={product.id}
            product={product} 
        />
    ));

    return (
        <div className='categories-container'>
            {productList}
        </div>
    );
};

export default Shop;
