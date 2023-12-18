import { useState, useMemo } from 'react';

const useFiltrowanieProduktow = (produkty, dostepnosc) => {
  const [aktualnaDostepnosc, setAktualnaDostepnosc] = useState(dostepnosc);

  const produktyFiltrowane = useMemo(() => {
    if (aktualnaDostepnosc === 'wszystko') {
      return { dostepnosc: aktualnaDostepnosc, produkty };
    } else {
      return {
        dostepnosc: aktualnaDostepnosc,
        produkty: produkty.filter((produkt) =>
          aktualnaDostepnosc === 'dostepne' ? produkt.inStock : !produkt.inStock
        ),
      };
    }
  }, [aktualnaDostepnosc, produkty]);

  const ustawDostepnosc = (nowaDostepnosc) => {
    setAktualnaDostepnosc(nowaDostepnosc);
  };

  return {
    dostepnosc: produktyFiltrowane.dostepnosc,
    produkty: produktyFiltrowane.produkty,
    ustawDostepnosc,
  };
};

export default useFiltrowanieProduktow;
