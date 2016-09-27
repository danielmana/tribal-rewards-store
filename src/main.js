/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';

// WORKAROUND Some components use react-tap-event-plugin to listen for touch events
// https://www.npmjs.com/package/material-ui#react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// WORKAROUND set basename to deploy on gh-pages
import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';
const history = window.location.hostname === 'localhost' ?
  browserHistory :
  useRouterHistory(createHistory)({ basename: '/tribal-rewards-store/' })

// Routes
import Routes from './common/components/Routes';

// Base styling
import './common/base.css';

// Material
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey800, blue900 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey800,
    textColor: blue900
  }
});

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Render the router
ReactDOM.render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={history}>
      {Routes}
    </Router>
  </MuiThemeProvider>
), document.getElementById(DOM_APP_EL_ID));
