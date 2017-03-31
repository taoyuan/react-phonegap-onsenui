import React from 'react';
import {Redirect, Route} from 'react-router-dom';

/* eslint-disable react/prop-types */
const ProtectedRoute = ({component, authenticate, failureRedirect, ...rest}) => {
  const authenticated = typeof authenticate === 'function' ? authenticate() : Boolean(authenticate);
  return (
    <Route {...rest} render={props => (
      authenticated ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={{
          pathname: failureRedirect,
          state: {from: props.location}
        }}/>
      )
    )}/>
  );
};

ProtectedRoute.propTypes = {
  component: React.PropTypes.object.isRequired,
  authenticate: React.PropTypes.oneOfType([
    React.PropTypes.func,
    React.PropTypes.bool,
  ]),
  failureRedirect: React.PropTypes.string
};

ProtectedRoute.defaultProps = {
  authenticate: false,
  failureRedirect: '/login'
};

export default ProtectedRoute;
