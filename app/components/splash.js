/**
 * Created by ulrichsinn on 04/19/2017.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import Slider from 'react-slick';
import SplashImage from './SplashImage';


export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {currentIndex:0};
    this.beforeIndexChange = this.beforeIndexChange.bind(this);
    this.handleSlideShowClick = this.handleSlideShowClick.bind(this);
  }
  componentWillMount(){
    const currentIndex = 0;
    this.setState({currentIndex});
  }
  
  render() {
    const { onPageClick, pageContent, baseUrl } = this.props;
    const beforeIndexChange = this.beforeIndexChange;
    if (pageContent.length >= 3) {
      var settings = {
        dots: true,
        infinite: true,
        ease:'ease-out',
        speed: 3000,
        autoplay:true,
        fade:true,
        beforeChange:beforeIndexChange,
      };
      const slideArray = this.getSlideShowContent();
      return (
        <div id="splash" className="contentPanel">
          <div className="flexInner" >
            <Slider {...settings}>
              {slideArray}
            </Slider>
          </div>
        </div>
      );
    } else {
      return (
        //= ( { onPageClick, pageContent, baseUrl } ) =>
        <div id="splash" className="contentPanel">
          <div className="flexInner">
            <div className='splashImageWrapper'>
              <p className='splashDescription'>{pageContent[0].alt}</p>
              <SplashImage url={baseUrl + pageContent[0].landingPageImage}
                           id={pageContent[0]._id}></SplashImage>
            </div>
          </div>
        </div>
      );
    }
  }
  
  beforeIndexChange(currentIndex){
    // console.log('beforeIndexChange', currentIndex);
    this.setState({currentIndex});
  }
  
  handleSlideShowClick(){
    const { onPageClick, pageContent, baseUrl } = this.props;
    const currentIndex = this.state.currentIndex;
    // console.log('handleSlideShowClick', pageContent[currentIndex]._id);
    browserHistory.push('/project?id=' + pageContent[currentIndex]._id);
  }
  getSlideShowContent(){
    const { onPageClick, pageContent, baseUrl } = this.props;
    const handleSlideShowClick = this.handleSlideShowClick;
  
    const pages =  pageContent.map((content, i) => {
      return (<div key={i}>
          <p className='splashDescription'>{content.alt}</p>
          <img className="splashImage"
               src={baseUrl + content.landingPageImage}
               style={{cursor:'pointer'}}
               onClick={handleSlideShowClick}/>
      </div>);
    });
    return pages;
  }
}

SplashScreen.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.number,
  pageContent: PropTypes.array,
  baseUrl: PropTypes.string,
  onPageClick: PropTypes.func,
};

// export default SplashScreen;