'use strict';

import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {Redirect} from "react-router-dom";
import {Button, Icon, Input, Page, Row, Toolbar, ToolbarButton} from "react-onsenui";
// load Onsen UI library
import ons from "onsenui";

import {authRequest} from "services/Auth/actions";
import {makeSelectUser} from "services/Auth/selectors";

import "./styles.css";

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      creds: {
        id: 'demo',
        password: 'demo',
      }
    };
  }

  signin() {
    // ons.notification.alert({
    //   message: `You entered '${this.state.id}' & '${this.state.password}' `
    // });
    this.props.onLogin(this.state.creds);
  }

  forgotPassword() {
    ons.notification.prompt({
      message: 'What is your mobile?',
      callback: function (email) {
        ons.notification.alert({
          message: 'The new password will be send to ' + email
        });
      }
    });
  }

  idChanged(event) {
    this.setState({
      creds: {
        ...this.state.creds,
        id: event.target.value
      }
    });
  }

  passwordChanged(event) {
    this.setState({
      creds: {
        ...this.state.creds,
        password: event.target.value
      }
    });
  }

  renderToolbar(button) {
    return (
      <Toolbar>
        <div className="center">Login</div>
        <div className="right">
          {button}
        </div>
      </Toolbar>
    )
  }

  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {user} = this.props;

    if (user) {
      return (
        <Redirect to={from}/>
      )
    }

    let toolbarButton;

    if (!ons.platform.isAndroid()) {
      toolbarButton = (
        <ToolbarButton onClick={this.signin}>
          <Icon icon={{default: 'ion-log-in'}}/>
        </ToolbarButton>
      )
    }

    const {creds} = this.state;
    return (
      <div className="tile">
        <Page id="login" renderToolbar={() => this.renderToolbar(toolbarButton)}>
          <div id='logo_title'>
            React PhoneGap OnsenUI
          </div>
          <Input value={creds.id} onChange={e => this.idChanged(e)} placeholder="Mobile/Username/Email"
                 type="text"
                 modifier="underbar" float/>
          <Input value={creds.password} onChange={e => this.passwordChanged(e)} placeholder="Password"
                 type="password"
                 modifier="underbar" float/>
          <Button id='signin' onClick={e => this.signin(e)} modifier="large">Sign In</Button>
          <Button id='forgot_btn' onClick={e => this.forgotPassword(e)} modifier="quiet">FORGOT PASSWORD?</Button>
        </Page>
      </div>
    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    onLogin: creds => dispatch(authRequest(creds)),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Login);
