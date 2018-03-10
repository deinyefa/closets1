import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  REGISTER_TOGGLE,
  LOGIN_USER_FAIL,
  SIGNUP_USER_FAIL,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  showSignUpForm: true,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(state);
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
        error: 'Authentication Failed. Please try again.',
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
        error: 'Authentication Failed. Please try again.',
        email: '',
        password: '',
        loading: false
      };

    default:
      return state;
  }
};
