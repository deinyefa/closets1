import { EMAIL_CHANGED, PASSWORD_CHANGED, REGISTER_TOGGLE } from './types';

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
