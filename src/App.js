import React, { useState, useEffect, useRef } from 'react';
import ListaProduktow from './components/ListaProduktow';
import Produkt from './components/Produkt';
import useFiltrowanieProduktow from './components/useFiltrowanieProduktow';
import useFiltrowanieProduktow from './components/useFiltrowanieProduktow';
import { UserProvider, useUser } from './components/UserContext';
import DodajProduktForm from './components/DodajProduktForm';
import './style.css';

const MojaAplikacja = () => {
  const [dane, setDane] = useState(null);
  const [wybranyProdukt, setWybranyProdukt] = useState(null);
  const refKliknietegoProduktu = useRef(null);
  const {
    dostepnosc,
    produkty: produktyFiltrowane,
    ustawDostepnosc,
  } = useFiltrowanieProduktow(dane, 'wszystko');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import('./items.json');
        setDane(response.items);
      } catch (error) {
        console.error('Błąd wczytywania danych:', error);
      }
    };

    fetchData();
  }, []);

  const handleProduktClick = (produkt) => {
    setWybranyProdukt(produkt);
    refKliknietegoProduktu.current = produkt;
  };

  const handleDodajProdukt = (nowyProdukt) => {
    setDane((prevData) => {
      const newData = [...prevData, nowyProdukt];
      return newData;
    });
  };

  return (
    <UserProvider>
      <div>
        <h1>Lista Produktów:</h1>
        <div>
          <label>
            Wybierz dostępność:
            {produktyFiltrowane && (
              <select
                value={dostepnosc}
                onChange={(e) => ustawDostepnosc(e.target.value)}
              >
                <option value="wszystko">Wszystko</option>
                <option value="dostepne">Dostępne</option>
                <option value="niedostepne">Niedostępne</option>
              </select>
            )}
          </label>
        </div>
        {produktyFiltrowane && (
          <ListaProduktow
            produkty={produktyFiltrowane}
            onProduktClick={handleProduktClick}
          />
        )}
        {wybranyProdukt && <Produkt produkt={wybranyProdukt} />}
        <h3>Dodaj Produkt</h3>
        <DodajProduktForm onDodajProdukt={handleDodajProdukt} />
      </div>
    </UserProvider>
  );
};

export default MojaAplikacja;
