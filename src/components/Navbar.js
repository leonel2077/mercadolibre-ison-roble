import React, { useContext } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { SearchContext } from '../contexts/SearchContext';

const Navbar = ({onSearch}) => {
  const navigate = useNavigate()
  const { handleSearch } = useContext(SearchContext);

  const start = (
    <span className="company-name" onClick={() => navigate(`/`)} >Open Market</span>
  );

  const end = (
    <span className="p-inputgroup">
      <SearchBar onSearch={(query)=> {
        handleSearch(query);
        navigate('/');
      }} />
      <Button icon="pi pi-shopping-cart" className="p-button-rounded p-button-secondary p-ml-2" onClick={() => navigate(`/cart`)}/>
    </span>
  );

  return (
    <Menubar start={start} end={end} />
  );
}

export default Navbar