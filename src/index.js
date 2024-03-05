import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Categories from './Categories.css';
import Contact from './Contact.css';
import AllCategories from './AllCategories.css';
import Nav from './Nav.css';
import AllProducts from './AllProducts.css';
import Header from './Header.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
