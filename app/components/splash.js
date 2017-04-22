/**
 * Created by ulrichsinn on 04/19/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

const SplashScreen = () =>
  (<div id="splash" className="contentPanel">
    <div className="flexInner">
      <div>EnterButton</div>
      <div>SplashScreenImage</div>
    </div>
  </div>);

SplashScreen.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.number,
};

export default SplashScreen;