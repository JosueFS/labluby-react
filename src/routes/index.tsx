import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import User from '../pages/User';
import Repositories from '../pages/Repositories';
import Follows from '../pages/Follows';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user" component={User} isPrivate />
      <Route path="/repositories" component={Repositories} isPrivate />
      <Route path="/follows" component={Follows} isPrivate />
    </Switch>
  );
};

export default Routes;
