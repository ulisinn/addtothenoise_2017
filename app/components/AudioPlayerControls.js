/**
 * Created by ulrichsinn on 04/28/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

let pauseBtn, playBtn, speakerBtn;

export default class AudioPlayerControls extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    playBtn = document.getElementById('PlayBtn');
    playBtn.addEventListener('click', () => this.onPlayBtnClick());
    
    pauseBtn = document.getElementById('PauseBtn');
    pauseBtn.addEventListener('click', () => this.onPauseBtnClick());
    speakerBtn = document.getElementById('Speaker');
    speakerBtn.addEventListener('click', () => this.onSpeakerBtnClick());
  }
  
  componentWillUnmount() {
    playBtn.removeEventListener('click', () => this.onPlayBtnClick());
    pauseBtn.removeEventListener('click', () => this.onPauseBtnClick());
    speakerBtn.removeEventListener('click', () => this.onSpeakerBtnClick());
  }
  
  
  render() {
    // console.log('----> render', this.props.audioFilesState);

    
    const playBtnStyle = (this.props.isPlaying === 1 ) ? (this.props.isPaused === 1 ) ? 'visible' : 'hidden' : 'visible';
    const pauseBtnStyle = (this.props.isPlaying === 1 ) ? (this.props.isPaused === 1 ) ? 'hidden' : 'visible' : 'hidden';
    const currentTime = (this.props.currentTime && this.props.audioFilesState ==='loaded') ? this.props.currentTime : '00:00';
    const duration = (this.props.duration) ? this.props.duration : '00:00';
    const controlsColor = this.props.controlsColor;
    const currentVolumeFlag = this.props.currentVolumeFlag;
    
    return (
      <div id='audioPlayerControls'>
        <svg id='Layer_1' viewBox='0 0 200 50'>
          <g id='PlayBtn' visibility={playBtnStyle}>
            <rect fill='rgba(255,255,255,0.001'
                  x='7.25'
                  y='5.25'
                  width='37'
                  height='36'
                  stroke={controlsColor}
                  strokeWidth={0.5}/>
            <polygon points='18.5 34.5 36.5 23.5 18.5 12.5 18.5 34.5' fill={controlsColor}/>
          </g>
          <g id='PauseBtn' visibility={pauseBtnStyle}>
            <rect fill='rgba(255,255,255,0.001)'
                  x='7.25'
                  y='5.25'
                  width='37'
                  height='36'
                  stroke={controlsColor}
                  strokeWidth={0.5}/>
            
            <rect x='18' y='13' width='6' height='22' fill={controlsColor}/>
            <rect x='27' y='13' width='6' height='22' fill={controlsColor}/>
          </g>
          <text id='Durations' transform='translate(52 29.28)'fill={controlsColor}>{currentTime}/{duration}</text>
          
          <g transform='translate(-130 0)'>
            <g id='Speaker'>
              <rect fill='rgba(255,255,255,0.001'
                    x='265'
                    y='5.25'
                    width='56'
                    height='37.5'
                    stroke={controlsColor}
                    strokeWidth={0.5}/>
              <polygon id='polygon1' fill={controlsColor}
                       points='294.64 10.71 285.06 19 276 19 276 29.66 284.93 29.66 294.64 38.06 294.64 10.71'/>
            </g>
            <g id='Mute' visibility={(currentVolumeFlag === 0) ? 'visible' : 'hidden'}>
              <path id='path3003-1' d='M311.4,31.09,299.82,17.53'
                    strokeLinecap='round'
                    fill='none'
                    stroke={controlsColor}
                    strokeWidth='2px'/>
              <path id='path3003' d='M299.82,31.09,311.4,17.53'
                    strokeLinecap='round'
                    fill='none'
                    stroke={controlsColor}
                    strokeWidth='2px'/>
            </g>
            <g id='Unmute'>
              <path visibility={(currentVolumeFlag === 1) ? 'visible' : 'hidden'} id='path1'
                    d='M299.73,29.88a11.21,11.21,0,0,0,0-12'
                    strokeLinecap='round'
                    fill='none'
                    stroke={controlsColor}
                    strokeWidth='2px'/>
              <path visibility={(currentVolumeFlag === 1) ? 'visible' : 'hidden'} id='path2'
                    d='M303.61,14a16.73,16.73,0,0,1,.05,19.84'
                    strokeLinecap='round'
                    fill='none'
                    stroke={controlsColor}
                    strokeWidth='2px'/>
              <path visibility={(currentVolumeFlag === 1) ? 'visible' : 'hidden'} id='path1-2'
                    data-name='path1'
                    d='M307.32,37.46a21.83,21.83,0,0,0-.06-27.14'
                    strokeLinecap='round'
                    fill='none'
                    stroke={controlsColor}
                    strokeWidth='2px'/>
            </g>
          </g>
        </svg>
      </div>
    );
  }
  
  onPlayBtnClick() {
    this.props.onPlayBtnClick();
  }
  
  onPauseBtnClick() {
    this.props.onPauseBtnClick();
  }
  
  onSpeakerBtnClick() {
    this.props.onSpeakerBtnClick();
  }
}


AudioPlayerControls.propTypes = {
  pageContent: PropTypes.object,
  currentTime: PropTypes.string,
  duration: PropTypes.string,
  isPlaying: PropTypes.number,
  isPaused: PropTypes.number,
  onPlayBtnClick: PropTypes.func,
  onPauseBtnClick: PropTypes.func,
  onSpeakerBtnClick: PropTypes.func,
  currentVolumeFlag: PropTypes.number,
  controlsColor: PropTypes.string,
  audioFilesState: PropTypes.string,
};