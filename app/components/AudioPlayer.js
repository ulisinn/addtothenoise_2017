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
      audioFilesState:null,
      audioFile:null,
    };
    this.tick = this.tick.bind(this);
  }
  
  componentDidMount() {
    this.setState({audioFile:null});
  }
  
  componentWillUnmount() {
    try {
      this.state.audioFile.stop();
    } catch (e) {
      //
    }
    this.killInterval();
  }
  
  
  startInterval() {
    if (this.state.intervalID) {
      this.killInterval();
    }
    
    const intervalID = setInterval(() => this.tick(), 500);
    this.setState({intervalID});
    console.log('startInterval', this.state.intervalID);
  }
  
  killInterval() {
    const interval = this.state.intervalID;
    const intervalID = null;
    clearInterval(interval);
    this.setState({intervalID});
    
  }
  
  
  tick() {
    const audioFilesState = this.state.audioFilesState;
      // console.log('****** tick', this.state.audioFile.state(),audioFilesState);
    if(audioFilesState !== this.state.audioFile.state()){
      this.setState({audioFilesState:audioFile.state()});
    }
    let total = moment(this.state.audioFile.duration() * 1000).format('mm:ss'),
      now = moment(this.state.audioFile.seek() * 1000).format('mm:ss');
    
    this.setState({
      currentTime: now,
      duration: total,
    });
    
    // console.log('tick', now + ' / ' + total);
  }
  
  render() {
    const audioFilesState = this.state.audioFilesState;
  
    return (<AudioPlayerControls {...this.state}
                                 audioFilesState={audioFilesState}
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
      this.state.audioFile.volume(currentVolume);
    } catch (e) {
      //
    }
    console.log('onSpeakerBtnClick', this.state);
  }
  
  playAudio() {
    console.log('PLAY AUDIO', this.props);
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
    
    if (!this.state.audioFile) {
      audioFile = new Howl({
        src: [audio],
        volume: this.state.currentVolume,
        onend: audioEnd,
        onpause:() =>{
          // console.log('onpause', arguments);
        },
      });
      this.setState({audioFile});
    }
    
    audioID = this.state.audioFile.play();
    // console.log('audioID',audioID);
    this.setState({
      isPlaying: 1,
      isPaused: 0,
    });
    this.startInterval();
  }
  
    pauseAudio() {
    console.log('PAUSE',this.state.audioFile,audioID );
    this.state.audioFile.pause();
    this.setState({ isPaused: 1 });
  }
}

AudioPlayer.propTypes = {
  audio: PropTypes.string,
  controlsColor: PropTypes.string,
};