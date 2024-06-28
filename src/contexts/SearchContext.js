import React, { createContext, useState, useEffect, useCallback } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('velez');
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20); 

  const handleSearch = useCallback(async (query, page = 1, rows = rowsPerPage) => {
    setSearchQuery(query);
    const offset = (page - 1) * rows;
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&offset=${offset}&limit=${rows}`);
    const data = await response.json();
    setProducts(data.results);
    setTotalProducts(data.paging.total);
  }, [rowsPerPage]);

  useEffect(() => {
    handleSearch(searchQuery, currentPage, rowsPerPage);
  }, [handleSearch, searchQuery, currentPage, rowsPerPage]);

  return (
    <SearchContext.Provider value={{ searchQuery, products, handleSearch, totalProducts, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage }}>
      {children}
    </SearchContext.Provider>
  );
};
