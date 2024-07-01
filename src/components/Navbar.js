import React, { useContext } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { SearchContext } from '../contexts/SearchContext';
import SearchBar from './SearchBar';


const Navbar = ({onSearch}) => {
  const navigate = useNavigate()
  const { handleSearch } = useContext(SearchContext);
  const { getTotalItems } = useContext(CartContext);

  const start = (
    <span className="company-name" onClick={() => navigate(`/`)} >Open Market</span>
  );

  const end = (
    <span className="p-inputgroup">
      <SearchBar onSearch={(query) => {
        handleSearch(query);
        navigate('/');
      }} />
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button 
          icon="pi pi-shopping-cart" 
          className="p-button-rounded p-button-secondary p-ml-2" 
          onClick={() => navigate(`/cart`)}
        />
        {getTotalItems() > 0 && (
          <span className="cart-counter">
            {getTotalItems()}
          </span>
        )}
      </div>
    </span>
  );

  return (
    <Menubar start={start} end={end} />
  );
}

export default Navbar