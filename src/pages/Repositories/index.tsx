/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { RiStarLine } from 'react-icons/ri';
import { FiUnlock, FiLock } from 'react-icons/fi';

import { Container, RepositoryList } from './styles';

import { useAuth } from '../../hooks/auth';

const Repositories: React.FC = () => {
  const { repos } = useAuth();

  return (
    <Container>
      <RepositoryList>
        {repos.map(repo => (
          <React.Fragment key={repo.id}>
            <li key={repo.id}>
              <h3>{repo.name}</h3>
              <span>{repo.description}</span>
              <footer>
                <RiStarLine color="#ffce00" size={16} />
                <span>{repo.stargazers_count}</span>
                <FiUnlock color="#00bb00" size={16} />
                <FiLock color="#FF0000" size={16} />
              </footer>
            </li>

            <hr />
          </React.Fragment>
        ))}
      </RepositoryList>
    </Container>
  );
};

export default Repositories;
