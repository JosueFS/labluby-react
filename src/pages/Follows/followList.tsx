import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';

import { List, Avatar } from './styles';

import { IFollow, useAuth } from '../../hooks/auth';

interface IFollowListProps {
  follows: IFollow[];
}

const FollowList: React.FC<IFollowListProps> = ({ follows }) => {
  const { loadProfile } = useAuth();
  return (
    <List>
      {follows.map(follower => (
        <React.Fragment key={follower.login}>
          <li key={follower.login}>
            <Avatar alt={follower.login} src={follower.avatar_url} />
            <strong>{`#${follower.login}`}</strong>
            <Link
              onClick={() => loadProfile(follower.login)}
              to={{ pathname: `/user`, state: follower.login }}
            >
              <RiArrowRightLine size={24} />
            </Link>
          </li>

          <hr />
        </React.Fragment>
      ))}
    </List>
  );
};

export default FollowList;
