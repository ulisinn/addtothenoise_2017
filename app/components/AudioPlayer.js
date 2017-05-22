/**
 * Created by ulrichsinn on 04/28/2017.
 */

import moment from 'moment';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Howl} from 'howler';
import AudioPlayerControls from './AudioPlayerControls';

let audioFile;
let audioID, intervalID = -1;

export default class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html5:true,
      isPlaying: 0,
      isPaused: 0,
      duration: '00:00',
      currentTime: '00:00',
      currentVolume: 0.75,
      currentVolumeFlag: 1,
      mounted: true,
    };
    
  }
  
  componentDidMount() {
  }
  
  componentWillUnmount() {
    try {
      audioFile.stop();
    } catch (e) {
      //
    }
    this.killInterval();
  }
  
  startInterval() {
    if (intervalID) {
      this.killInterval();
    }
    
    intervalID = setInterval(() => this.tick(), 1000);
    console.log('startInterval', intervalID);
  }
  
  killInterval() {
    clearInterval(intervalID);
  }
  
  
  tick() {
    let total = moment(audioFile.duration() * 1000).format('mm:ss'),
      now = moment(audioFile.seek() * 1000).format('mm:ss');
    
    this.setState({
      currentTime: now,
      duration: total,
    });
    
    // console.log('tick', now + ' / ' + total);
  }
  
  render() {
    return (<AudioPlayerControls {...this.state}
                                 controlsColor={this.props.controlsColor}
                                 onPlayBtnClick={() => this.onPlayBtnClick()}
                                 onPauseBtnClick={() => this.onPauseBtnClick()}
                                 onSpeakerBtnClick={() => this.onSpeakerBtnClick()}
    />);
  }
  
  onPlayBtnClick() {
    // console.log('onPlayBtnClick', this);
    this.playAudio();
  }
  
  onPauseBtnClick() {
    console.log('onPauseBtnClick', this);
    this.pauseAudio();
  }
  
  onSpeakerBtnClick() {
    let currentVolume, currentVolumeFlag = this.state.currentVolumeFlag;
    
    currentVolumeFlag = (currentVolumeFlag === 0) ? 1 : 0;
    currentVolume = (currentVolumeFlag === 0) ? 0 : 0.75;
    this.setState({ currentVolumeFlag, currentVolume });
    try {
      audioFile.volume(currentVolume);
    } catch (e) {
      //
    }
    console.log('onSpeakerBtnClick', this.state);
  }
  
  playAudio() {
    const audio = this.props.audio;
    const isPaused = this.state.isPaused;
    const audioEnd = () => {
      console.log('audioEnd');
      this.killInterval();
      this.setState({
        isPlaying: 0,
        isPaused: 0,
      });
    };
    
    if (!audioFile) {
      audioFile = new Howl({
        src: [audio],
        volume: this.state.currentVolume,
        onend: audioEnd,
      });
    }
    
    audioID = audioFile.play();
    this.setState({
      isPlaying: 1,
      isPaused: 0,
    });
    this.startInterval();
  }
  
  pauseAudio() {
    audioFile.pause(audioID);
    this.setState({ isPaused: 1 });
    
  }
}

AudioPlayer.propTypes = {
  audio: PropTypes.string,
  controlsColor: PropTypes.string,
};