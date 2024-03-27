import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";

import { CategoriesContext } from '../../../../contexts/categories-context';
import ProductCard from '../../../../components/ProductCard/ProductCard';

import './Category.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    // The [worse] way for getting "products'
    // - Cuz the code below would run every time when this component re-renders.
    // const products = categoriesMap[category];

    // The [better] way for getting "products'
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    const categoryProductList = products && products.map((product) => (
        <ProductCard key={product.id} product={product} />
    ));

    let categoryTitle;
    if (category) {
        const upperCaseCategory = category.toUpperCase();
        categoryTitle = <h2 className='category-title'>{upperCaseCategory}</h2>;
    }
    
    return (
        <Fragment>
            {categoryTitle}
            <div className='category-container'>
                {categoryProductList}
            </div>
        </Fragment>
    );
};

export default Category;
