import React from 'react';

import { Container } from './styles';
import FollowList from './followList';
import { useAuth } from '../../hooks/auth';

interface IFollowsProps {
  isFollowersPage?: boolean;
}

const Follows: React.FC<IFollowsProps> = ({ isFollowersPage }) => {
  const { followers, following } = useAuth();

  return (
    <Container>
      {isFollowersPage ? (
        <FollowList follows={followers} />
      ) : (
        <FollowList follows={following} />
      )}
    </Container>
  );
};

export default Follows;
