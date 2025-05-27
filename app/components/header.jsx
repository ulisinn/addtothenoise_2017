/**
 * Created by ulrichsinn on 03/06/2017.
 */

import "../styles/main.css";

import React, {Component} from "react";
import {Link} from "react-router";

import PropTypes from "prop-types";
import Navigation from "./navigation";
import SplashNavigation from "./splash_navigation";

export default class Header extends Component {
  render() {
    // console.log('Header', this.props);
    return (
      <div id="header">
        {this.props.location.pathname !== '/' ? <h1><Link to='/'>{'{addtothenoise}'}</Link></h1> :
          <h1>{'{addtothenoise}'}</h1>}
        {this.props.location.pathname !== '/' ? this.showNavigation() : this.showSplashNavigation()}
      </div>  );
  }

  showNavigation() {
    return <Navigation {...this.props.navigation}
                       siteData={this.props.siteData}
                       pathname={this.props.location.pathname}/>
  }

  showSplashNavigation() {
    return <SplashNavigation {...this.props.navigation} pathname={this.props.location.pathname}/>
  }

}

Header.propTypes = {
  title: PropTypes.string,
  onNavClick: PropTypes.func,
  siteData: PropTypes.object,
};
