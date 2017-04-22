/**
 * Created by ulrichsinn on 03/06/2017.
 */

import '../styles/main.scss';

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';

export default class Header extends Component{
  render(){
    return (
      <div id="header">
        <h1>{this.props.navigation.name}</h1>

        {/*{this.props.location.pathname.includes('portfolio')?this.showNavigation():null}*/}
      </div>  );
  }
  
  showNavigation(){
    return <Navigation/>
  }

}

Header.propTypes = {
  title: PropTypes.string,
  onNavClick: PropTypes.func,
};

// export default Header;
