import React, { useState, useEffect} from 'react';

const Product = () => {
    const [inputValue, setInputValue] = useState('')
    const [searchQuery, setSearchQuery] = useState('valorBuscado')
    const [items, setItems] = useState([])
    
    useEffect(() => {
      const fetchItems = async () => {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}#json`)
      const data = await response.json();
      setItems(data.results);
      console.log(data.results)
    };
      fetchItems();
    }, [searchQuery]);
      
    const handleInput = (e) => {
      setInputValue(e.target.value);
    }
    
    const handleSearchClick = () => {
      setSearchQuery(inputValue);
    }
    
    return(
      <div>
        <h1>Mercado Libre</h1>
        <input type="text" value={inputValue} placeholder="Buscar un producto" onChange={handleInput}/>
        <button onClick={handleSearchClick}>Buscar</button>
        <ul>
          {items.map(item => (
           <li key={item.id}>
             <h2>{item.title}</h2>
             <p>Precio: {item.price}</p>
             <img src={item.thumbnail} alt={item.title}/>
           </li>
          ))}
        </ul>
      </div>
    )    
} 

export default Product;