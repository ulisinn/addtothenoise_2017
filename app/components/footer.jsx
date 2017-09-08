/**
 * Created by ulrichsinn on 03/06/2017.
 */
import '../styles/main.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';
import {Icon} from 'react-fa'

import PropTypes from 'prop-types';
import {actual} from 'actual';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('actual', actual.is('(max-width:30em)'));
    return (
      <div id="footer">
        <a href={'https://www.instagram.com/laikasinn/'} target={'_blank'} style={{marginRight: '0.6em'}}>
          <Icon name="instagram" style={{fontSize: '1.3em'}}/>
        </a>
        <a href={'https://www.linkedin.com/in/anabelsinn/'} target={'_blank'}
           style={{marginLeft: '0.6em', marginRight: '0.6em'}}>
          <Icon name="venus" style={{color: '#bfbeb2', fontSize: '1.1em'}}/>
          <Icon name="caret-right"
                style={{color: '#bfbeb2', marginLeft: '0.3em', marginRight: '0.3em', fontSize: '1.1em'}}/>
          <Icon name="linkedin" style={{fontSize: '1.1em'}}/>
        </a>
        <a href={'https://www.linkedin.com/in/ulrich-sinn/'} target={'_blank'}
           style={{marginLeft: '0.6em', marginRight: '0.6em'}}>
          <Icon name="mars" style={{color: '#bfbeb2', fontSize: '1.1em'}}/>
          <Icon name="caret-right"
                style={{color: '#bfbeb2', marginLeft: '0.3em', marginRight: '0.3em', fontSize: '1.1em'}}/>
          <Icon name="linkedin" style={{fontSize: '1.1em'}}/>
        </a>
        <a href={'mailto:contact@addtothenoise.com?Subject=Hello'}
           style={{marginLeft: '0.6em', marginRight: '0.8em'}}>
          <Icon name="envelope" style={{fontSize: '1.1em'}}/>
        </a>
        {/*You can <a href="mailto:contact@addtothenoise.com?Subject=Hello">contact</a> addtothenoise here.*/}
        {this.getLine2()}
      </div>  );
  }

  showNavigation() {
    return <Navigation/>
  }

  getLine2() {
    console.log('metaData width', this.props.metaData.width);

    return (this.props.metaData.width > 650) ? <span> Also, Uli has an <Link to='/opinion'>OPINION</Link> (it was gracefully pointed out that it is not <em>his</em>).</span> : null;
  }
}

Footer.propTypes = {
  title: PropTypes.string,
  onNavClick: PropTypes.func,
};
