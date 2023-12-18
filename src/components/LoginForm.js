import React from 'react';
import { useUser } from './UserContext';

const LoginForm = () => {
  const { zalogujUzytkownika } = useUser();

  const handleLogin = () => {
    const uzytkownik = {
      username: 'exampleUser',
      email: 'example@example.com',
    };

    zalogujUzytkownika(uzytkownik);
  };

  return (
    <div>
      <h2>Formularz logowania</h2>
      <button onClick={handleLogin}>Zaloguj</button>
    </div>
  );
};

export default LoginForm;
