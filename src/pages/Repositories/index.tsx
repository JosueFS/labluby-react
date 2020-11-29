import React from 'react';
import { RiArrowLeftLine, RiStarLine } from 'react-icons/ri';
import { FiUnlock, FiLock } from 'react-icons/fi';

import { Container, Header, RepositoryList } from './styles';

const Repositories: React.FC = () => {
  return (
    <Container>
      <Header>
        <RiArrowLeftLine size={24} />
        <strong>707 repositórios</strong>
      </Header>
      <RepositoryList>
        <li>
          <h3>repository-name</h3>
          <span>Informations about this repository-name</span>
          <footer>
            <RiStarLine color="#ffce00" size={16} />
            <span>32</span>
            <FiUnlock color="#00bb00" size={16} />
            <FiLock color="#FF0000" size={16} />
          </footer>
        </li>

        <hr />

        <li>
          <h3>repository-name</h3>
          <span>Informations about this repository-name</span>
          <footer>
            <RiStarLine color="#ffce00" size={16} />
            <span>32</span>
            <FiUnlock color="#00bb00" size={16} />
            <FiLock color="#FF0000" size={16} />
          </footer>
        </li>

        <hr />

        <li>
          <h3>repository-name</h3>
          <span>Informations about this repository-name</span>
          <footer>
            <RiStarLine color="#ffce00" size={16} />
            <span>32</span>
            <FiUnlock color="#00bb00" size={16} />
            <FiLock color="#FF0000" size={16} />
          </footer>
        </li>

        <hr />

        <li>
          <h3>repository-name</h3>
          <span>Informations about this repository-name</span>
          <footer>
            <RiStarLine color="#ffce00" size={16} />
            <span>32</span>
            <FiUnlock color="#00bb00" size={16} />
            <FiLock color="#FF0000" size={16} />
          </footer>
        </li>

        <hr />
      </RepositoryList>
    </Container>
  );
};

export default Repositories;
