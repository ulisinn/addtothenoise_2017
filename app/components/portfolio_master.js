import '../styles/main.scss';

import React, { Component } from 'react';
import * as _ from 'lodash';
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
    
    this.state = {
      currentDescription: 'current description',
      thumbnail:null,
      thumbnailPhone:null,
    };
  }
  componentWillMount(){
    console.log('componentWillMount', this.props);
    const thumb = this.setThumbnail(this.props);
    const thumbPhone = this.setPhoneThumbnail(this.props);
    this.setState({thumbnail:thumb,
      thumbnailPhone:thumbPhone,
      currentDescription: ' '});
  
  }
  componentWillReceiveProps( newProps ) {
    console.log('componentWillReceiveProps', newProps);
    const thumb = this.setThumbnail(newProps);
    const thumbPhone = this.setPhoneThumbnail(newProps);
    this.setState({
      thumbnail:thumb,
      thumbnailPhone:thumbPhone,
      currentDescription: ' '});
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
  
  getThumbnail(){
    return this.state.thumbnail;
  }
  
  setThumbnail(props){
    const maxItems = 24,
      maxMusic = 8,
      range = Array.from(Array(maxItems).keys());
    let content = _.shuffle(props.pageContent);
    const path = props.location.pathname;
    if(path === '/music'){
      while(content.length > maxMusic){
        content.pop();
      }
    }else{
      while(content.length >= maxItems){
        content.pop();
      }
    }
    let pageContent =  this.buildList(content);
    console.log('getThumbnail', path, pageContent);
    
    const baseUrl =props.baseUrl;
    const onPageClick = props.onPageClick;
    const onPageMouseEnter = this.onPageMouseEnter;
    const onPageMouseLeave = this.onPageMouseLeave;
    
    const thumbnail = range.map(function ( d, index ) {
      if(pageContent[index] && pageContent[index]._id){
        // console.log(index, pageContent[index]);
        const item = pageContent[index];
        const id = item._id;
        return <Thumbnail key={index} {...item}
                          baseUrl={baseUrl}
                          onPageClick={onPageClick}
                          onPageMouseEnter={( id ) => onPageMouseEnter(id)}
                          onPageMouseLeave={( id ) => onPageMouseLeave(id)}/>;
      }
      return <BlankThumbnail key={index}/>;
    });
  
    return thumbnail;
  }
  
  
  setPhoneThumbnail(props) {
    const baseUrl = props.baseUrl;
    const onPageClick = props.onPageClick;
    const onPageMouseEnter = this.onPageMouseEnter;
    const onPageMouseLeave = this.onPageMouseLeave;
    const thumbnail = props.pageContent.map(function ( item, index ) {
    // console.log('setPhoneThumbnail', {...item});
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
  getPhoneThumbnail(){
    return this.state.thumbnailPhone;
  }
  
  buildList(all){
    console.log('getResult', all.length);
    const maxItems = 24;
    const input = all.map((d,i) => {
      return d;
    });
    
    let result = [],
      range = Array.from(Array(maxItems).keys()),
      indices = [];
    
    for (let i = 0; i < maxItems; i++) {
      result.push({});
    }
    
    while (range.length > 0) {
      let randomInt = Math.floor(Math.random() * range.length);
      indices.push(range.splice(randomInt, 1)[0]);
    }
    
    while (input.length > 0 && indices.length > 0) {
      let item = input.splice(0, 1)[0];
      let index = indices.splice(0, 1)[0];
      result[index] = item;
    }
    console.log('getFilteredPortfolioContent', result.length);
    return result;
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
  location: PropTypes.object,
};

