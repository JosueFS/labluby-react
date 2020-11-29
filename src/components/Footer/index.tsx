import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { FiGithub, FiUsers } from 'react-icons/fi';
import { RiUserStarLine } from 'react-icons/ri';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <figure>
        <BiHomeAlt size={28} />
        <figcaption>Home</figcaption>
      </figure>

      <figure>
        <FiGithub size={28} />
        <figcaption>Repos</figcaption>
      </figure>

      <figure>
        <FiUsers size={28} />
        <figcaption>Seguidores</figcaption>
      </figure>

      <figure>
        <RiUserStarLine size={28} />
        <figcaption>Seguindo</figcaption>
      </figure>
    </Container>
  );
};

export default Footer;
