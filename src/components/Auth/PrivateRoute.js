import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuth from './isAuth';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuth() ?
      <Component {...props} /> :
      <Redirect to={{
        pathname: '/login',
        state: { referrer: props.location }
      }} />
  )} />
);