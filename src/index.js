import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/user-context';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      {/* 3.2. Wrap child components with the provider component. */}
      {/* Wrap providers [inside the router]. */}
      <UserProvider>
        <App />
      </UserProvider>

    </BrowserRouter>
  </React.StrictMode>
);
