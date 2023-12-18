import React from 'react';
import '../style.css';

const ListaProduktow = ({ produkty, onProduktClick }) => {
  return (
    <ul>
      {produkty.map((produkt) => (
        <li
          key={produkt.id}
          onClick={() => onProduktClick(produkt)}
          style={{ cursor: 'pointer' }}
        >
          <strong>{produkt.name}</strong> - {produkt.brand} {produkt.model} (
          {produkt.price} zł)
          {produkt.inStock ? ' - Dostępny' : ' - Niedostępny'}
        </li>
      ))}
    </ul>
  );
};

export default ListaProduktow;
