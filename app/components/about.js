/**
 * Created by ulrichsinn on 04/19/2017.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

const AboutItem = ({question, answer}) => {
  console.log('AboutItem', question, answer);

  return (
    <div>
      <div className='question'>{question}</div>
      <div className='answer' dangerouslySetInnerHTML={createMarkup(answer)}></div>
    </div>
  );
};

function createMarkup(answer) {
  return {__html: answer};
}

export default class About extends Component {
  render() {
    const {onPageClick, pageContent, baseUrl} = this.props;
    const aboutItems = this.getAboutItems(pageContent[0]);
    return (<div id="oped" className="contentPanel">
      <div className="flexInner">
        {aboutItems}
      </div>
    </div>);
  }

  getAboutItems(pageContent) {
    return pageContent.map((item, index) => {
      console.log('item', index);
      return (<AboutItem
        key={index}
        question={item.question}
        answer={item.answer}
      />);
    });
  }

}


About.propTypes = {
  pageContent: PropTypes.array,
  baseUrl: PropTypes.string,
  onPageClick: PropTypes.func,
};

AboutItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

// export default About;
