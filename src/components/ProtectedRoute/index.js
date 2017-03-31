'use strict';

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({component, authenticate, failRedirect, ...props}) => {
  failRedirect = failRedirect || '/login';
  let authenticated = typeof authenticate === 'function' ? authenticate() : Boolean(authenticate);
  return <Route {...props} render={props => (
    authenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: failRedirect,
        state: {from: props.location}
      }}/>
    )
  )}/>
};

export default ProtectedRoute;
