import { AsyncStorage, NativeModules } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LoginManager } from 'react-native-fbsdk';
import OAuthManager from 'react-native-oauth';
import config from '../config';
import manager from '../actions/Auth';

const google = NativeModules.GoogleSignInModule;
const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = config;
const Logout = () => {
  AsyncStorage.getItem('accessToken')
  .then((accessToken) => {
    let temp1 = [];
    temp1.push(accessToken);
    AsyncStorage.getItem('provider')
    .then((provider) => {
      temp1.push(provider);
      console.log('my TEMP', temp1);
      return temp1;
    })
    .then((temp) => {
      if (temp[1] === 'facebook' && temp[0] !== null) {
        AsyncStorage.removeItem('accessToken').then((response) => { console.log('HELLO RESPON FACEBOOK', response); }, (error) => { console.log(error); });
        LoginManager.logOut();
        Actions.login({ type: 'reset'});
      } else if (temp[1] === 'google' && temp[0] !== '') {
        AsyncStorage.removeItem('accessToken').then((response) => { console.log('HELLO RESPON', response); }, (error) => { console.log(error); });
        google.signOut();
        Actions.login({ type: 'reset' });
      } else if (temp[1] === 'twitter' && temp[0] !== '') {
        AsyncStorage.removeItem('accessToken').then((response) => { console.log('HELLO RESPON', response); }, (error) => { console.log(error); });
        Actions.login({ type: 'reset' });
        manager.configure({
          twitter: {
            consumer_key: TWITTER_CONSUMER_KEY,
            consumer_secret: TWITTER_CONSUMER_SECRET,
          },
        });
        manager.deauthorize('twitter');
        console.log('TWITTER LOG');
        // OAuthManager().deauthorize('twitter');
      } else {
        AsyncStorage.removeItem('accessToken').then((response) => { console.log('HELLO RESPON', response); }, (error) => { console.log(error); });
        Actions.login({ type: 'reset' });
      }

  })
  }).catch(err => console.log(err));

  // } catch (err) {
  //   console.log('logOut error : ', err);
  // }

};
export default Logout;
