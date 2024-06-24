import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item 
                );
            }
            return [...prevItems, {...product, quantity }];
        });    
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));     
    };

    const updateCartItemQuantity = (productId, quantity) => {
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.id === productId ? { ...item, quantity: Math.max(item.quantity + quantity, 1) } : item
          )
        );
      };
    
    const clearCart = () => {
        setCartItems([]);
    };
    
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity, clearCart }}>
            { children }
        </CartContext.Provider>
    );
}