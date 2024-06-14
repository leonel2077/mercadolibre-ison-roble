import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import SearchBar from './SearchBar';

const Navbar = ({onSearch}) => {
  const start = (
    <span className="company-name">Open Market</span>
  );

  const end = (
    <span className="p-inputgroup">
      <SearchBar onSearch={onSearch} />
      <Button icon="pi pi-shopping-cart" className="p-button-rounded p-button-secondary p-ml-2" />
    </span>
  );

  return (
    <Menubar start={start} end={end} />
  );
}

export default Navbar