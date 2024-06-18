import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('velez');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`);
      const data = await response.json();
      setProducts(data.results);
      console.log(data.results);
    };
    fetchProducts();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
