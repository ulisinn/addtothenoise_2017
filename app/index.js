import './styles/main.css';

import 'react';
import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import routes from './routes';

import {Provider} from 'react-redux';
import store, {history, REMOTE_LOAD_SUCCESS} from './store';
import {setBrowserMetadata} from './actions';
// UTIL
import {actual} from 'actual';
import MobileDetect from 'mobile-detect';

// CREATE ROOT ELEMENT

const rootElement = document.createElement('div');
const md = new MobileDetect(window.navigator.userAgent);
rootElement.id = 'root';
document.body.appendChild(rootElement);


window.addEventListener('resize', onResize);


function onResize() {
  let hasTouch = (md.mobile() !== null) ? true : false;
  let device = ['width', 'height', 'device-width', 'device-height'].map(actual.as('px'));
  let width = device[0];
  let height = device[1];
  let deviceWidth = device[2];
  let deviceHeight = device[3];
  let orientation = null;
  let isPhone = false;
  if (hasTouch) {
    orientation = (deviceHeight >= deviceWidth) ? 'portrait' : 'landscape';
  }
  if (hasTouch && Math.min(deviceWidth, deviceHeight) < 700) {
    isPhone = true;
  }

  // console.log('resize', device, 'hasTouch', hasTouch);
  store.dispatch(setBrowserMetadata({hasTouch, width, height, deviceWidth, deviceHeight, orientation, isPhone}));
}

const listenToStateUnsubscribe = store.subscribe(_initialLoad);

function _initialLoad() {
  const state = store.getState().loadRemoteContent;

  if (state.remoteData === REMOTE_LOAD_SUCCESS) {
    listenToStateUnsubscribe();
    onResize();
    render(
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes}/>
          {/*                    {
           <DevTools />
           }*/}
        </div>
      </Provider>,
      rootElement
    );
  }
}
