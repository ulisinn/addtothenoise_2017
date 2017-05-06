/**
 * Created by ulrichsinn on 04/19/2017.
 */
import '../styles/main.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { baseUrl } from '../store';

import DetailImage from './DetailImage';
import MainImage from './MainImage';
import AudioPlayerPanel from './AudioPlayerPanel';
import AudioPlayerPanelPhone from './AudioPlayerPanelPhone';
import MoreButton from './MoreButton';
import DetailSelector from './DetailSelector';
import ProjectDescription from './ProjectDescription';

export  default class PortfolioDetailAll extends Component {
  constructor( props ) {
    super(props);
    this.state = {
      image: [],
      currentIndex: 0,
      /*      project: {
       '_id': '26',
       'title': 'Logo and Brand development for GLAZA',
       '_title': 'Logo and Brand development for GLAZAClient: Greater Los Angeles Zoo AssociationDesign + Art Direction#e4e2d3',
       'date': '2017-04-18',
       'client': 'Client: Greater Los Angeles Zoo Association',
       'role': 'Design + Art Direction',
       'description': '',
       'backgroundColor': '#e4e2d3',
       'thumbnail': '/perch/resources/thumbnail/thumbnail-18.jpg',
       'mainImage': '/perch/resources/main/glaza.jpg',
       'landingPageImage': null,
       'alt': null,
       'displayLandingPageImage': null,
       'detailPages': [{
       'detailImage': {
       'assetID': '32',
       'title': 'GLAZA BRAND detail',
       '_default': '/perch/resources/details/glazabranddetail.jpg',
       'bucket': 'details',
       'path': 'glazabranddetail.jpg',
       'size': 87303,
       'w': 980,
       'h': 540,
       'mime': 'image/jpeg',
       'sizes': {
       'thumb': {
       'w': '150',
       'h': '82',
       'target_w': 150,
       'target_h': 150,
       'density': 2,
       'path': 'glazabranddetail-thumb@2x.jpg',
       'size': 16048,
       'mime': 'image/jpeg',
       'assetID': '33',
       },
       'wh480c1': {
       'w': '871',
       'h': '480',
       'target_w': false,
       'target_h': '480',
       'crop': 'true',
       'density': '1',
       'path': 'glazabranddetail-h480.jpg',
       'size': 89193,
       'mime': '',
       'assetID': '246',
       },
       },
       },
       }, {
       'detailImage': {
       'assetID': '36',
       'title': 'Glaza pg1',
       '_default': '/perch/resources/details/glazapg1.jpg',
       'bucket': 'details',
       'path': 'glazapg1.jpg',
       'size': 86649,
       'w': 980,
       'h': 480,
       'mime': 'image/jpeg',
       'sizes': {
       'thumb': {
       'w': '150',
       'h': '73',
       'target_w': 150,
       'target_h': 150,
       'density': 2,
       'path': 'glazapg1-thumb@2x.jpg',
       'size': 15885,
       'mime': 'image/jpeg',
       'assetID': '37',
       },
       'wh480c1': {
       'w': '979',
       'h': '480',
       'target_w': false,
       'target_h': '480',
       'crop': 'true',
       'density': '1',
       'path': 'glazapg1-h480.jpg',
       'size': 93527,
       'mime': '',
       'assetID': '247',
       },
       },
       },
       }, {
       'detailImage': {
       'assetID': '38',
       'title': 'Glaza pg2',
       '_default': '/perch/resources/details/glazapg2.jpg',
       'bucket': 'details',
       'path': 'glazapg2.jpg',
       'size': 78989,
       'w': 980,
       'h': 480,
       'mime': 'image/jpeg',
       'sizes': {
       'thumb': {
       'w': '150',
       'h': '73',
       'target_w': 150,
       'target_h': 150,
       'density': 2,
       'path': 'glazapg2-thumb@2x.jpg',
       'size': 14185,
       'mime': 'image/jpeg',
       'assetID': '39',
       },
       'wh480c1': {
       'w': '979',
       'h': '480',
       'target_w': false,
       'target_h': '480',
       'crop': 'true',
       'density': '1',
       'path': 'glazapg2-h480.jpg',
       'size': 89111,
       'mime': '',
       'assetID': '248',
       },
       },
       },
       }, {
       'detailImage': {
       'assetID': '40',
       'title': 'Glaza pg3',
       '_default': '/perch/resources/details/glazapg3.jpg',
       'bucket': 'details',
       'path': 'glazapg3.jpg',
       'size': 82264,
       'w': 980,
       'h': 480,
       'mime': 'image/jpeg',
       'sizes': {
       'thumb': {
       'w': '150',
       'h': '73',
       'target_w': 150,
       'target_h': 150,
       'density': 2,
       'path': 'glazapg3-thumb@2x.jpg',
       'size': 14794,
       'mime': 'image/jpeg',
       'assetID': '41',
       },
       'wh480c1': {
       'w': '979',
       'h': '480',
       'target_w': false,
       'target_h': '480',
       'crop': 'true',
       'density': '1',
       'path': 'glazapg3-h480.jpg',
       'size': 95288,
       'mime': '',
       'assetID': '249',
       },
       },
       },
       }, {
       'detailImage': {
       'assetID': '42',
       'title': 'Glaza pg4',
       '_default': '/perch/resources/details/glazapg4.jpg',
       'bucket': 'details',
       'path': 'glazapg4.jpg',
       'size': 74427,
       'w': 980,
       'h': 480,
       'mime': 'image/jpeg',
       'sizes': {
       'thumb': {
       'w': '150',
       'h': '73',
       'target_w': 150,
       'target_h': 150,
       'density': 2,
       'path': 'glazapg4-thumb@2x.jpg',
       'size': 14350,
       'mime': 'image/jpeg',
       'assetID': '43',
       },
       'wh480c1': {
       'w': '979',
       'h': '480',
       'target_w': false,
       'target_h': '480',
       'crop': 'true',
       'density': '1',
       'path': 'glazapg4-h480.jpg',
       'size': 88619,
       'mime': '',
       'assetID': '250',
       },
       },
       },
       }, {
       'detailImage': {
       'assetID': '34',
       'title': 'GLAZA invites',
       '_default': '/perch/resources/details/glazainvites.jpg',
       'bucket': 'details',
       'path': 'glazainvites.jpg',
       'size': 89202,
       'w': 980,
       'h': 540,
       'mime': 'image/jpeg',
       'sizes': {
       'thumb': {
       'w': '150',
       'h': '82',
       'target_w': 150,
       'target_h': 150,
       'density': 2,
       'path': 'glazainvites-thumb@2x.jpg',
       'size': 17500,
       'mime': 'image/jpeg',
       'assetID': '35',
       },
       'wh480c1': {
       'w': '871',
       'h': '480',
       'target_w': false,
       'target_h': '480',
       'crop': 'true',
       'density': '1',
       'path': 'glazainvites-h480.jpg',
       'size': 91839,
       'mime': '',
       'assetID': '251',
       },
       },
       },
       }, {
       'detailImage': {
       'assetID': '104',
       'title': 'Zoo 36thBookpsd',
       '_default': '/perch/resources/details/zoo36thbookpsd.jpg',
       'bucket': 'details',
       'path': 'zoo36thbookpsd.jpg',
       'size': 86357,
       'w': 980,
       'h': 480,
       'mime': 'image/jpeg',
       'sizes': {
       'thumb': {
       'w': '150',
       'h': '73',
       'target_w': 150,
       'target_h': 150,
       'density': 2,
       'path': 'zoo36thbookpsd-thumb@2x.jpg',
       'size': 16161,
       'mime': 'image/jpeg',
       'assetID': '105',
       },
       'wh480c1': {
       'w': '979',
       'h': '480',
       'target_w': false,
       'target_h': '480',
       'crop': 'true',
       'density': '1',
       'path': 'zoo36thbookpsd-h480.jpg',
       'size': 94388,
       'mime': '',
       'assetID': '253',
       },
       },
       },
       }, {
       'detailImage': {
       'assetID': '106',
       'title': 'Zoo 37thBookpsd',
       '_default': '/perch/resources/details/zoo37thbookpsd.jpg',
       'bucket': 'details',
       'path': 'zoo37thbookpsd.jpg',
       'size': 105281,
       'w': 980,
       'h': 540,
       'mime': 'image/jpeg',
       'sizes': {
       'thumb': {
       'w': '150',
       'h': '82',
       'target_w': 150,
       'target_h': 150,
       'density': 2,
       'path': 'zoo37thbookpsd-thumb@2x.jpg',
       'size': 20779,
       'mime': 'image/jpeg',
       'assetID': '107',
       },
       'wh480c1': {
       'w': '871',
       'h': '480',
       'target_w': false,
       'target_h': '480',
       'crop': 'true',
       'density': '1',
       'path': 'zoo37thbookpsd-h480.jpg',
       'size': 102402,
       'mime': '',
       'assetID': '254',
       },
       },
       },
       }, {
       'detailImage': {
       'assetID': '108',
       'title': 'Zoo 38thBook',
       '_default': '/perch/resources/details/zoo38thbook.jpg',
       'bucket': 'details',
       'path': 'zoo38thbook.jpg',
       'size': 85855,
       'w': 980,
       'h': 480,
       'mime': 'image/jpeg',
       'sizes': {
       'thumb': {
       'w': '150',
       'h': '73',
       'target_w': 150,
       'target_h': 150,
       'density': 2,
       'path': 'zoo38thbook-thumb@2x.jpg',
       'size': 15343,
       'mime': 'image/jpeg',
       'assetID': '109',
       },
       'wh480c1': {
       'w': '979',
       'h': '480',
       'target_w': false,
       'target_h': '480',
       'crop': 'true',
       'density': '1',
       'path': 'zoo38thbook-h480.jpg',
       'size': 99855,
       'mime': '',
       'assetID': '255',
       },
       },
       },
       }],
       'team': 'Anabel',
       'work': 'print',
       '_page': '/pages/portfolio_print.php',
       '_pageID': '1',
       '_sortvalue': '1017',
       },*/
      project: {},
    };
  }
  
  componentDidMount() {
    this.setState({ project: this.props.pageContent });
    console.log('componentDidMount', this.state.project);
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
    console.log('getMainImage', currentImage, this.state.image);
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


PortfolioDetailAll.propTypes = {
  pageContent: PropTypes.object,
  controlsColor: PropTypes.string,
  isPhone: PropTypes.bool,
};