import React from 'react';
import '../style.css';

const Produkt = ({ produkt }) => {
  return (
    <div className="produkt">
      <h2>{produkt.nazwa}</h2>
      <p>Marka: {produkt.marka}</p>
      <p>Model: {produkt.model}</p>
      <p>Cena: {produkt.cena}</p>
      <p>Dostępność: {produkt.inStock ? 'Dostępny' : 'Niedostępny'}</p>
    </div>
  );
};

export default Produkt;
