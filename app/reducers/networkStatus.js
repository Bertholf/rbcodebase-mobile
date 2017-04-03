import { combineReducers } from 'redux';
// import { NetInfo } from 'react-native';
import { GET_NETWORK_STATUS, CHANGE_NETWORK_STATUS, HANDLER } from '../actions/networkStatus';

const networkState = (state = { network: null }, action) => {
  switch (action.type) {
    case GET_NETWORK_STATUS:
      return { network: true };
    case CHANGE_NETWORK_STATUS:
      return { ...state };
    case HANDLER:
      return { ...state };
    default:
      return state;
  }
};
const network = combineReducers({ networkState });
export default network;
