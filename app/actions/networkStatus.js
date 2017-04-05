import { NetInfo } from 'react-native';

// Actions type
export const GET_NETWORK_STATUS = 'GET_NETWORK_STATUS';
export const TESTING_NETWORK = 'TESTING_NETWORK';
export const GET_STATE = 'GET_STATE';

// Actions Creator
export function getNetworkStatus() {
  return (dispatch) => {
    dispatch({ type: TESTING_NETWORK });

    NetInfo.isConnected.addEventListener(
        'change',
        isConnected => dispatch({ type: GET_NETWORK_STATUS, network: isConnected }),
    );

    NetInfo.isConnected.fetch().done(
        (isConnected) => {
          dispatch({ type: GET_NETWORK_STATUS, network: isConnected });
        },
    );
  };
}

export function getCurrentState() {
  return (dispatch, getState) => {
    const { network } = getState();
    console.log('GETTING STATE', network);

    return dispatch({ type: GET_STATE, currentState: network });
  };
}
