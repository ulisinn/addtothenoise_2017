import './styles/main.scss';

import 'react';
import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import routes from './routes';

import {Provider} from 'react-redux';
import store, {history} from './store';
import DevTools from './containers/DevTools';
import {REMOTE_LOAD_SUCCESS} from './actions';
// CREATE ROOT ELEMENT

const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

// REACT ROUTER

// REDUX

window.addEventListener('resize', onResize);
onResize();

function onResize() {
  console.log('resize');
}

const listenToStateUnsubscribe = store.subscribe(_initialLoad);

function _initialLoad() {
  const state = store.getState().loadRemoteContent;
  
  if (state.remoteData === REMOTE_LOAD_SUCCESS) {
    listenToStateUnsubscribe();
    render(
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes}/>
                    {
           <DevTools />
           }
        </div>
      </Provider>,
      rootElement
    );
    
  }
}

