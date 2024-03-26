import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../../../contexts/categories-context';
import CategoryPreview from '../../../../components/CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    const categoryPreviewList = Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
            <CategoryPreview 
                key={title}
                title={title}
                products={products}
            />
        );
    });

    // Using Fragment EXPLICITLY
    return (
        <Fragment>
            {categoryPreviewList}
        </Fragment>
    );
};

export default CategoriesPreview;
