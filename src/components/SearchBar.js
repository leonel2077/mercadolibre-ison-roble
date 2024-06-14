import React, { useState} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleInput =  (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = () => {
        onSearch(searchTerm);
      }

    return (
      <div className="p-inputgroup">
      <InputText
        value={searchTerm}
        onChange={handleInput}
        placeholder="Buscar productos..."
      />
      <Button label="Buscar" icon="pi pi-search" onClick={handleSearch} />
    </div>
  );
}

export default SearchBar;