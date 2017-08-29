/**
 * Created by ulrichsinn on 04/22/2017.
 */

import {
  ON_RESIZE,
} from '../store';

export default function metaData(state = {}, action) {
  // console.log('STATIC CONTENT REDUCER', action);
  switch (action.type) {
    case ON_RESIZE:
      return {
        ...state,
        ...action.payload,
        remoteData: action.type,
      };

    default:
      return state;
  }
}