import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import User from '../pages/User';
import Repositories from '../pages/Repositories';
import Follows from '../pages/Follows';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/user" component={User} isPrivate />
      <Route path="/repositories" component={Repositories} isPrivate />
      <Route
        path="/followers"
        component={props => <Follows {...props} isFollowersPage />}
        isPrivate
      />
      <Route
        path="/following"
        component={props => <Follows {...props} isFollowersPage={false} />}
        isPrivate
      />
    </Switch>
  );
};

export default Routes;
