import React, { useState, useContext, useRef } from 'react';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Galleria } from 'primereact/galleria';
import { Toast } from 'primereact/toast';
import { CartContext } from '../contexts/CartContext';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const toast = useRef(null);

  const onAddToCart = () => {
    addToCart(product, quantity);
    toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Producto agregado al carrito', life: 3000 });
  };
  
  console.log(product)
  const itemTemplate = (item) => {
    return ( 
    <img src={item.secure_url} alt={item.id} style={{ width: '50%' }} />
    );
  };

  const thumbnailTemplate = (item) => {
    return <img src={item.secure_url} alt={item.id} style={{ width: '125px', height: '125px'}}/>
  };

  return (
    <div>
      <Toast ref={toast} />
      <h2>{product.title}</h2>
      <Galleria 
      value={product.pictures} 
      item={itemTemplate} 
      thumbnail={thumbnailTemplate}
      style={{ maxWidth: '640px', margin: 'auto' }}
      />
      <h3>Precio: ${product.price}</h3>
      <div className="p-field p-grid">
        <label htmlFor="quantity" className="p-col-fixed" style={{ width: '100px' }}>Cantidad</label>
        <div className="p-col">
          <InputNumber id="quantity" value={quantity} onValueChange={(e) => setQuantity(e.value)}
            showButtons min={1} max={product.available_quantity} />
        </div>
      </div>
      <Button label="Agregar al Carrito" icon="pi pi-shopping-cart" onClick={onAddToCart} />
    </div>
  );
};

export default ProductDetail;
