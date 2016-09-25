import React from 'react';
import { browserHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';


export default class LoginPage extends React.Component {
  signUp() {
    browserHistory.push('/home');
  }
  
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <p>Create an account to get started!</p>
        <RaisedButton label="Sign up" onClick={this.signUp} />
      </div>
    );
  }
}
