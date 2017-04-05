// import { combineReducers } from 'redux';
// import { NetInfo } from 'react-native';
import { GET_NETWORK_STATUS, TESTING_NETWORK, GET_STATE } from '../actions/networkStatus';

const networkState = (state = { network: null, currentState: null }, action) => {
  switch (action.type) {
    case TESTING_NETWORK:
      return { ...state };
    case GET_NETWORK_STATUS:
      return Object.assign({}, state, { network: action.network });
    case GET_STATE:
      return Object.assign({}, state, { currentState: action.networkState });
    default:
      return state;
  }
};

export default networkState;
