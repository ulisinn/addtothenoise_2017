import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import loadRemoteContent from './loadRemoteContentReducer';
import navigationReducer from './navigationReducer';
import portfolioReducer from './portfolioReducer';
import metaDataReducer from './metaDataReducer';

export const rootReducer = combineReducers({
  loadRemoteContent,
  navigationReducer,
  portfolioReducer,
  metaDataReducer,
  routing: routerReducer,
});
