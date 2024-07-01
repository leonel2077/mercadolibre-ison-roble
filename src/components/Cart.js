import React, { useContext, useRef, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateCartItemQuantity, clearCart } = useContext(CartContext);
    const [subtotal, setSubtotal] = useState(0);
    const toast = useRef(null);
  
    useEffect(() => {
      const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setSubtotal(total);
    }, [cartItems]);
  
    const handlePurchase = () => {
      toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Compra realizada con éxito', life: 3000 });
      clearCart();
    };

    return (
      <div className="cart-container">
        <Toast ref={toast} />
        <h2>Carrito</h2>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <div>
            <table className="p-datatable p-component">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td><img src={item.thumbnail} alt={item.title} className="product-image-cart" /></td>
                    <td className="centered">{item.title}</td>
                    <td className="centered">
                      <InputNumber 
                        value={item.quantity} 
                        onValueChange={(e) => updateCartItemQuantity(item.id, e.value - item.quantity)}
                        showButtons 
                        min={1} 
                      />
                    </td>
                    <td className="centered">${item.price}</td>
                    <td className="centered">
                      <Button icon="pi pi-trash" className="p-button-danger" onClick={() => removeFromCart(item.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-actions">
              <Button label="Vaciar Carrito" icon="pi pi-times" className="p-button-danger" onClick={clearCart} />
              <div className="cart-summary">
                <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
                <Button label="Realizar Compra" icon="pi pi-check" className="p-button-success" onClick={handlePurchase} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Cart;
