import { AsyncStorage, NativeModules, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LoginManager } from 'react-native-fbsdk';

const google = NativeModules.GoogleSignInModule;
const Logout = async () => {
  try{
    const accessToken = await AsyncStorage.getItem('accessToken');
    const provider = await AsyncStorage.getItem('provider');
    console.log('==PROVIDER==', provider, '==TOKEN==', accessToken);
    if (provider === 'facebook' && typeof accessToken !== undefined) {
      AsyncStorage.clear();
      LoginManager.logOut();
      Actions.login();
    } else if (provider === 'google' && typeof accessToken !== undefined){
      AsyncStorage.clear();
      google.signOut();
      Actions.login();
    } else {
      AsyncStorage.clear();
      Actions.login();
    }
  } catch (err) {
    console.log('logOut error : ', err);
  }
}
export default Logout;
