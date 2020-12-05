import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

import { Container, FollowList, Avatar } from './styles';
import { useAuth } from '../../hooks/auth';

interface IFollowsProps {
  isFollowersPage?: boolean;
}

const Follows: React.FC<IFollowsProps> = ({ isFollowersPage }) => {
  const { followers, following } = useAuth();

  return (
    <Container>
      {isFollowersPage ? (
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
      ) : (
        <FollowList>
          {following.map(f => (
            <React.Fragment key={f.login}>
              <li key={f.login}>
                <Avatar alt={f.login} src={f.avatar_url} />
                <strong>{`#${f.login}`}</strong>
                <RiArrowRightLine size={24} />
              </li>

              <hr />
            </React.Fragment>
          ))}
        </FollowList>
      )}
    </Container>
  );
};

export default Follows;
