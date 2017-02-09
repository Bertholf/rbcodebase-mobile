import { AsyncStorage, NativeModules, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LoginManager } from 'react-native-fbsdk';

const google = NativeModules.GoogleSignInModule;
const Logout = () => {
  const accessToken = AsyncStorage.getItem('accessToken');
  const provider = AsyncStorage.getItem('provider');
  if (provider === 'facebook' && accessToken !== null && typeof accessToken !== undefined) {
    AsyncStorage.clear();
    LoginManager.logOut();
    Actions.login();
  } else if (provider === 'google' && accessToken !== null && typeof accessToken !== undefined){
    AsyncStorage.clear();
    google.signOut();
    Actions.login();
  } else {
    AsyncStorage.clear();
    Actions.login();
  }
}
export default Logout;
