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
    AsyncStorage.removeItem('accessToken').then((response) => { console.log('HELLO RESPON', response); }, (error) => { console.log(error); });
    LoginManager.logOut();
    Actions.login();
  } else if (prov === 'google' && accessT !== '') {
    AsyncStorage.removeItem('accessToken').then((response) => { console.log('HELLO RESPON', response); }, (error) => { console.log(error); });
    google.signOut();
    Actions.login();
  } else if (prov === 'twitter' && accessT !== '') {
    AsyncStorage.removeItem('accessToken').then((response) => { console.log('HELLO RESPON', response); }, (error) => { console.log(error); });
    manager.configure({
      twitter: {
        consumer_key: TWITTER_CONSUMER_KEY,
        consumer_secret: TWITTER_CONSUMER_SECRET,
      },
    });
    manager.deauthorize('twitter');
    console.log('TWITTER LOG');
    // OAuthManager().deauthorize('twitter');
    Actions.login();
  } else {
    AsyncStorage.removeItem('accessToken').then((response) => { console.log('HELLO RESPON', response); }, (error) => { console.log(error); });
    Actions.login();
  }
  // } catch (err) {
  //   console.log('logOut error : ', err);
  // }

};
export default Logout;
