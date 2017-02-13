import { AsyncStorage, NativeModules } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LoginManager } from 'react-native-fbsdk';
import OAuthManager from 'react-native-oauth';
import config from '../config';
import manager from '../actions/Auth';

const google = NativeModules.GoogleSignInModule;
const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = config;
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
    } else if (provider === 'twitter' && accessToken !== '') {
      AsyncStorage.clear();
      manager.configure({
        twitter: {
          consumer_key: TWITTER_CONSUMER_KEY,
          consumer_secret: TWITTER_CONSUMER_SECRET,
        },
      });
      manager.deauthorize('twitter');
      console.log('TWITTER LOG');
      // OAuthManager().deauthorize('twitter');
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
