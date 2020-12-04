import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { FiGithub, FiUsers } from 'react-icons/fi';
import { RiUserStarLine } from 'react-icons/ri';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Footer: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(!!user.login);
  }, [user]);

  return (
    <>
      {isLogged && (
        <Container>
          <Link
            to="/user"
            className={location.pathname === '/user' ? 'current' : ''}
          >
            <BiHomeAlt size={28} />
            <span>Home</span>
          </Link>

          <Link
            to="/repositories"
            className={location.pathname === '/repositories' ? 'current' : ''}
          >
            <FiGithub size={28} />
            <span>Repos</span>
          </Link>

          <Link
            to="/followers"
            className={location.pathname === '/followers' ? 'current' : ''}
          >
            <FiUsers size={28} />
            <span>Seguidores</span>
          </Link>

          <Link
            to="/following"
            className={location.pathname === '/following' ? 'current' : ''}
          >
            <RiUserStarLine size={28} />
            <span>Seguindo</span>
          </Link>
        </Container>
      )}
    </>
  );
};

export default Footer;
