import { NetInfo } from 'react-native';

// Actions type
export const GET_NETWORK_STATUS = 'GET_NETWORK_STATUS';
export const CHANGE_NETWORK_STATUS = 'CHANGE_NETWORK_STATUS';
export const HANDLER = 'HANDLER';
// Actions Creator
export function getNetworkStatus(connected) {
  let status;
  // Event Listener
  NetInfo.isConnected.addEventListener(
        'change',
        connected,
    );
// get first NetInfo
  NetInfo.isConnected.fetch().done(
        (isConnected) => { status = isConnected; },
    );
  return { type: GET_NETWORK_STATUS, status };
}


export function changeNetworkStatus(connected) {
  let status;
// Change network status event
  NetInfo.isConnected.removeEventListener(
        'change',
        connected,
  );
  return { type: CHANGE_NETWORK_STATUS, status };
}

// Event handler
export const _handleConnectivityChange = (dispatch, connected) => {
  dispatch(changeNetworkStatus(connected));
  dispatch(getNetworkStatus(connected));
  return { type: HANDLER, connected };
};
