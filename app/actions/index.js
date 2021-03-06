/**
 * Created by ulrichsinn on 04/19/2017.
 */

// @flow

import axios from 'axios';
import * as _ from 'lodash';

export const ON_RESIZE = 'ON_RESIZE';
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

// META DATA

export function setBrowserMetadata(data: any) {
  return {
    type: ON_RESIZE,
    payload: {
      data,
    },
  };
}

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

export function remoteLoadSuccess(data: any) {
  return {
    type: REMOTE_LOAD_SUCCESS,
    payload: {
      data,
    },
  };
}

// NAVIGATION MESSAGES

export function initNavigation(data: any) {
  return {
    type: INIT_NAVIGATION,
    payload: {
      data,
    },
  };
}

export function navClick(id: string) {
  return {
    type: NAV_CLICK,
    payload: {
      id,
    },
  };
}

// PORTFOLIO MESSAGES

export function initPortfolio(data: any) {

  return {
    type: INIT_PORTFOLIO,
    payload: {
      data,
    },
  };
}

//


export function getRemoteData(url: string) {
  console.log('getRemoteData url', url);
  return (dispatch: Function) => {
    dispatch(remoteLoadPending());
    axios.get(url)
      .then((response) => {
        console.log('getRemoteData THEN url', response.data.sets);

        /*        if (!response.data.sets) {
                  throw Error(response.statusText);
                }*/
        return response.data;
      })
      .then((items) => {
        const data = (url.indexOf('localhost') !== -1) ? items : formatData(items.sets);
        const portfolio = createAllList(data);
        const nav = createNavigation(data);
        dispatch(initNavigation(nav));
        dispatch(initPortfolio(portfolio));
        return dispatch(remoteLoadSuccess(data));
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

function formatData(items) {
  const data = {
    header: [
      {
        name: '{addtothenoise}',
        backgroundColor: '#bfbeb2',
        pages: [],
      },
    ],
    footer: [
      {
        '_id': '5',
        'backgroundColor': '#bfbeb2',
        '_title': '#bfbeb2',
        '_page': '\/pages\/footer.php',
        '_pageID': '5',
        '_sortvalue': '1000',
      },
    ],
    about: [],
    oped: [],
    print: [],
    web: [],
    other: [],
    music: [],
    mission_statement: [],
  };

  console.log('formatData', items.mission_statement);
  // build header
  data.mission_statement = items.mission_statement.map((item) => {
    return {
      question: item.question,
      answer: item.answer,
    };
  });
  data.header[0].pages = items.navigation.map((d, i) => {
    return _.pick(d, 'label', 'path');
  });

  // build about and oped

  items.pages.forEach((item) => {
    if (item.heading === 'oped') {
      const obj = {};
      obj._id = item._id;
      obj.body = item['body'];
      obj.author = item.author_family_name;
      data.oped.push(obj);
    }
    if (item.heading === 'about') {
      const obj = {};
      obj._id = item._id;
      obj.body = item['body'];
      obj.author = item.author_family_name;
      data.about.push(obj);
    }
  });
  {/*{baseUrl + pageContent[0].landingPageImage.src}*/
  }

  data.print = items.print.map((d, i) => {
    // console.log(d,i);
    const obj = {};
    for (const prop in d) {
      obj[prop] = d[prop];
      if (prop === 'thumbnail') {
        obj.thumbnail = d[prop].src;
      }
      if (prop === 'landingPageImage') {
        obj.landingPageImage = d[prop].src;
        if (d[prop].src) {
          // console.log('landingPageImage', d.title, d[prop].src);
        }
      }
      if (prop === 'mainImage') {
        obj.mainImage = d[prop].src;
      }
    }
    // console.log('\t', obj);
    return obj;
  });
  data.web = items.web.map((d, i) => {
    const obj = {};
    for (const prop in d) {
      obj[prop] = d[prop];
      if (prop === 'thumbnail') {
        obj.thumbnail = d[prop].src;
      }
      if (prop === 'landingPageImage') {
        obj.landingPageImage = d[prop].src;
        if (d[prop].src) {
          // console.log('landingPageImage', d.title, d[prop].src);
        }
      }
      if (prop === 'mainImage') {
        obj.mainImage = d[prop].src;
      }
    }
    // console.log('\t', obj);
    return obj;
  });

  data.other = items.other.map((d, i) => {
    // console.log(d,i);
    const obj = {};
    for (const prop in d) {
      obj[prop] = d[prop];
      if (prop === 'thumbnail') {
        obj.thumbnail = d[prop].src;
      }
      if (prop === 'landingPageImage') {
        obj.landingPageImage = d[prop].src;
        if (d[prop].src) {
          // console.log('landingPageImage', d.title, d[prop].src);
        }
      }
      if (prop === 'mainImage') {
        obj.mainImage = d[prop].src;
      }

    }
    // console.log('\t', obj);
    return obj;
  });

  data.music = items.music.map((d, i) => {
    // console.log(d,i);
    const obj = {};
    for (const prop in d) {
      obj[prop] = d[prop];
      if (prop === 'thumbnail') {
        obj.thumbnail = d[prop].src;
      }
      if (prop === 'landingPageImage') {
        obj.landingPageImage = d[prop].src;
      }
      if (prop === 'mainImage') {
        obj.mainImage = d[prop].src;
      }
      if (prop === 'mpeg') {
        // console.log('mpeg',d[prop]);
        obj.mpeg = d[prop].src;
      }
    }
    // console.log('\t music', obj);
    return obj;
  });
  console.log('data', data);
  return data;
}
