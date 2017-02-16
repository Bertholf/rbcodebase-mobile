import { combineReducers } from 'redux';
import splashState from './splash';
import auth from './auth';
import tos from './tos';
import support from './support';
import license from './license';

const currentState = (state = {}, action) => {
  return {};
};
const reducer = combineReducers({ currentState, splashState, auth, tos, license, support });
export default reducer;
