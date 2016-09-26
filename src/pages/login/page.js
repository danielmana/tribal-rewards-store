import React from 'react';
import { browserHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';


export default class LoginPage extends React.Component {
  login() {
    browserHistory.push('/home');
  }
  
  render() {
    return (
      <div>
        <RaisedButton
            label="Login"
            onClick={this.login} />
      </div>
    );
  }
}
