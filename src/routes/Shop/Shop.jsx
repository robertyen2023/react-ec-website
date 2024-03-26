import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from './routes/CategoriesPreview/CategoriesPreview';
import Category from './routes/Category/Category';
import './Shop.scss';

// The Route Pattern
// - Method     Segments
// - GET/users/{user_id}/posts/{posts_id}

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;
