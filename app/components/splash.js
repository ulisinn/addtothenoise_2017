/**
 * Created by ulrichsinn on 04/19/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

import SplashImage from './SplashImage';
import EnterButton from './EnterButton';

const SplashScreen = ({ onPageClick, pageContent, baseUrl }) =>
  (
    <div id="splash" className="contentPanel">
      <div className="flexInner">
        <EnterButton label='ENTER'/>
        <SplashImage url={baseUrl + pageContent[1].landingPageImage}></SplashImage>
      </div>
    </div>
  );

SplashScreen.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.number,
  props: PropTypes.obj,
  pageContent: PropTypes.array,
  baseUrl: PropTypes.string,
  onPageClick: PropTypes.func,
};

export default SplashScreen;