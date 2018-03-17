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
  UPDATE_PASSWORD,
  LOGOUT,
  AUTHENTICATE_CURRENT_USER,
  LOAD_FORGOT_PASSWORD_SCREEN,
  SEND_PASSWORD_RESET_EMAIL,
  SEND_PASSWORD_RESET_EMAIL_FAIL
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

export const loadForgotPasswordScreen = () => {
  return {
    type: LOAD_FORGOT_PASSWORD_SCREEN
  };
};

export const firbaseSendPasswordResetEmail = email => {
  return dispatch => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => dispatch({ type: SEND_PASSWORD_RESET_EMAIL }))
      .catch(error =>
        dispatch({
          type: SEND_PASSWORD_RESET_EMAIL_FAIL,
          payload: error.message
        })
      );
  };
};

export const updatePassword = ({ prop, value }) => {
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
          console.log('password has been updated, it is now ' + newPassword);
          dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: { newPassword, confirmPassword }
          });
        })
        .catch(error => {
          console.log(error);
          dispatch({ type: UPDATE_PASSWORD_FAIL, payload: error.message });
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
        dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
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
        dispatch({ type: SIGNUP_USER_FAIL, payload: error.message });
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE_CURRENT_USER, payload: null });
    firebase.auth().signOut();
  };
};

export const isUserSignedIn = () => {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      setTimeout(
        () => dispatch({ type: AUTHENTICATE_CURRENT_USER, payload: user }),
        3000
      );
    });
  };
};
