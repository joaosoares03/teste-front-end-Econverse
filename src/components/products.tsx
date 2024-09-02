import React from 'react';
import './Products.css';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductsProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ products, onProductClick }) => (
  <section className="products">
    <div className="container">
      <h2>Produtos relacionados</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.productName} className="product" onClick={() => onProductClick(product)}>
            <img src={product.photo} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>{product.descriptionShort}</p>
            <span>R$ {product.price.toFixed(2)}</span>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
