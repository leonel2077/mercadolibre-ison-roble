import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { SearchProvider } from './contexts/SearchContext';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';


const App = () => {
  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productDetail/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </SearchProvider>
    </CartProvider>
  );
};

export default App;
