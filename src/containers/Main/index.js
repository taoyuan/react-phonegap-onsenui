import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Route, Switch, withRouter} from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute';
import {makeSelectUser} from 'services/Auth/selectors';
import Login from '../Login';
import ExampleApp from '../ExampleApp';

export class Main extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    user: React.PropTypes.object
  };

  static defaultProps = {
    user: null
  };

  render() {
    const {user} = this.props;
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <ProtectedRoute authenticate={user} component={ExampleApp}/>
      </Switch>
    );
  }
}

export function mapDispatchToProps(dispatch) { // eslint-disable-line no-unused-vars
  return {};
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

// Wrap the component to inject dispatch and state into it
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
