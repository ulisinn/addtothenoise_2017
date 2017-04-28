/**
 * Created by ulrichsinn on 03/06/2017.
 */
import '../styles/main.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';

import PropTypes from 'prop-types';
import {actual} from 'actual';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // console.log('actual', actual.is('(max-width:30em)'));
    return (
      <div id="footer">
        You can <a href="mailto:contact@addtothenoise.com?Subject=Hello">contact</a> addtothenoise here.
        {this.getLine2()}
      </div>  );
  }
  
  showNavigation() {
    return <Navigation/>
  }
  
  getLine2() {
    console.log('metaData width', this.props.metaData.width);
  
    return (this.props.metaData.width > 650) ? <span> Also, Uli has an <Link to='/opinion'>OPINION</Link> (it was gracefully pointed out that it is not <em>his</em>).</span> : null;
  }
}

Footer.propTypes = {
  title: PropTypes.string,
  onNavClick: PropTypes.func,
};
