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


export const ON_RESIZE = 'ON_RESIZE';
export const REMOTE_LOAD_PENDING = 'REMOTE_LOAD_PENDING';
export const REMOTE_LOAD_SUCCESS = 'REMOTE_LOAD_SUCCESS';
export const REMOTE_LOAD_ERROR = 'REMOTE_LOAD_ERROR';
export const PREPARE_DATA = 'PREPARE_DATA';
export const REMOTE_DATA_READY = 'REMOTE_DATA_READY';

export const INIT_NAVIGATION = 'INIT_NAVIGATION';
export const NAV_CLICK = 'NAV_CLICK';

export const INIT_PORTFOLIO = 'INIT_PORTFOLIO';
export const INIT_IMMUTABLE_PORTFOLIO = 'INIT_IMMUTABLE_PORTFOLIO';
export const SHOW_PORTFOLIO_MASTER = 'SHOW_PORTFOLIO_MASTER';
export const SHOW_PORTFOLIO_DETAIL = 'SHOW_PORTFOLIO_DETAIL';


const dev = true;
export const baseUrl = (dev)?'http://localhost:8080':'http://addtothenoise.com';
const remote_url = baseUrl + '/api/all.php';
const mock_url = baseUrl + '/mock/mock.json';
// Always use mock data instead of remote data
const url = mock_url;

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
