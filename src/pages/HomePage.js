import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import { SearchContext } from '../contexts/SearchContext';
import { Paginator } from 'primereact/paginator';

const HomePage = () => {
  const { products, totalProducts, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage } = useContext(SearchContext);

  const onPageChange = (event) => {
    setCurrentPage(event.page + 1);
    setRowsPerPage(event.rows);
  };

  return (
    <div>
      <Navbar />
      <ProductList products={products} />
      <Paginator 
            first={(currentPage - 1) * rowsPerPage} 
            rows={rowsPerPage} 
            totalRecords={totalProducts} 
            onPageChange={onPageChange} 
            rowsPerPageOptions={[10, 20, 30]}
      />
    </div>
  );
};

export default HomePage;
