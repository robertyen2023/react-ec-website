import { Routes, Route } from 'react-router-dom';

import Navagation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Authentication from './routes/Authentication/Authentication';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';

// for test only
// to test
// 1. /, shop
// 2. /home, shop // ***
// 3. others // check 5.85 again when available
// const Shop = () => (<div>Shop Component</div>);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navagation />}>
        <Route index element={<Home />} />

        {/* 1. For the route path 'shop/*', */}
        {/* - the [wildcard / *] means [matching anything] */}
        {/* - so anything with shop/[...] would be directed to the route below. */}
        {/* - . */}
        {/* 2. path = [$parentPath/*], */}
        {/* - also means the route element (i.e. <Shop />) has its own route / sub route inside. */}
        <Route path="shop/*" element={<Shop />} />

        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
