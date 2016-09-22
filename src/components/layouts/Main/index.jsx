import React from "react";
import Router, { Link, RouteHandler } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jquery";
import classNames from "classnames";

var HomePage = React.createClass({

  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){
    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){

    return {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true
    };

  },

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {

    //console.log(this.context);

    // var name = this.context.router.getCurrentPath();

    const { pathname } = this.props.location;

    return (
        <div className="dashboard-page ui-view">
          <div className="container-fluid">
            <div className="row">
              <div className="navbar navbar-default navbar-custom navbar-fixed-top topbar" role="navigation">
                <div>
                  <div style={{float:'left', width:'100%', position: 'relative', top:'10'}} className="text-center">
                    <h1><Link to="/main/overview">Rewards Admin Portal</Link></h1>
                  </div>
                  <div style={{right:'10', position: 'absolute'}}>
                    <div style={{float:'left', position: 'relative'}}>
                      <img src={require("../../../common/images/flat-avatar.png")} className="user-avatar" />
                    </div>
                    <div className="nav-points">
                      <span>Ira Glass</span>
                      <div>
                        <Link to="/login">Logout</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

               <ReactCSSTransitionGroup component="div"
                                 transitionName="ng"
                                 transitionEnterTimeout={500}
                                 transitionLeaveTimeout={300}
                >
                  {React.cloneElement(<div className="main ng-scope ui-view">{this.props.children}</div> || <div />, { key: pathname })}
                </ReactCSSTransitionGroup>

            </div>
            <div className="navbar navbar-default navbar-fixed-bottom">
              <div style={{float:'left', margin:15}}>
                <Link to="/main/overview"><img src={require("../../../common/images/TribalPlanet-01.png")} height='20px' /></Link>
              </div>
              <div style={{float:'right', margin:15}}>
                <Link to="/main/terms">Terms</Link>
                <Link to="/main/privacy" style={{paddingLeft:10}}>Privacy Policy</Link>
                <Link to="/main/contact" style={{paddingLeft:10}}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
    );
  },

  statics: {
    fetchData: function(params) {
      }
  }

});

export default HomePage;
