import { createContext, useState, useEffect } from 'react';

// import SHOP_DATA from '../shop-data.js';
// import { addCollectionAndDocuments } from '../utils/firebase/config.js';
import { getCategoriesAndDocuments } from '../utils/firebase/config.js';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => {}
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    // 當你在useEffect中使用async. fun.，
    // 千萬不要 pass an async. callback into it, 
    // instead, u need to 在 callback 中
    // 去創造另一個async. fun. as an interface for using [another] async. fun.
    // - 意即
    // 1. 不要讓cb變async fun.
    // 2. 在cb中 [create] an async fun. to use [the async. fun. that we want to use]
    // (An async fun. returns [a promise])
    // ***3. Apply [the async fun. that we create in the cb] at the end of the cb.
    // i.e. like the code below
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        };

        getCategoriesMap();
    }, []);


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
