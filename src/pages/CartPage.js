import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';

const CartPage = () => {

    return (
      <div>
        <Navbar />
        <div className="p-mt-4 p-d-flex p-jc-center">
          <div className="p-card p-shadow-3" style={{ width: '90%', maxWidth: '1200px' }}>
            <Cart />
          </div>
        </div>
      </div>
    );
  };

export default CartPage;
