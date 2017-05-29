/**
 * Created by ulrichsinn on 04/24/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

import SplashImage from './SplashImage';

const SplashImageSlideShow = ( { onPageClick, pageContent, baseUrl } ) =>
  (
    <div id="splash" className="contentPanel">
      <div className="flexInner">
        <div className='splashImageWrapper'>
          SLIDE SHOE
        </div>
      </div>
    
    </div>
  );

SplashImageSlideShow.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.number,
  pageContent: PropTypes.array,
  baseUrl: PropTypes.string,
  onPageClick: PropTypes.func,
};

export default SplashImageSlideShow;