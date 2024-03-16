import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: PRODUCTS,
    setProducts: () => {}
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);

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
