import { combineReducers } from 'redux';
import splashState from './splash';
import auth from './auth';
import tos from './tos';
import support from './support';
import license from './license';
import networkState from './networkStatus';

const currentState = (state = {}, action) => {
  return {};
};
// Combine Reducers
const reducer = combineReducers({
  currentState, splashState, auth, tos, license, support, networkState,
});

export default reducer;
