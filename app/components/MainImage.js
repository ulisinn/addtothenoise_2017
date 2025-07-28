/**
 * Created by ulrichsinn on 04/27/2017.
 */

import '../styles/main.css';

import React from 'react';
import PropTypes from 'prop-types';

import {actual} from 'actual';
import ProjectDescription from './ProjectDescription';

const MainImage = ({ backgroundColor, image, currentDescription, currentIndex }) => (
  <div className='detailImageContainer'>
    <div
      className="mainImage"
      style={{
/*
        backgroundImage: 'url(' + image + ')',
*/
        backgroundColor: backgroundColor,
      }}
    >
      {(currentIndex >= 0)?<img src={image }/>:null}
    </div>
    <ProjectDescription {...currentDescription}/>
  </div>
);


MainImage.propTypes = {
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
  currentDescription: PropTypes.object,
  currentIndex: PropTypes.number,
};

export default MainImage;
