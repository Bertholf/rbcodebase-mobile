import { combineReducers } from 'redux';
import { MOVE_TO_AUTH_LOGIN, MOVE_TO_DASHBOARD } from '../actions/Splash';

const splashState = (state = {}, action) => {
  switch (action.type) {
    case MOVE_TO_DASHBOARD:
      return { target: 'dashboard' };
    case MOVE_TO_AUTH_LOGIN:
      return { target: 'login' };
    default:
      return state;
  }
};
const reducer = combineReducers({ splashState });
export default reducer;
