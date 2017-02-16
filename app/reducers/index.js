import { combineReducers } from 'redux';
import splashState from './splash';
import auth from './auth';
import tos from './tos';
import support from './support';

const currentState = (state = {}, action) => {
  return {};
};
const reducer = combineReducers({ currentState, splashState, auth, tos, support });
export default reducer;
