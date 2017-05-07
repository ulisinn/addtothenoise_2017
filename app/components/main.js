import moment from 'moment';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';

import Header from '../components/header';
import Footer from '../components/footer';
import { baseUrl } from '../store';

const maxItems = 24;

class Main extends Component {
  
  constructor( props ) {
    super(props);
    // console.log('MAIN', this.props.state);
  }
  
  componentWillReceiveProps( props ) {
    console.log('componentWillReceiveProps', props);
    this.render();
  }
  
  shouldComponentUpdate( nextProps, nextState ) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    
    return (nextProps.location.pathname === this.props.location.pathname) ? false : true;
  }
  
  render() {
    const parentComp = this;
    const isPhone = this.props.state.metaDataReducer.data.isPhone;
    console.log('MAIN RENDER', this.props.location, isPhone);
    
    const childrenWithProps = React.Children.map(this.props.children, function ( child ) {
      return React.cloneElement(child, {
        pageContent: parentComp.getPageContent(),
        baseUrl: baseUrl,
        isPhone: isPhone,
      });
    });
    
    return <div id="topNode">
      <Header navigation={this.props.state.navigationReducer} location={this.props.location}></Header>
      {childrenWithProps}
      {this.props.location.pathname !== '/' ?
        <Footer metaData={this.props.state.metaDataReducer.data} navigation={this.props.state.navigationReducer}
                location={this.props.location}></Footer> : null}
    </div>;
  }
  
 
  // GET PAGE CONTENT
  
  getPageContent() {
    const pathName = this.props.location.pathname;
    let content = [];
    
    switch (pathName) {
      case '/':
        content = this.getSplashScreenImages();
        return content;
      case '/portfolio':
        content = this.getAllPortfolioContent();
        return content;
      case '/web':
        content = this.getFilteredPortfolioContent(this.props.state.loadRemoteContent.data.web);
        return content;
      case '/print':
        content = this.getFilteredPortfolioContent(this.props.state.loadRemoteContent.data.print);
        return content;
      case '/other':
        content = this.getFilteredPortfolioContent(this.props.state.loadRemoteContent.data.other);
        return content;
      case '/music':
        content = this.getFilteredPortfolioContent(this.props.state.loadRemoteContent.data.music);
        return content;
      case '/about':
        content = this.getOpedContent(this.props.state.loadRemoteContent.data.about[0]);
        return content;
      case '/opinion':
        content = this.getOpedContent(this.props.state.loadRemoteContent.data.oped[0]);
        return content;
    }
    return content;
  }
  
  // GET SPLASH SCREEN IMAGES
  
  getSplashScreenImages() {
    const topLevelContent = this.props.state.portfolioReducer;
    let result = [];
    
    for (let prop in topLevelContent) {
      let obj = topLevelContent[prop];
      if (obj.displayLandingPageImage) {
        result.push(obj);
      }
    }
    result.sort(function ( a, b ) {
      if (moment(a.date) < moment(b.date)) {
        return true;
      } else {
        return false;
      }
    });
    
    return result;
  }
  
  // GET PORTFOLIO CONTENT
  
  getAllPortfolioContent() {
    const topLevelContent = this.props.state.portfolioReducer;
    
    let all = [];
    
    for (let prop in topLevelContent) {
      let obj = topLevelContent[prop];
      if (!obj.mpeg) {
        all.push(obj);
      }
    }
    
    return this.getResult(all);
  }
  
  getFilteredPortfolioContent( topLevelContent ) {
    let all = [];
    
    for (let prop in topLevelContent) {
      let obj = topLevelContent[prop];
      all.push(obj);
    }
    
    return this.getResult(all);
  }
  
  getResult( all ) {
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
    
    while (all.length > 0 && indices.length > 0) {
      let item = all.splice(0, 1)[0];
      let index = indices.splice(0, 1)[0];
      result[index] = item;
    }
    // console.log('getFilteredPortfolioContent', result);
    return result;
  }
  
  // GET OPED CONTENT
  
  getOpedContent( topLevelContent ) {
    var tmp = document.createElement('p');
    tmp.innerHTML = topLevelContent.body;
    topLevelContent.bodyStripped = tmp.textContent || tmp.innerText;
    let result = [topLevelContent];
    // console.log(tmp, 'getOpedContent', topLevelContent);
    return result;
  }
}

Main.propTypes = {
  children: PropTypes.node,
  navigation: PropTypes.object,
  state: PropTypes.object,
  onNavClick: PropTypes.func,
  navigationReducer: PropTypes.object,
  location: PropTypes.object,
};


const mapStateToProps = ( state ) => {
  return {
    state,
  };
};

function mapDispatchToProps( dispatch ) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);