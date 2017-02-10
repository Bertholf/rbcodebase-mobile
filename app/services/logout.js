import { AsyncStorage, NativeModules, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LoginManager } from 'react-native-fbsdk';

const google = NativeModules.GoogleSignInModule;
const Logout = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const provider = await AsyncStorage.getItem('provider');
    if (provider === 'facebook' && accessToken !== '') {
      AsyncStorage.clear();
      LoginManager.logOut();
      Actions.login({ type: 'reset' });
    } else if (provider === 'google' && accessToken !== '') {
      AsyncStorage.clear();
      google.signOut();
      Actions.login({ type: 'reset' });
    } else {
      AsyncStorage.clear();
      Actions.login({ type: 'reset' });
    }
  } catch (err) {
    console.log('logOut error : ', err);
  }
}
export default Logout;
