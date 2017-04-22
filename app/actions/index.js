/**
 * Created by ulrichsinn on 04/19/2017.
 */

export const REMOTE_LOAD_PENDING = 'REMOTE_LOAD_PENDING';
export const REMOTE_LOAD_SUCCESS = 'REMOTE_LOAD_SUCCESS';
export const REMOTE_LOAD_ERROR = 'REMOTE_LOAD_ERROR';
export const PREPARE_DATA = 'PREPARE_DATA';
export const REMOTE_DATA_READY = 'REMOTE_DATA_READY';

export const INIT_NAVIGATION = 'INIT_NAVIGATION';
export const NAV_CLICK = 'NAV_CLICK';

export const INIT_PORTFOLIO = 'INIT_PORTFOLIO';
export const SHOW_PORTFOLIO_MASTER = 'SHOW_PORTFOLIO_MASTER';
export const SHOW_PORTFOLIO_DETAIL = 'SHOW_PORTFOLIO_DETAIL';

// REMOTE MESSAGES

export function remoteLoadPending() {
  return {
    type: REMOTE_LOAD_PENDING,
  };
}

export function remoteLoadError() {
  return {
    type: REMOTE_LOAD_ERROR,
  };
}

export function remoteLoadSuccess() {
  return {
    type: REMOTE_LOAD_SUCCESS,
  };
}

// NAVIGATION MESSAGES

export function initNavigation(data) {
  return {
    type: INIT_NAVIGATION,
    payload: {
      data,
    },
  };
}

export function navClick(id) {
  return {
    type: NAV_CLICK,
    payload: {
      id,
    },
  };
}

// PORTFOLIO MESSAGES

export function initPortfolio(data) {

  return {
    type: INIT_PORTFOLIO,
    payload: {
      data,
    },
  };
}
//


export function getRemoteData(url) {
  return (dispatch) => {
    dispatch(remoteLoadPending());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((items) => {
        const portfolio = createAllList(items);
        const nav = createNavigation(items);
        dispatch(initNavigation(nav));
        dispatch(initPortfolio(portfolio));
        return dispatch(remoteLoadSuccess());
      })
      .catch(() => {
        dispatch(remoteLoadError());
      });
  };
}

function createNavigation(items) {
  const nav = {};
  for (let prop in items.header[0]) {
    if (!prop.startsWith('_')) {
      nav[prop] = items.header[0][prop];
    }
  }
  return nav;
}

function createAllList(items) {
  const arr = items.print.concat(items.web, items.other, items.music);
  return arr;
}
