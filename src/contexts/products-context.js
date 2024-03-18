import { createContext, useState, useEffect } from 'react';

// import SHOP_DATA from '../shop-data.js';
// import { addCollectionAndDocuments } from '../utils/firebase/config.js';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => {}
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    const providerValue = {
        products,
        setProducts
    };

    return (
        <ProductsContext.Provider value={providerValue}>
            {children}
        </ProductsContext.Provider>
    );
}
