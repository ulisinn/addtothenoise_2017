/**
 * Created by ulrichsinn on 04/27/2017.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DetailSelector extends Component {
  
  render() {
    let currentIndex = parseInt(this.props.currentIndex) || 0;
    let onSetCurrentIndex = this.props.onSetCurrentIndex;
    
    const imageList = this.props.imageList.map(function (item, index) {
      console.log('currentIndex', currentIndex, index);
      if (index === 0) {
        return <li key={index}
                   className='closeDetailButton'
                   onClick={() => onSetCurrentIndex(index)}></li>;
      } else if (currentIndex === index && currentIndex > 0) {
        return <li key={index}
                   className='selectDetailButtonSelected'
                   >{index}</li>;
      }
      else {
        return <li key={index}
                   className='selectDetailButton'
                   onClick={() => onSetCurrentIndex(index)}>{index}</li>;
        
      }
    });
    
    return (
      <ul className='detailSelectorButtonContainer'>
        {imageList}
      </ul>
    );
  }
}

DetailSelector.propTypes = {
  onSetCurrentIndex: PropTypes.func,
  imageList: PropTypes.array,
  currentIndex: PropTypes.number,
};
