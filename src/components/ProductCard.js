import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const header = (
    <img alt={product.title} src={product.thumbnail} className="product-image" />
  );

  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Mostrar más" icon="pi pi-search" onClick={() => navigate(`/productDetail/${product.id}`)} />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Card 
        title={<span className="product-title" title={product.title}>{product.title}</span>}
        subTitle={`$${product.price}`} 
        footer={footer} 
        header={header} 
        className="product-card"
      />
    </div>
  );
};

export default ProductCard;
