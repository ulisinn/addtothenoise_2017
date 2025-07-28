/**
 * Created by ulrichsinn on 04/27/2017.
 */

import '../styles/main.css';

import React from 'react';
import PropTypes from 'prop-types';

import {actual} from 'actual';
import ProjectDescription from './ProjectDescription';

const DetailImage = ({ backgroundColor, image, currentDescription, currentIndex }) => (
  <div className='detailImageContainer'>
    <div>
      <img src={image }/>
    </div>
    <ProjectDescription {...currentDescription}/>
  </div>
);


DetailImage.propTypes = {
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
  currentDescription: PropTypes.object,
  currentIndex: PropTypes.number,
};

export default DetailImage;
