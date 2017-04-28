/**
 * Created by ulrichsinn on 04/27/2017.
 */


import React from 'react';

import PropTypes from 'prop-types';

const moreButtonImg = require('../images/moreBtn.png');

const MoreButton = ({ onMoreClick }) =>
  (
    <div className='moreButton' onClick={onMoreClick}></div>
  );

MoreButton.propTypes = {
  onMoreClick: PropTypes.func,
};

export default MoreButton;
