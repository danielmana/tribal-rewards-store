import React from "react";
import {AppBar, FlatButton, Drawer, MenuItem, Divider} from 'material-ui';

import BottomNavigation from './BottomNavigation';

export default class App extends React.Component {
	constructor() {
    super();
    this.state = {open: false};
    this._handleToggle = this._handleToggle.bind(this);
  }

  _handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div id="container">
        <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
          <MenuItem>LOGO</MenuItem>
          <Divider />
          <MenuItem>User Test</MenuItem>
          <Divider />
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </Drawer>
        <header>
          <AppBar
              title="Rewards Admin Portal"
              onLeftIconButtonTouchTap={this._handleToggle}
              iconElementRight={<FlatButton label="Action" />}
              style={{position: 'fixed', top: 0, left: 0, right: 0}}/>
        </header>
        <main>
          {this.props.children}
        </main>
        <BottomNavigation />
      </div>
    );
  }
}
