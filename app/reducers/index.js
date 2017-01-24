import { combineReducers } from 'redux';
import splashState from './splash';
import auth from './auth';

const currentState = (state = {}, action) => {
  return {};
};
const reducer = combineReducers({ currentState, splashState, auth });
export default reducer;
