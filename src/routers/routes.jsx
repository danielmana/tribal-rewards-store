import React from "react";
import { Router, Route, DefaultRoute, RouteHandler, Redirect } from "react-router";

import BaseLayout from "../components/layouts/Base";
import MainLayout from "../components/layouts/Main";

import MainOverviewPage from "../components/pages/main/Overview";
import MainReportsPage from "../components/pages/main/Reports";
import MainTermsPage from "../components/pages/main/Terms";
import MainPrivacyPage from "../components/pages/main/Privacy";
import MainContactPage from "../components/pages/main/Contact";
import LoginPage from "../components/pages/Login";

var Routes = React.createClass({

  statics: {
    getRoutes: function() {
      return (
          <Route name="base" path="/" handler={BaseLayout}>
            <Route name="main" path="/main" handler={MainLayout}>
              <Route name="main.overview" path="/overview" handler={MainOverviewPage} />
              <Route name="main.reports" path="/reports" handler={MainReportsPage} />
              <Route name="main.terms" path="/terms" handler={MainTermsPage} />
              <Route name="main.privacy" path="/privacy" handler={MainPrivacyPage} />
              <Route name="main.contact" path="/contact" handler={MainContactPage} />
              <DefaultRoute name="main.default" handler={MainOverviewPage} />
            </Route>
            <Route name="login" path="/login" handler={LoginPage} />
            <DefaultRoute name="default" handler={MainLayout} />
            <Redirect from="/" to="main.overview" />
          </Route>
      );
    }
  },
  render: function() {

  }

});

export default Routes;
