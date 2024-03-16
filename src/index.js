import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/user-context';
import { ProductsProvider } from './contexts/products-context';

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
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>

    </BrowserRouter>
  </React.StrictMode>
);
