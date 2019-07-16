import Axios from 'axios';

// action type
export const MAKE_DEPOSIT = 'MAKE_DEPOSIT';
export const MAKE_WITHDRAWAL = 'MAKE_WITHDRAWAL';

export const GET_ACCOUNT_START = 'GET_ACCOUNT_START';
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS';
export const GET_ACCOUNT_FAILED = 'GET_ACCOUNT_FAILED';

// action creator
export function makeDeposit(amount, account, description) {
  // action
  return {
    type: MAKE_DEPOSIT,
    payload: {
      amount,
      account,
      description
    }
  };
}

export function makeWithdrawal(amount, account, description) {
  return {
    type: MAKE_WITHDRAWAL,
    payload: {
      amount,
      account,
      description
    }
  };
}

export function getAccount() {
  // can return a function because we're using redux-thunk
  return dispatch => {
    // receives direct access to the dispatcher
    dispatch({ type: GET_ACCOUNT_START });

    Axios.get('http://localhost:8080/')
      .then(res => {
        // console.log(res.data);
        dispatch({ type: GET_ACCOUNT_SUCCESS, payload: res.data });
      })
      .catch(err => {
        // console.log(err);
        dispatch({ type: GET_ACCOUNT_FAILED, payload: err.response.data });
      });
  };
}
