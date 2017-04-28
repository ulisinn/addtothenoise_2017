/**
 * Created by ulrichsinn on 04/24/2017.
 */

import React from 'react';

import PropTypes from 'prop-types';

const SplashImage = ({ url }) =>
  (
    <img className="splashImage" src={ url }/>
  );

SplashImage.propTypes = {
  url: PropTypes.string,
};

export default SplashImage;