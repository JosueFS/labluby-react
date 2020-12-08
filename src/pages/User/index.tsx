import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Profile from '../../components/Profile';

import { useAuth } from '../../hooks/auth';

interface IRouteParams {
  username: string;
}

const User: React.FC = () => {
  const { user, alternativeUser } = useAuth();
  const { username } = useParams<IRouteParams>();
  const { state } = useLocation();

  console.log(username);

  return (
    <>
      {state === alternativeUser.login && state !== undefined ? (
        <Profile user={alternativeUser} />
      ) : (
        <Profile user={user} />
      )}
    </>
  );
};

export default User;
