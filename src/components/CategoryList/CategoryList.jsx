import './CategoryList.scss';

import CategoryItem from '../CategoryItem/CategoryItem';

const CategoryList = ({ categoriesData }) => {
    if (!categoriesData || !categoriesData.length) return null;

    const categoryItems = categoriesData.map(({ id = 0, title = '', imageUrl = '' } = {}) => (
        <CategoryItem 
            id={id}
            title={title}
            imageUrl={imageUrl}
        />
    ));

    return (
        <div className="category-list-container">
            {categoryItems}
        </div>
    );

};

export default CategoryList;
