/**
 * Created by ulrichsinn on 04/21/2017.
 */
import {INIT_NAVIGATION, NAV_CLICK} from '../actions/index';
export default function navigationReducer(state = {}, action) {
  // console.log('NAV CLICK REDUCER', action);
  
  switch (action.type) {
    case INIT_NAVIGATION: {
      // console.log('INIT_NAVIGATION', action.payload.data);
      return {
        ...state,
        ...action.payload.data,
      }
        ;
    }
    case NAV_CLICK:
      return {
        ...state,
        currentPage: action.payload.id,
      };
    
    default:
      return state;
  }
}
