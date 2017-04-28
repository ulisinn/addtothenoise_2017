/**
 * Created by ulrichsinn on 04/24/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';


const BlankThumbnail = ({ onPageClick, backgroundColor, thumbnail, baseUrl }) =>
  (
    <div className="blankThumbnail">
    </div>
  );


BlankThumbnail.propTypes = {
  pageContent: PropTypes.array,
  baseUrl: PropTypes.string,
  onPageClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default BlankThumbnail;
