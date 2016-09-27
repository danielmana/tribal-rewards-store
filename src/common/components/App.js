import React from "react";
import { AppBar, FlatButton, Drawer, MenuItem, Divider } from 'material-ui';

import Footer from './Footer';
import Header from './Header';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { drawerVisible: false };
    this.showDrawer = this.showDrawer.bind(this);
  }

  showDrawer() {
    this.setState({ drawerVisible: true });
  }

  render() {
    return (
      <div id="container">
        <Header onLeftIconButtonTouchTap={this.showDrawer}/>
        <Drawer
            docked={false}
            open={this.state.drawerVisible}
            onRequestChange={(drawerVisible) => this.setState({drawerVisible})}>
          <MenuItem>LOGO</MenuItem>
          <Divider />
          <MenuItem>Fair J.</MenuItem>
          <Divider />
          <MenuItem>Terms</MenuItem>
          <MenuItem>Privacy Policy</MenuItem>
          <MenuItem>Contact Us</MenuItem>
        </Drawer>
        <main style={{marginTop: 64}}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
