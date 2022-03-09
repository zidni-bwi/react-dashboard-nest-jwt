import * as actionTypes from './types';

export const settUser = usera => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: usera
    }
  }
}

export const setAccount = account => {
  return {
    type: actionTypes.SET_ACCOUNT,
    payload: {
      currentUser: account
    }
  }
}
