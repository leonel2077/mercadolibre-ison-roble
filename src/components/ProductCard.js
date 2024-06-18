import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const header = (
    <img alt={product.title} src={product.thumbnail} style={{ width: '75%' }} />
  );

  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Mostrar más" icon="pi pi-search" onClick={() => navigate(`/productDetail/${product.id}`)} />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Card title={product.title} subTitle={`$${product.price}`} footer={footer} header={header} style={{ width: '300px', marginBottom: '2em' }}>
      </Card>
    </div>
  );
};

export default ProductCard;
