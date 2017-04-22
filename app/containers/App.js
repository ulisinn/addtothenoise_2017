/**
 * Created by ulrichsinn on 04/20/2017.
 */

import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import Main from '../components/main';


const mapStateToProps = (state) => {
  const { navigation, portfolioItems } = state.staticContentReducer;
  console.log('mapStateToProps', state);
  return {
    navigation,
    portfolioItems,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);



App.propTypes = {
  actions: PropTypes.object,
};


export default App;