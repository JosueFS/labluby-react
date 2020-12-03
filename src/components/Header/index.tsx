/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { MdExitToApp } from 'react-icons/md';

import { HomeHeader, Logout } from './styles';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(!!user.login);
  }, [user]);
  return (
    <>
      {isLogged && (
        <HomeHeader>
          <strong>#{user.login}</strong>
          <Logout onClick={signOut}>
            Sair
            <MdExitToApp size={24} color="#D03434" />
          </Logout>
        </HomeHeader>
      )}
    </>
  );
};

export default Header;
