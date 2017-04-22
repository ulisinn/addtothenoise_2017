/**
 * Created by ulrichsinn on 03/06/2017.
 */

import '../styles/main.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';

import PropTypes from 'prop-types';
import Navigation from './navigation';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        
        
        {this.props.location.pathname !== '/' ? <h1><Link to='/'>{this.props.navigation.name}</Link></h1> :
          <h1>{this.props.navigation.name}</h1>}
        {this.props.location.pathname !== '/' ? this.showNavigation() : null}
      </div>  );
  }
  
  showNavigation() {
    return <Navigation {...this.props.navigation} pathname={this.props.location.pathname}/>
  }
  
}

Header.propTypes = {
  title: PropTypes.string,
  onNavClick: PropTypes.func,
};

// export default Header;
