/**
 * Created by ulrichsinn on 04/21/2017.
 */
import '../styles/main.css';

import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
// import classNames from 'classnames'


export default class SplashNavigation extends Component {
  constructor( props ) {
    super(props);
  }

  render() {
    return <div id="portfolioNav">
      <ul>
        {this.createTopSplashNavigation(this.props.pages, this.props.pathname)}
      </ul>
    </div>;
  }

  createTopSplashNavigation( arr, path ) {
    const nav = arr.map(function ( item, index ) {
      let listItem;
      listItem = <li className="splashNav" key={index}><Link to={item.path}>PORTFOLIO</Link></li>;

      if (item.path !== '/portfolio') {
        listItem = null;
      }

      return listItem;
    });

    return nav;
  }
}


SplashNavigation.propTypes = {
  pages: PropTypes.array,
  pathname: PropTypes.string,
  onNavClick: PropTypes.func,
};
