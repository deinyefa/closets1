// TODO: make auth flow more robust

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  REGISTER_TOGGLE,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER_FAIL,
  LOGIN_USER,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  PASSWORD_MISMATCH,
  UPDATE_PASSWORD
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

export const updatePassword = (prop, value) => {
  return {
    type: UPDATE_PASSWORD,
    payload: { prop, value }
  };
};

export const firebasePasswordUpdate = ({ newPassword, confirmPassword }) => {
  let user = firebase.auth().currentUser;
  if (newPassword === confirmPassword && confirmPassword !== '') {
    return dispatch => {
      user
        .updatePassword(newPassword)
        .then(() => {
          dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: { newPassword, confirmPassword }
          });
        })
        .catch(() => {
          dispatch({ type: UPDATE_PASSWORD_FAIL });
        });
    };
  }
  return { type: PASSWORD_MISMATCH };
};

export const registerToggle = () => {
  return {
    type: REGISTER_TOGGLE
  };
};

// async request with redux thunk
export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: LOGIN_USER_FAIL });
      });
  };
};
export const signUpUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: SIGNUP_USER_SUCCESS, payload: user });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: SIGNUP_USER_FAIL });
      });
  };
};
