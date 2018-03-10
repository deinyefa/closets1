import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  REGISTER_TOGGLE,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER_FAIL
} from './types';
import firebase from 'firebase';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const registerToggle = () => {
  return {
    type: REGISTER_TOGGLE
  };
};

// async request with redux thunk
export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword()
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      })
      .catch(() => {
        dispatch({ type: LOGIN_USER_FAIL });
      });
  };
};
export const signUpUser = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword()
      .then(user => {
        dispatch({ type: SIGNUP_USER_SUCCESS, payload: user });
      })
      .then(() => {
        dispatch({ type: SIGNUP_USER_FAIL });
      });
  };
};
