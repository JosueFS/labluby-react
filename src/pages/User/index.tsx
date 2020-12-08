import React from 'react';
import { useLocation } from 'react-router-dom';
import Profile from '../../components/Profile';

import { useAuth } from '../../hooks/auth';

const User: React.FC = () => {
  const { user, alternativeUser } = useAuth();
  const { state: userProfile } = useLocation();

  return (
    <>
      {userProfile === user.login ? (
        <Profile user={user} />
      ) : (
        <Profile user={alternativeUser} />
      )}
    </>
  );
};

export default User;
