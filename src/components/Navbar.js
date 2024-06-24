import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({onSearch}) => {
  const navigate = useNavigate()
  const start = (
    <span className="company-name" onClick={() => navigate(`/`)} >Open Market</span>
  );

  const end = (
    <span className="p-inputgroup">
      <SearchBar onSearch={onSearch} />
      <Button icon="pi pi-shopping-cart" className="p-button-rounded p-button-secondary p-ml-2" onClick={() => navigate(`/cart`)}/>
    </span>
  );

  return (
    <Menubar start={start} end={end} />
  );
}

export default Navbar