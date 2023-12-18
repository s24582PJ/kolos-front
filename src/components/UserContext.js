
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [zalogowanyUzytkownik, setZalogowanyUzytkownik] = useState(null);

  const zalogujUzytkownika = (uzytkownik) => {
    setZalogowanyUzytkownik(uzytkownik);
  };

  const wylogujUzytkownika = () => {
    setZalogowanyUzytkownik(null);
  };

  return (
    <UserContext.Provider
      value={{ zalogowanyUzytkownik, zalogujUzytkownika, wylogujUzytkownika }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser musi być używane wewnątrz UserProvider');
  }
  return context;
};
