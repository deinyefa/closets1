import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  REGISTER_TOGGLE,
  LOGIN_USER_FAIL,
  SIGNUP_USER_FAIL,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
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
} from '../actions/types';
import firebase from 'firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  showSignUpForm: true,
  showForgotPasswordScreen: false,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, error: '', statusMessage: '' };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case REGISTER_TOGGLE:
      return {
        ...state,
        showSignUpForm: !state.showSignUpForm,
        email: '',
        password: '',
        error: ''
      };

    case LOAD_FORGOT_PASSWORD_SCREEN:
      return {
        ...state,
        showForgotPasswordScreen: !state.showForgotPasswordScreen,
        email: '',
        password: '',
        error: ''
      };

    case SEND_PASSWORD_RESET_EMAIL:
      return {
        ...state,
        statusMessage:
          'A link to reset your password has been sent to the email provided'
      };

    case SEND_PASSWORD_RESET_EMAIL_FAIL:
      return { ...state, email: '', error: action.payload };

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        email: '',
        password: '',
        error: '',
        loading: false
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        password: '',
        loading: false
      };

    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        email: '',
        password: '',
        error: '',
        loading: false
      };

    case SIGNUP_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        email: '',
        password: '',
        loading: false
      };

    case UPDATE_PASSWORD:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        error: ''
      };

    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        newPassword: '',
        confirmPassword: '',
        successMessage: 'Your password has been successfully updated!',
        error: ''
      };

    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        error: action.payload,
        newPassword: '',
        confirmPassword: ''
      };

    case PASSWORD_MISMATCH:
      return {
        ...state,
        error: 'The entered passwords do not match, please try again'
      };

    case AUTHENTICATE_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        error: '',
        newPassword: '',
        confirmPassword: '',
        successMessage: ''
      };

    default:
      return state;
  }
};
