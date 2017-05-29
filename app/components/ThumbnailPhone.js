/**
 * Created by ulrichsinn on 04/24/2017.
 */

import React from 'react';
import { Link } from 'react-router';

import PropTypes from 'prop-types';


const ThumbnailPhone = ( { onPageMouseEnter, onPageMouseLeave, onPageClick, backgroundColor, thumbnail, baseUrl, _id, title, mainImage, mpeg } ) =>
  (
    <div className='thumbnail_phone'>
      <Link to={`/project/?id=${_id}`}>
        <div className={(!mpeg) ?'thumbnail' : 'thumbnailMusic'}
             style={{
               backgroundSize: (!mpeg) ? 'cover' : 'contain',
               backgroundImage: 'url(' + baseUrl + mainImage + ')',
               backgroundColor: backgroundColor,
             }}
        >
        </div>
        <p className='thumbnail_title'>{title} {`/project/?id=${_id}`}</p>
      </Link>
    </div>
  );


ThumbnailPhone.propTypes = {
  pageContent: PropTypes.array,
  baseUrl: PropTypes.string,
  onPageClick: PropTypes.func,
  onPageMouseEnter: PropTypes.func,
  onPageMouseLeave: PropTypes.func,
  backgroundColor: PropTypes.string,
  thumbnail: PropTypes.string,
  mainImage: PropTypes.string,
  title: PropTypes.string,
  _id: PropTypes.string,
  mpeg: PropTypes.string,
};

export default ThumbnailPhone;
