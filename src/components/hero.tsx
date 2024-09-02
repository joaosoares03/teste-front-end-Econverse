import React from 'react';
import './Hero.css';

const Hero: React.FC = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% Off nos produtos</h2>
        <button>Ver produto</button>
      </div>
    </div>
  </section>
);

export default Hero;
