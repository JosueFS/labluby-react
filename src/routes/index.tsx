import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import User from '../pages/User';
import Repositories from '../pages/Repositories';
import Follows from '../pages/Follows';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user" component={User} />
      <Route path="/repositories" component={Repositories} />
      <Route path="/follows" component={Follows} />
    </Switch>
  );
};

export default Routes;
