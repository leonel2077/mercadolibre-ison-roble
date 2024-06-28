import React, { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    const data = await response.json();
    setProducts(data.results);
  };

  useEffect(() => {
    handleSearch('velez');
  }, []);

  return (
    <SearchContext.Provider value={{ searchQuery, products, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
