import '../styles/main.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import ThumbnailPhone from './ThumbnailPhone';
import BlankThumbnail from './BlankThumbnail';
import ProjectDescription from './ProjectDescription';

export default class PortfolioMaster extends Component {
  constructor( props ) {
    super(props);
    this.onPageMouseEnter = this.onPageMouseEnter.bind(this);
    this.onPageMouseLeave = this.onPageMouseLeave.bind(this);
    
    this.state = { currentDescription: 'current description' };
  }
  
  componentWillReceiveProps( props ) {
    console.log('componentWillReceiveProps', props);
    this.setState({ currentDescription: ' ' });
  }
  
  render() {
    const isPhone = this.props.isPhone;
    
    
    if (isPhone) {
      return (
        <div id="portfolio_phone" className="contentPanel">
          <div className="flexInner">
            <div id='flexThumbnail'>{this.getPhoneThumbnail()}</div>
            <ProjectDescription {...this.state.currentDescription}/>
          </div>
        </div>
      );
    } else {
      return (
        <div id="portfolio" className="contentPanel">
          <div className="flexInner">
            <div id='flexThumbnail'>{this.getThumbnail()}</div>
            <ProjectDescription {...this.state.currentDescription}/>
          </div>
        </div>
      );
    }
  }
  
  getThumbnail() {
    const baseUrl = this.props.baseUrl;
    const onPageClick = this.props.onPageClick;
    const onPageMouseEnter = this.onPageMouseEnter;
    const onPageMouseLeave = this.onPageMouseLeave;
    const thumbnail = this.props.pageContent.map(function ( item, index ) {
      if (item._id) {
        return <Thumbnail key={index} {...item}
                          baseUrl={baseUrl}
                          onPageClick={onPageClick}
                          onPageMouseEnter={( id ) => onPageMouseEnter(id)}
                          onPageMouseLeave={( id ) => onPageMouseLeave(id)}/>;
      } else {
        return <BlankThumbnail key={index}/>;
      }
    });
    
    return thumbnail;
  }
  
  getPhoneThumbnail() {
    const baseUrl = this.props.baseUrl;
    const onPageClick = this.props.onPageClick;
    const onPageMouseEnter = this.onPageMouseEnter;
    const onPageMouseLeave = this.onPageMouseLeave;
    const thumbnail = this.props.pageContent.map(function ( item, index ) {
      if (item._id) {
        return <ThumbnailPhone key={index} {...item}
                          baseUrl={baseUrl}
                          onPageClick={onPageClick}
                          onPageMouseEnter={( id ) => onPageMouseEnter(id)}
                          onPageMouseLeave={( id ) => onPageMouseLeave(id)}/>;
      } else {
        return null;
      }
    });
    
    return thumbnail;
  }
  
  
  onPageMouseEnter( id ) {
    const all = this.props.pageContent;
    const result = {};
    for (let i = 0; i < all.length; i++) {
      if (id === all[i]._id) {
        result.title = all[i].title || '';
        result.photography = all[i].photography || '';
        result.role = all[i].role || '';
        result.client = all[i].client || '';
      }
    }
    this.setState({ currentDescription: result });
    
  }
  
  onPageMouseLeave( id ) {
    // console.log('onPageMouseLeave id', this);
    this.setState({ currentDescription: '. ' });
  }
}

PortfolioMaster.propTypes = {
  pageContent: PropTypes.array,
  baseUrl: PropTypes.string,
  onPageClick: PropTypes.func,
  onPageMouseEnter: PropTypes.func,
  onPageMouseLeave: PropTypes.func,
  isPhone: PropTypes.bool,
};

