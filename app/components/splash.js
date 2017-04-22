/**
 * Created by ulrichsinn on 04/19/2017.
 */

import React from 'react';
import {Link} from 'react-router';

import PropTypes from 'prop-types';

const SplashScreen = () =>
  (<div id="splash" className="contentPanel">
    <div className="flexInner">
      <div><Link to='/portfolio'>ENTER</Link></div>
      <div>SplashScreenImage</div>
    </div>
  </div>);

SplashScreen.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.number,
};

export default SplashScreen;