import { useContext } from 'react';

import SHOP_DATA from '../../shop-data.json';
import { ProductsContext } from '../../contexts/products-context';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    const productList = products.map(({ id, name }) => (
        <div key={id}>
            <h1>{name}</h1>
        </div>
    ));

    return (
        <div>
            {productList}
        </div>
    );
};

export default Shop;
