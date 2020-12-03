import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { FiGithub, FiUsers } from 'react-icons/fi';
import { RiUserStarLine } from 'react-icons/ri';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Footer: React.FC = () => {
  const { user } = useAuth();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(!!user.login);
  }, [user]);
  return (
    <>
      {isLogged && (
        <Container>
          <Link to="/user">
            <BiHomeAlt size={28} />
            <span>Home</span>
          </Link>

          <Link to="/repositories">
            <FiGithub size={28} />
            <span>Repos</span>
          </Link>

          <Link to="/follows">
            <FiUsers size={28} />
            <span>Seguidores</span>
          </Link>

          <Link to="/follows">
            <RiUserStarLine size={28} />
            <span>Seguindo</span>
          </Link>
        </Container>
      )}
    </>
  );
};

export default Footer;
