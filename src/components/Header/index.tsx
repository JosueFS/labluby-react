/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';

import { HomeHeader, Logout } from './styles';

import { useAuth } from '../../hooks/auth';

import GHeader from './genericHeader';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  const [isLogged, setIsLogged] = useState(false);
  const { pathname } = useLocation();

  const pageName = pathname.replace('/', '');

  useEffect(() => {
    setIsLogged(!!user.login);
  }, [user]);

  if (isLogged) {
    switch (pathname) {
      case '/user':
        return (
          <HomeHeader>
            <strong>#{user.login}</strong>
            <Logout onClick={signOut}>
              Sair
              <MdExitToApp size={24} color="#D03434" />
            </Logout>
          </HomeHeader>
        );

      default:
        return <GHeader counter={1} pageName={pageName} />;
    }
  } else {
    return <></>;
  }

  // return <ActiveHeader />;
};

export default Header;
