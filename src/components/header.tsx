import React from 'react';
import './Header.css';

const Header: React.FC = () => (
  <header className="header">
    <div className="container">
      <div className="header-content">
        <div className="logo">
          <img src="./logo.png" alt="VTEX" />
        </div>
        <div className="search">
          <input type="text" placeholder="O que você está buscando?" />
        </div>
        <div className="header-actions">
          <div className="cart">
            <img src="./cart.png" alt="Carrinho" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
