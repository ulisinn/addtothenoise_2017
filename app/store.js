/**
 * Created by ulrichsinn on 04/19/2017.
 */

import {applyMiddleware, compose, createStore} from 'redux';
import createLogger from 'redux-logger';
import {syncHistoryWithStore} from 'react-router-redux';
import DevTools from './containers/DevTools';
import {browserHistory} from 'react-router';
import {rootReducer} from './reducers/index';
import {getRemoteData, getNewRemoteData} from './actions/index';
import thunk from 'redux-thunk';

const dev = false;
export const baseUrl = (dev)?'http://localhost:8080':'http://addtothenoise.com';
const remote_url = baseUrl + '/api/all.php';
const mock_url = baseUrl + '/mock/mock.json';
const url = (dev) ? mock_url : remote_url;

const logger = createLogger();
const enhancer = compose(
  // applyMiddleware(logger, thunk),
  applyMiddleware(thunk),
  DevTools.instrument()
);

const store = createStore(
  rootReducer,
  {},
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer
);

// store.dispatch(getNewRemoteData('http://www.addtothenoise.com/api/all.php'));
store.dispatch(getRemoteData(url));

export const history = syncHistoryWithStore(browserHistory, store);
export default store;