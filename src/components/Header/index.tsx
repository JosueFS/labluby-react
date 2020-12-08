/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';

import { HomeHeader, Logout } from './styles';

import { useAuth } from '../../hooks/auth';

import GHeader from './genericHeader';

const Header: React.FC = () => {
  const { signOut, signIn, user } = useAuth();
  const [isLogged, setIsLogged] = useState(false);
  const { pathname, state } = useLocation();

  const pageName = pathname.replace('/', '');

  useEffect(() => {
    setIsLogged(!!user.login);
  }, [user]);

  if (isLogged) {
    switch (pathname) {
      case '/repositories':
        return <GHeader counter={user.public_repos} pageName={pageName} />;

      case '/followers':
        return <GHeader counter={user.followers} pageName={pageName} />;

      case '/following':
        return <GHeader counter={user.following} pageName={pageName} />;

      default:
        return (
          <>
            {state === user.login || state === undefined ? (
              <HomeHeader>
                <strong>#{user.login}</strong>
                <Logout onClick={signOut}>
                  Sair
                  <MdExitToApp size={24} color="#D03434" />
                </Logout>
              </HomeHeader>
            ) : (
              <HomeHeader>
                <strong>#{state}</strong>
                <Logout onClick={() => signIn(String(state))}>
                  Salvar
                  <MdExitToApp size={24} color="#5CBC29" />
                </Logout>
              </HomeHeader>
            )}
          </>
        );
    }
  } else {
    return <></>;
  }

  // return <ActiveHeader />;
};

export default Header;
