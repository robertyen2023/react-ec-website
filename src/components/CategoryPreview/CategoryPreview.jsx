import { Link } from 'react-router-dom';
import ProductCard from "../ProductCard/ProductCard";

import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
    const upperCaseTitle = title.toUpperCase();
    const productList = products
                            // using _ to explicitly say [that] 
                            // - [I DON'T WANT TO USE IT]
                            .filter((_, idx) => (idx < 4))
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product} 
                                />
                            ));
    const categoryLink = `/shop/${title}`;

    return (
        <div className="category-preview-container">
            <h2>
                <Link to={categoryLink}>
                    {/* to make sure只有文字clickable */}
                    {/* - not the whole h2 block */}
                    <span className="title">
                        {upperCaseTitle}
                    </span>
                </Link>
            </h2>
            <div className='preview'>
                {productList}
            </div>
        </div>
    );
};

export default CategoryPreview;
