import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  // Si no necesitas la búsqueda en esta página, elimina esta línea y la referencia a Navbar
  const handleSearch = (query) => {
    console.log(query);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {product ? <ProductDetail product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductDetailPage;
