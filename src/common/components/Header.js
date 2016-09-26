import React, { Component } from 'react';
import { AppBar, FlatButton } from 'material-ui';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
  }

  onLeftIconButtonTouchTap() {
    console.log('onLeftIconButtonTouchTap');
    if (this.props.onLeftIconButtonTouchTap) {
      this.props.onLeftIconButtonTouchTap(event);
    }
  }

  render() {
    return (
      <header>
        <AppBar
            title="Citizen Rewards"
            onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
            iconElementRight={<FlatButton label="71,214" />}
            style={{position: 'fixed', top: 0, left: 0, right: 0}}/>
      </header>
    );
  }
}

export default Header;
