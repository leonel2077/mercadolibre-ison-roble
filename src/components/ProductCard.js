import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


const ProductCard = ({ product }) => {
  const header = (
    <img alt={product.title} src={product.thumbnail} style={{ width: '100%' }}/>
  );
  
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
        <Button label="Mostrar más" icon="pi pi-search" />
    </div>
);

    return(
      <div className="card flex justify-content-center">
        <Card title={product.title} subTitle={`$${product.price}`} footer={footer} header={header} style={{ width: '300px', marginBottom: '2em' }}>
        </Card>
      </div>
    )
};

export default ProductCard;