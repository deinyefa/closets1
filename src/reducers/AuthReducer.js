import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  REGISTER_TOGGLE
} from '../actions/types';

const INITIAL_STATE = { email: '', toggleAuthPages: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case REGISTER_TOGGLE:
      return { ...state, toggleAuthPages: !state.toggleAuthPages };

    default:
      return state;
  }
};
