/**
 * Created by ulrichsinn on 04/19/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

import SplashImage from './SplashImage';

const SplashScreen = ( { onPageClick, pageContent, baseUrl } ) =>
  (
    <div id="splash" className="contentPanel">
      <div className="flexInner">
        {/*<EnterButton label='ENTER'/>*/}
        <p className='splashDescription'>{pageContent[0].alt}</p>
        <SplashImage url={baseUrl + pageContent[0].landingPageImage} id={pageContent[0]._id}></SplashImage>
      </div>
    </div>
  );

SplashScreen.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.number,
  pageContent: PropTypes.array,
  baseUrl: PropTypes.string,
  onPageClick: PropTypes.func,
};

export default SplashScreen;