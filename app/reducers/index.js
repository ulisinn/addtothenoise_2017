import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import loadRemoteContent from './loadRemoteContentReducer';
import navigationReducer from './navigationReducer';
import portfolioReducer from './portfolioReducer';

export const rootReducer = combineReducers({
  loadRemoteContent,
  navigationReducer,
  portfolioReducer,
  routing: routerReducer,
});
