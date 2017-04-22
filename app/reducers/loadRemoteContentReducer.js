/**
 * Created by ulrichsinn on 04/19/2017.
 */

import {
  PREPARE_DATA,
  REMOTE_LOAD_ERROR,
  REMOTE_LOAD_PENDING,
  REMOTE_LOAD_SUCCESS,
  REMOTE_DATA_READY,
} from '../actions';

export default function loadRemoteContent(state = {}, action) {
  // console.log('STATIC CONTENT REDUCER', action);
  switch (action.type) {
    case REMOTE_LOAD_PENDING:
      return {
        ...state,
        remoteData: action.type,
      };
    case REMOTE_LOAD_ERROR:
      return {
        ...state,
        remoteData: action.type,
      };
    case REMOTE_LOAD_SUCCESS:
      return {
        ...state,
        ...action.payload,
        remoteData: action.type,
      };
    
    case PREPARE_DATA:
      console.log('PREPARE_DATA action', action, state);
      return {
        ...state,
/*        portfolioItems: createAllList(state),
        navigation: createNavigation(state),*/
        remoteData: REMOTE_DATA_READY,
      };

    default:
      return state;
  }
}
/*

function createNavigation(state) {
  const nav = {};
  for (let prop in state.header[0]) {
    if (!prop.startsWith('_')) {
      nav[prop] = state.header[0][prop];
    }
  }
  return nav;
}

function createAllList(state) {
    const arr = state.print.concat(state.web, state.other, state.music);
  console.log('createAllList', arr);
  return arr;
}
*/

