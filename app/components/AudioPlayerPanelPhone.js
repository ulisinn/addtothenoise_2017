/**
 * Created by ulrichsinn on 04/27/2017.
 */

import '../styles/main.css';

import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from './AudioPlayer';

const AudioPlayerPanelPhone = ( { backgroundColor, controlsColor, image, currentDescription, currentIndex, audio } ) => (
  <div className='detailImageContainerPhone' style={{
    marginTop: '1em',
    backgroundColor: backgroundColor,
    width: '100%',
    paddingTop: '0.6em',
  }}>
    <AudioPlayer audio={audio} controls={true} controlsColor={controlsColor}></AudioPlayer>
  </div>
);


AudioPlayerPanelPhone.propTypes = {
  controlsColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
  currentDescription: PropTypes.object,
  currentIndex: PropTypes.number,
  audio: PropTypes.string,
};

export default AudioPlayerPanelPhone;
