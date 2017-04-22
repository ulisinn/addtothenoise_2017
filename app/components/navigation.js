/**
 * Created by ulrichsinn on 04/21/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames'


const Navigation = () => {
  return <div></div>;

};


Navigation.propTypes = {
  all: PropTypes.string,
  print: PropTypes.string,
  web: PropTypes.string,
  other: PropTypes.string,
  music: PropTypes.string,
  onNavClick: PropTypes.func,
};
export default Navigation;