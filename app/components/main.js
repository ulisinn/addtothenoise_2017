import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/index';

import Header from '../components/header';
import Footer from '../components/footer';

class Main extends Component {
  
  constructor(props) {
    super(props);
    console.log('MAIN', this.props.state);
  }
  
  render() {
    return <div id="topNode">
      <Header navigation={this.props.state.navigationReducer}></Header>
      {React.cloneElement(this.props.children, this.props)}
      <Footer navigation={this.props.state.navigationReducer}></Footer>
    </div>;
  }
  
}

Main.propTypes = {
  children: PropTypes.node,
  navigation: PropTypes.object,
  state: PropTypes.object,
  onNavClick: PropTypes.func,
  navigationReducer: PropTypes.object,
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