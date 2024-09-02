import React, { useState, useEffect } from 'react';
import Header from './header';
import Hero from './hero';
import Categories from './categories';
import Products from './products';
import Modal from './modal';
import './styles/App.css';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('./products.json')
      .then((response) => response.json())
      .then((data) => {
        if (!data.products) {
          setError('Erro ao buscar dados');
          return;
        }
        setProducts(data.products);
      })
      .catch((error) => {
        setError('Erro ao buscar dados');
        console.error('Error fetching data:', error);
      });
  }, [setProducts]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <Categories />
        <Products products={products} onProductClick={handleProductClick} />
        
      </main>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;