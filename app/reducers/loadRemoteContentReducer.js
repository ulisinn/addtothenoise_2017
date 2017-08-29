/**
 * Created by ulrichsinn on 04/19/2017.
 */

import {
  PREPARE_DATA,
  REMOTE_LOAD_ERROR,
  REMOTE_LOAD_PENDING,
  REMOTE_LOAD_SUCCESS,
  REMOTE_DATA_READY,
} from '../store';

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
        remoteData: REMOTE_DATA_READY,
      };

    default:
      return state;
  }
}