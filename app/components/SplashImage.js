/**
 * Created by ulrichsinn on 04/24/2017.
 */

import React from 'react';
import { Link } from 'react-router';

import PropTypes from 'prop-types';

const SplashImage = ({ url, id }) =>
  (
      <Link to={'/project?id=' + id}>
        <img className="splashImage" src={ url }/>
      </Link>
  );

SplashImage.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
};

export default SplashImage;