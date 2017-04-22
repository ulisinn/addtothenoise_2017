/**
 * Created by ulrichsinn on 03/06/2017.
 */
import '../styles/main.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {actual} from 'actual';

export default class Footer extends Component {
  render() {
    console.log('actual', actual.is('(max-width:30em)'));
    return (
      <div id="footer">
        You can <a href="mailto:contact@addtothenoise.com?Subject=Hello">contact</a> addtothenoise here.
      </div>  );
  }
  
  showNavigation() {
    return <Navigation/>
  }
  
}

Footer.propTypes = {
  title: PropTypes.string,
  onNavClick: PropTypes.func,
};
