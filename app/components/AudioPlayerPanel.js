/**
 * Created by ulrichsinn on 04/27/2017.
 */

import '../styles/main.scss';

import React from 'react';
import PropTypes from 'prop-types';

import {actual} from 'actual';
import ProjectDescription from './ProjectDescription';

const AudioPlayerPanel = ({ backgroundColor, image, currentDescription, currentIndex, audio }) => (
  <div className='detailImageContainer'>
    <div
      className="mainImage"
      style={{
        backgroundImage: 'url(' + image + ')',
        backgroundColor: backgroundColor,
      }}>
      {(currentIndex > 0) ? <img src={image }/> : null}
    </div>
    <audio src={audio} controls={true}></audio>
    <ProjectDescription {...currentDescription}/>
  </div>
);


AudioPlayerPanel.propTypes = {
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
  currentDescription: PropTypes.object,
  currentIndex: PropTypes.number,
  audio: PropTypes.string,
};

export default AudioPlayerPanel;
