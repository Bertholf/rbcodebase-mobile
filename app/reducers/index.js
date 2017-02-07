import { combineReducers } from 'redux';
import splashState from './splash';
import auth from './auth';
import tos from './tos';

const currentState = (state = {}, action) => {
  return {};
};
const reducer = combineReducers({ currentState, splashState, auth, tos });
export default reducer;
