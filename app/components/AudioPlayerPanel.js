/**
 * Created by ulrichsinn on 04/27/2017.
 */

import '../styles/main.css';

import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from './AudioPlayer';
import ProjectDescription from './ProjectDescription';

const AudioPlayerPanel = ({ backgroundColor, controlsColor, image, currentDescription, currentIndex, audio }) => (
  <div className='detailImageContainer'>
    <div
      className="mainImage"
      style={{
        backgroundImage: 'url(' + image + ')',
        backgroundColor: backgroundColor,
      }}>
      {(currentIndex > 0) ? <img src={image }/> : null}
    </div>
    <AudioPlayer audio={audio} controls={true} controlsColor={controlsColor}></AudioPlayer>
    <ProjectDescription {...currentDescription}/>
  </div>
);


AudioPlayerPanel.propTypes = {
  controlsColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
  currentDescription: PropTypes.object,
  currentIndex: PropTypes.number,
  audio: PropTypes.string,
};

export default AudioPlayerPanel;
