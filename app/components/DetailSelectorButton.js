/**
 * Created by ulrichsinn on 04/27/2017.
 */

import React from 'react';

import PropTypes from 'prop-types';

const DetailSelectorButton = ({ label, className }) =>
  (
    <div className={className}>{label}</div>
  );

DetailSelectorButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

export default DetailSelectorButton;