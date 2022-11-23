import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from "./context/product-context";

import './index.css';
import App from './App';

// const rootReducer = combineReducers({
//   shop: productReducer
// });


ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById('root')
);
