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
  UPDATE_PASSWORD
} from '../actions/types';
import firebase from 'firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  showSignUpForm: true,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

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
        error: 'Failed to Log In. Please try again.',
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
        error: 'Failed to Register. Please try again',
        email: '',
        password: '',
        loading: false
      };

    case UPDATE_PASSWORD:
      console.log(action.payload.prop);
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };

    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        newPassword: action.payload.newPassword,
        confirmPassword: action.payload.confirmPassword
      };

    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        error:
          'Something went wrong or please enter at least 6 characters and please try again.'
      };

    case PASSWORD_MISMATCH:
      return {
        ...state,
        error: 'The entered passwords do not match, please try again'
      };

    default:
      return state;
  }
};
