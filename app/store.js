/**
 * Created by ulrichsinn on 04/19/2017.
 */

import {applyMiddleware, compose, createStore} from 'redux';
import createLogger from 'redux-logger';
import {syncHistoryWithStore} from 'react-router-redux';
import DevTools from './containers/DevTools';
import {browserHistory} from 'react-router';
import {rootReducer} from './reducers/index';
import {getRemoteData} from './actions/index';
import thunk from 'redux-thunk';

const base_url = 'http://addtothenoise.com/';
const remote_url = base_url + 'cms_pages/get_site_data.php';
const mock_url = 'mock/mock.json';
const dev = true;
const url = (dev) ? mock_url : remote_url;

const logger = createLogger();
const enhancer = compose(
  applyMiddleware(logger, thunk),
  DevTools.instrument()
);

const store = createStore(
  rootReducer,
  {},
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer
);

store.dispatch(getRemoteData(url));
export const history = syncHistoryWithStore(browserHistory, store);
export default store;