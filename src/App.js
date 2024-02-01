import { Routes, Route, Outlet } from 'react-router-dom';

import Navagation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';

// for test only
// to test
// 1. /, shop
// 2. /home, shop // ***
// 3. others // check 5.85 again when available
const Shop = () => (<div>Shop Component</div>);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navagation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
