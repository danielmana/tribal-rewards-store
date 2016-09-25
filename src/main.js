/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Routes
import Routes from './common/components/Routes';

// Base styling
import './common/base.css';

// Material
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// WORKAROUND Some components use react-tap-event-plugin to listen for touch events
// https://www.npmjs.com/package/material-ui#react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Render the router
ReactDOM.render((
  <MuiThemeProvider>
    <Router history={browserHistory}>
      {Routes}
    </Router>
  </MuiThemeProvider>
), document.getElementById(DOM_APP_EL_ID));

