import { combineReducers } from 'redux';
import splashState from './splash'
const currentState = (state = {}, action) => {
  return {};
};
const reducer = combineReducers({ currentState, splashState });
export default reducer;
