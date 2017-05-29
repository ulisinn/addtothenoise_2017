/**
 * Created by ulrichsinn on 04/19/2017.
 */
import '../styles/main.scss';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
import { baseUrl } from '../store';

import DetailImage from './DetailImage';
import MainImage from './MainImage';
import AudioPlayerPanel from './AudioPlayerPanel';
import AudioPlayerPanelPhone from './AudioPlayerPanelPhone';
import MoreButton from './MoreButton';
import DetailSelector from './DetailSelector';
import ProjectDescription from './ProjectDescription';

class PortfolioDetailAll extends Component {
  constructor( props ) {
    super(props);
    this.state = {
      image: [],
      currentIndex: 0,
      project: {},
    };
  }
  
  componentWillMount() {
    // console.log(this.props.location.query,'component will mount', this.props);
    if (!this.props.location.query.id) {
      browserHistory.push('/');
    }
    if (!this.props.pageContent) {
      browserHistory.push('/');
    }
  }
  
  componentDidMount() {
    this.setState({ project: this.props.pageContent });
    // console.log('componentDidMount', this.props);
    const detailPages = this.props.pageContent.detailPages || [];
    let image = [];
    if (detailPages.length) {
      image = detailPages.map(function ( item, index ) {
        return baseUrl + item.detailImage._default;
      });
      
    }
    
    image.splice(0, 0, baseUrl + this.props.pageContent.mainImage);
    
    this.setState({
      image: image,
      showMoreButton: true,
      mpeg: (this.props.pageContent.mpeg) ? baseUrl + this.props.pageContent.mpeg : '',
    });
  }
  
  componentWillReceiveProps() {
    //
  }
  
  render() {
    const index = this.state.currentIndex;
    const currentImage = this.state.image[index];
    const bgColor = this.state.project.backgroundColor;
    const controlsColor = (this.state.project.controlsColor) ? this.state.project.controlsColor : 'white';
    const isAudio = (this.state.mpeg) ? true : false;
    const mpeg = this.state.mpeg;
    let currentDescription = {};
    if (index === 0) {
      currentDescription = {
        title: this.state.project.title || '',
        photography: this.state.project.photography || '',
        role: this.state.project.role || '',
        client: this.state.project.client || '',
      };
    }
    console.log('=== render', this.state.project, this.state.image);
    if (this.props.isPhone) {
      return this.getPhoneContent(this.state.image, currentDescription, bgColor, controlsColor, isAudio, mpeg);
    } else {
      return this.getDesktopContent(index, currentDescription, currentImage, bgColor, controlsColor, isAudio, mpeg);
    }
  }
  
  getDesktopContent( index, currentDescription, currentImage, bgColor, controlsColor, isAudio, mpeg ) {
    console.log('getDesktopContent', arguments);
    return (
      <div id="portfolioDetail" className="contentPanel">
        <div className="flexInner">
          
          {(index === 0) ? this.getMainImage(index, currentDescription, currentImage, bgColor, controlsColor, isAudio, mpeg) :
            <DetailImage currentDescription={currentDescription}
                         backgroundColor={this.state.project.backgroundColor}
                         image={currentImage}
                         currentIndex={index}/>}
          {(index === 0) ? null : <DetailSelector onSetCurrentIndex={( index ) => this.onSetCurrentIndex(index)}
                                                  imageList={this.state.image}
                                                  currentIndex={this.state.currentIndex}/>}
          {(index === 0 && this.state.image.length > 1) ? <MoreButton onMoreClick={() => this.onMoreClick()}/> : null}
        </div>
      </div>);
  }
  
  getPhoneContent( images, currentDescription, bgColor, controlsColor, isAudio, mpeg ) {
    console.log('getPhoneContent', images.length, currentDescription, bgColor, controlsColor, isAudio, mpeg);
    const detailImagePhone = images.map(function ( item, index ) {
      console.log('----- ', item);
      return (isAudio) ? <AudioPlayerPanelPhone key={index}
                                                currentDescription={currentDescription}
                                                backgroundColor={bgColor}
                                                controlsColor={controlsColor}
                                                image={item}
                                                currentIndex={index}
                                                audio={mpeg}/> :
        <div className='detailImagePhone' key={index}
             style={{
               /*
                backgroundColor: bgColor,
                */
             }}>
          <img src={item} alt=""/>
        </div>;
    });
    
    return (
      <div id="portfolioDetailPhone" className="contentPanel">
        <div className="flexInnerPhone">
          <ProjectDescription {...currentDescription}/>
          {detailImagePhone}
        </div>
      </div>);
  }
  
  getMainImage( index, currentDescription, currentImage, bgColor, controlsColor, isAudio, mpeg ) {
    console.log('getMainImage', arguments, this.state.image);
    return (isAudio) ?
      <AudioPlayerPanel currentDescription={currentDescription}
                        backgroundColor={bgColor}
                        controlsColor={controlsColor}
                        image={currentImage}
                        currentIndex={index}
                        audio={mpeg}/>
      :
      <MainImage currentDescription={currentDescription}
                 backgroundColor={bgColor}
                 image={currentImage}
                 currentIndex={index}/>;
  }
  
  onMoreClick() {
    this.setState({ currentIndex: 1 });
  }
  
  onSetCurrentIndex( index ) {
    this.setState({ currentIndex: index });
  }
}

function getPageContent( state, id ) {
  const topLevelContent = state;
  let all = [];
  
  for (let prop in topLevelContent) {
    let obj = topLevelContent[prop];
    if (parseInt(obj._id) == id) {
      all.push(obj);
    }
  }
  if (all[0]) {
    // console.log(JSON.stringify(all[0]));
    return all[0];
  }
  console.log('getPageContent', state, all.length);
  if (all.length == 0) {
    // browserHistory.push('/');
  } else {
    console.log('component will mount', this.props.location.query);
    return all;
  }
}

const mapStateToProps = ( state ) => {
  const queryString = require('query-string');
  const parsed = queryString.parse(location.search);
  
  console.log(' ================ mapStateToProps', parsed.id, state.metaDataReducer.data.isPhone);
  return {
    pageContent: getPageContent(state.portfolioReducer,  parsed.id),
    controlsColor: '#ff0000',
    isPhone: state.metaDataReducer.data.isPhone,
  };
};

function mapDispatchToProps( dispatch ) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PortfolioDetailAll);

PortfolioDetailAll.propTypes = {
  pageContent: PropTypes.object,
  controlsColor: PropTypes.string,
  isPhone: PropTypes.bool,
  query: PropTypes.object,
  location: PropTypes.object,
};