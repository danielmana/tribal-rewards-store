import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Paper, FontIcon } from 'material-ui';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';


class Footer extends Component {
  constructor() {
    super();
    this.state = { selectedIndex: null };
  }

  select = (index) => {
    this.setState({ selectedIndex: index });
    let path = '';
    switch (index) {
      case 0:
        path = '/featured';
        break;
      case 1:
        path = '/categories';
        break;
      case 2:
        path = '/group';
        break;
    }
    browserHistory.push(path);
  };

  render() {
    return (
      <Paper zDepth={1} style={{position: 'fixed', bottom: 0, left: 0, right: 0}}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Featured"
            icon={<FontIcon className="material-icons">star_border</FontIcon>}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Categories"
            icon={<FontIcon className="material-icons">view_list</FontIcon>}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Group"
            icon={<FontIcon className="material-icons">group_work</FontIcon>}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Footer;
