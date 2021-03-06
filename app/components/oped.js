/**
 * Created by ulrichsinn on 04/19/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';


const Oped = ( { onPageClick, pageContent, baseUrl }) =>
  (<div id="oped" className="contentPanel">
    <div className="flexInner">
      <p >{pageContent[0].bodyStripped}</p>
      <p><em>{pageContent[0].author}</em></p>
    </div>
  </div>);


Oped.propTypes = {
  pageContent: PropTypes.array,
  baseUrl: PropTypes.string,
  onPageClick: PropTypes.func,
};

export default Oped;