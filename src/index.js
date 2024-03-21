import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/user-context';
import { CategoriesProvider } from './contexts/categories-context';
import { CartProvider } from './contexts/cart-context';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      {/* 3.2. Wrap child components with the provider component. */}
      {/* Wrap providers [inside the router]. */}
      <UserProvider>
        {/* Context包裹順序取決於data dependency */}
        {/* - 例如 [這裡]我們可能會根據 [使用者所在地區] 來決定要show出的products */}
        <CategoriesProvider>
          {/* 如果我們需要把使用者的購物車資料存在DB，使其登入時就有對應的購物車內容 */}
          {/* - 那我們就需要 User 或 Products 的資料內容 */}
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>

    </BrowserRouter>
  </React.StrictMode>
);
