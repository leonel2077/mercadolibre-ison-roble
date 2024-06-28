import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import { SearchContext } from '../contexts/SearchContext';

const HomePage = () => {
  const { products } = useContext(SearchContext);
  
  return (
    <div>
      <Navbar />
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
