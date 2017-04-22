/**
 * Created by ulrichsinn on 04/21/2017.
 */
/**
 * Created by ulrichsinn on 04/21/2017.
 */
import {INIT_PORTFOLIO, SHOW_PORTFOLIO_DETAIL, SHOW_PORTFOLIO_MASTER} from '../actions/index';
export default function portfolioReducer(state = {}, action) {
  switch (action.type) {
    case INIT_PORTFOLIO: {
      // console.log('INIT_PORTFOLIO', action.payload.data);
      return {
        ...state,
        ...action.payload.data,
      }
        ;
    }
    case SHOW_PORTFOLIO_MASTER:
      return {
        ...state,
        currentPage: action.payload.id,
      };
    
    case SHOW_PORTFOLIO_DETAIL:
      return {
        ...state,
        currentPage: action.payload.id,
      };
    
    default:
      return state;
  }
}
