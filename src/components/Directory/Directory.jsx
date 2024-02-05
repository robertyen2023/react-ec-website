import './Directory.scss';

import CategoryItem from '../CategoryItem/CategoryItem';

const Directory = ({ categoriesData }) => {
    if (!categoriesData || !categoriesData.length) return null;

    const categoryItems = categoriesData.map(({ id = 0, title = '', imageUrl = '' } = {}) => (
        <CategoryItem
            id={id}
            key={id}
            title={title}
            imageUrl={imageUrl}
        />
    ));

    return (
        <div className="directory-container">
            {categoryItems}
        </div>
    );

};

export default Directory;
