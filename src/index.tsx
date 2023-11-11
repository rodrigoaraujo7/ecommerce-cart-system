import React from 'react';
import ReactDOM from 'react-dom/client';

// react router imports
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes'

// providers
import ProductProvider from './providers/Product';
import CartProvider from './providers/Cart';
import UserProvider from './providers/User';

import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <UserProvider>
            <AppRouter />
          </UserProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

