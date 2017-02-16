import { combineReducers } from 'redux';
import splashState from './splash';
import auth from './auth';
import tos from './tos';
import license from './license';

const currentState = (state = {}, action) => {
  return {};
};
const reducer = combineReducers({ currentState, splashState, auth, tos, license });
export default reducer;
