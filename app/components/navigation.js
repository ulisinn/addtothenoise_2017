/**
 * Created by ulrichsinn on 04/21/2017.
 */
import '../styles/main.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
// import classNames from 'classnames'


export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <div id="portfolioNav">
      <ul>
        {this.createTopNavigation(this.props.pages, this.props.pathname)}
      </ul>
    </div>;
  }
  
  createTopNavigation(arr, path) {
    const nav = arr.map(function (item, index) {
      let listItem;
      if (item.path === path) {
        listItem = <li className="selected" key={index}>{item.label}</li>;
      } else {
        listItem = <li className="deselected" key={index}><Link to={item.path}>{item.label}</Link></li>;
      }
      
      if (item.path === '/contact' || item.path === '/oped') {
        listItem = null;
      }
      
      return listItem;
    });
    
    return nav;
  }
}


Navigation.propTypes = {
  pages: PropTypes.array,
  pathname: PropTypes.string,
  onNavClick: PropTypes.func,
};
