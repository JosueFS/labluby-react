import React from 'react';
import { useLocation } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';

import { Container, FollowList, Avatar } from './styles';
import { useAuth } from '../../hooks/auth';

const Follows: React.FC = () => {
  const { followers } = useAuth();
  const { pathname } = useLocation();

  return (
    <Container>
      <FollowList>
        {followers.map(follower => (
          <React.Fragment key={follower.login}>
            <li key={follower.login}>
              <Avatar alt={follower.login} src={follower.avatar_url} />
              <strong>{`#${follower.login}`}</strong>
              <RiArrowRightLine size={24} />
            </li>

            <hr />
          </React.Fragment>
        ))}
      </FollowList>
    </Container>
  );
};

export default Follows;
