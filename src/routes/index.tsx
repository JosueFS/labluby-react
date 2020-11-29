import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import User from '../pages/User';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user" exact component={User} />
    </Switch>
  );
};

export default Routes;
