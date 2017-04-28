/**
 * Created by ulrichsinn on 04/24/2017.
 */


import React from 'react';
import {Link} from 'react-router';

import PropTypes from 'prop-types';

const EnterButton = ({ label }) =>
  (
    <div><Link to='/portfolio'>{label}</Link></div>
  );

EnterButton.propTypes = {
  label: PropTypes.string,
};

export default EnterButton;
