import { AsyncStorage, NativeModules } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LoginManager } from 'react-native-fbsdk';
import OAuthManager from 'react-native-oauth';
import config from '../config';
import manager from '../actions/Auth';

const google = NativeModules.GoogleSignInModule;
const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = config;
const Logout = async () => {
  const accessT = AsyncStorage.getItem('accessToken');
  const prov = AsyncStorage.getItem('provider');
  if (prov === 'facebook' && accessT !== '') {
    AsyncStorage.removeItem('accessToken');
    LoginManager.logOut();
    Actions.login({ type: 'reset' });
    console.log('----------PROVIDER=FACEBOOK-----------------');
  } else if (prov === 'google' && accessT !== '') {
    AsyncStorage.removeItem('accessToken');
    google.signOut();
    Actions.login({ type: 'reset' });
    console.log('----------PROVIDER=GOOGLE-----------------');
  } else if (prov === 'twitter' && accessT !== '') {
    AsyncStorage.removeItem('accessToken');
    manager.configure({
      twitter: {
        consumer_key: TWITTER_CONSUMER_KEY,
        consumer_secret: TWITTER_CONSUMER_SECRET,
      },
    });
    console.log('----------PROVIDER=TWITTER-----------------');
    manager.deauthorize('twitter');
    console.log('TWITTER LOG');
    // OAuthManager().deauthorize('twitter');
    Actions.login({ type: 'reset' });
  } else {
    AsyncStorage.removeItem('accessToken');
    Actions.login({ type: 'reset' });
    console.log('----------PROVIDER=EMAIL-----------------');
  }
  console.log('+++++++++++ SUCCESS CLEARING ASYNCSTORAGE+++++++++++', accessToken);
  // } catch (err) {
  //   console.log('logOut error : ', err);
  // }
}
export default Logout;
