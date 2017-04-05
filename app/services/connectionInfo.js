import { NetInfo } from 'react-native';

export default {
  checkInfo: () => {
    NetInfo.isConnected.fetch().then((isConnected) => {
      console.log(`First, is ${isConnected ? 'online' : 'offline'}`);
    });
    function handleFirstConnectivityChange(isConnected) {
      console.log(`Then, is ${isConnected ? 'online' : 'offline'}`);
      NetInfo.isConnected.removeEventListener('change', handleFirstConnectivityChange);
    }
    NetInfo.isConnected.addEventListener('change', handleFirstConnectivityChange);
  },

};
