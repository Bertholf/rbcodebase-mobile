import { combineReducers } from 'redux';
import { SUBMIT_LOGIN, UPDATE_PASSWORD_TEXT, UPDATE_USERNAME_TEXT, DONE_LOGIN, REQUEST_LOGIN } from '../actions/Auth';

const auth = (state = { username: '', password: '', is_loading: false }, action) => {
  switch (action.type) {
    case DONE_LOGIN:
      return { ...state, is_loading: false, response: action.response };
    case SUBMIT_LOGIN:
      return { ...state, is_loading: true };
    case REQUEST_LOGIN:
      return { ...state, is_loading: false };
      // return Object.assign({}, state, { is_loading: !state.is_loading });
    case UPDATE_USERNAME_TEXT:
      // return { ...state, password: action.password };
      return Object.assign({}, state, { username: action.username });
    case UPDATE_PASSWORD_TEXT:
      // return { ...state, username: action.username };
      return Object.assign({}, state, { password: action.password });
    default:
      return state;
  }
};
export default auth;
