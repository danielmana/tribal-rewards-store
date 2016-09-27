import React from 'react';
import { RaisedButton, Popover, Menu, MenuItem, Divider, FontIcon } from 'material-ui';

export default class HeaderUser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div style={{marginTop: 7}}>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="71,214"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Profile page" leftIcon={<FontIcon className="material-icons">account_circle</FontIcon>} />
            <MenuItem primaryText="Points History" leftIcon={<FontIcon className="material-icons">whatshot</FontIcon>} />
            <Divider />
            <MenuItem primaryText="Sign out" leftIcon={<FontIcon className="material-icons">exit_to_app</FontIcon>} />
          </Menu>
        </Popover>
      </div>
    );
  }
}
