import React from 'react';
import './Modal.css';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => (
  <div className="modal" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>
        <img src="./close.png" alt="Fechar" />
      </button>
      <div className="modal-image">
        <img src={product.photo} alt={product.productName} />
      </div>
      <div className="modal-info">
        <h2>{product.productName}</h2>
        <p>{product.descriptionShort}</p>
        <span>R$ {product.price.toFixed(2)}</span>
        <button>Comprar</button>
      </div>
    </div>
  </div>
);

export default Modal;
