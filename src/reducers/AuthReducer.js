import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  REGISTER_TOGGLE,
  LOGIN_USER_FAIL,
  SIGNUP_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  showSignUpForm: true,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
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
        password: ''
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Whoops! Looks like that password is incorrect.',
        password: ''
      };

    case SIGNUP_USER_FAIL:
      return {
        ...state,
        error: 'Sorry. That email is already in use.',
        email: '',
        password: ''
      };

    default:
      return state;
  }
};
