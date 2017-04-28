/**
 * Created by ulrichsinn on 04/24/2017.
 */

import React from 'react';
import {Link} from 'react-router';

import PropTypes from 'prop-types';


const Thumbnail = ({ onPageMouseEnter, onPageMouseLeave, onPageClick, backgroundColor, thumbnail, baseUrl, _id }) =>
  (
    <Link to={'/project/' + _id} thumbnail={thumbnail}>
      <div className="thumbnail"
           style={{
             backgroundSize: 'cover',
             backgroundImage: 'url(' + baseUrl + thumbnail + ')',
             backgroundColor: backgroundColor,
           }}
           onMouseEnter={() => {
             onPageMouseEnter(_id);
           }}
           onMouseLeave={() => {
             onPageMouseLeave(_id);
           }}
           onClick={() => {
             onPageClick(_id);
           }}
      >
      </div>
    </Link>
  );


Thumbnail.propTypes = {
  pageContent: PropTypes.array,
  baseUrl: PropTypes.string,
  onPageClick: PropTypes.func,
  onPageMouseEnter: PropTypes.func,
  onPageMouseLeave: PropTypes.func,
  backgroundColor: PropTypes.string,
  thumbnail: PropTypes.string,
  _id: PropTypes.string,
};

export default Thumbnail;
