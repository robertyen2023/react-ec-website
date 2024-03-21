import { createContext, useState, useEffect } from 'react';

// import SHOP_DATA from '../shop-data.js';
// import { addCollectionAndDocuments } from '../utils/firebase/config.js';
import { getCategoriesAndDocuments } from '../utils/firebase/config.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => {}
});

export const CategoriesProvider = ({ children }) => {
    // Why we want to use an empty object as default instead of using null 
    // - like the normal usage when we might have an object value to a variable
    // -- => Cause we're really interfacing with the object keyS 
    // -- in order to get the [responding items] for the category,
    // -- we'll just get nothing back
    // -- if we're trying to get [them] and {there are no keyS}.
    const [categoriesMap, setCategoriesMap] = useState({});
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
            const categoriesMap = await getCategoriesAndDocuments();
            console.log(categoriesMap);
        };

        getCategoriesMap();
    }, []);


    const providerValue = {
        categoriesMap,
        setCategoriesMap
    };

    return (
        <CategoriesContext.Provider value={providerValue}>
            {children}
        </CategoriesContext.Provider>
    );
}
