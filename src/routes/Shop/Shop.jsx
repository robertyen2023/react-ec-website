import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories-context';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Shop.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    const categoryList = Object.keys(categoriesMap).map((title) => {
        const productList = categoriesMap[title].map((product) => (
            <ProductCard
                key={product.id}
                product={product} 
            />
        ));

        return (
            <Fragment key={title}>
                <h2>{title}</h2>
                <div className='products-container'>
                    {productList}
                </div>
            </Fragment>
        );
    });

    // Using Fragment EXPLICITLY
    return (
        <Fragment>
            {categoryList}
        </Fragment>
    );
};

export default Shop;
