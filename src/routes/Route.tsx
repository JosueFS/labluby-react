/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface IRouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  console.log(user);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!user.login ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/user' }} />
        );
      }}
    />
  );
};

export default Route;
