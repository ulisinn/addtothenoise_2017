// @flow

import moment from 'moment';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/index';

import Header from '../components/header';
import Footer from '../components/footer';
import {baseUrl} from '../store';


class Main extends Component {

  constructor(props: PropTypes) {
    super(props);
    // console.log('MAIN', this.props.state);
  }

  componentWillReceiveProps(props: PropTypes) {
    console.log('componentWillReceiveProps', props);
    this.render();
  }

  shouldComponentUpdate(nextProps: PropTypes, nextState: PropTypes) {
    console.log('shouldComponentUpdate', nextProps, nextState);

    return (nextProps.location.pathname === this.props.location.pathname) ? false : true;
  }

  render() {
    const parentComp: Main = this;
    const isPhone: boolean = this.props.state.metaDataReducer.data.isPhone;
    const siteData: Object = this.props.state.loadRemoteContent.data;
    console.log('MAIN RENDER', this.props.location, isPhone, siteData);

    const childrenWithProps = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        pageContent: parentComp.getPageContent(),
        baseUrl: baseUrl,
        isPhone: isPhone,
      });
    });

    return <div id="topNode">
      <Header navigation={this.props.state.navigationReducer}
              siteData={siteData}
              location={this.props.location}></Header>
      {childrenWithProps}
      {this.props.location.pathname !== '/' ?
        <Footer metaData={this.props.state.metaDataReducer.data}
                navigation={this.props.state.navigationReducer}
                location={this.props.location}></Footer> : null}
    </div>;
  }


  // GET PAGE CONTENT

  getPageContent() {
    const pathName: string = this.props.location.pathname;
    const data = this.props.state.loadRemoteContent.data;
    let content: Array<any> = [];

    switch (pathName) {
      case '/':
        content = this.getSplashScreenImages();
        return content;
      case '/portfolio':
        content = this.getAllPortfolioContent();
        return content;
      case '/web':
        content = this.getFilteredPortfolioContent(data.web);
        return content;
      case '/print':
        content = this.getFilteredPortfolioContent(data.print);
        return content;
      case '/other':
        content = this.getFilteredPortfolioContent(data.other);
        return content;
      case '/music':
        content = this.getFilteredPortfolioContent(data.music);
        return content;
      case '/about':
        content = this.getOpedContent(data.mission_statement);
        return content;
      case '/opinion':
        content = this.getOpedContent(data.oped[0]);
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

    result.sort(function (a, b) {
      if (moment(a.date) < moment(b.date)) {
        return true;
      } else {
        return false;
      }
    });

    console.log('getSplashScreenImages', result);
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

  getFilteredPortfolioContent(topLevelContent) {
    let all = [];

    for (let prop in topLevelContent) {
      let obj = topLevelContent[prop];
      all.push(obj);
    }

    return this.getResult(all);
  }

  getResult(all) {
    const maxItems = all.length;

    return all;
  }

  // GET OPED CONTENT

  getOpedContent(topLevelContent) {
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
  portfolioReducer: PropTypes.object,
  location: PropTypes.object,
};


const mapStateToProps = (state) => {
  return {
    state,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
