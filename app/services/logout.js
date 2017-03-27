import { AsyncStorage, NativeModules } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LoginManager } from 'react-native-fbsdk';
import manager from '../actions/Auth';

// Load native google SSO native module
const google = NativeModules.GoogleSignInModule;
const Logout = () => {
  /**
   * Initialize by load all current info
   */
  AsyncStorage.multiGet(['accessToken', 'userId', 'name_first', 'name_last', 'name_slug', 'email',
    'status', 'confirmed', 'verified', 'language', 'timezone', 'timeline_id', 'img_avatar', 'img_background',
    'referring_user_id', 'created_at', 'updated_at', 'deleted_at', 'current_team_id', 'picture', 'registered', 'message'])
  .then((accessToken) => {
    const temp1 = [];
    temp1.push(accessToken);
    AsyncStorage.getItem('provider')
    .then((provider) => {
      temp1.push(provider);
      return temp1;
    })
    .then((temp) => {
      if (temp[1] === 'facebook' && temp[0] !== null) {
        /**
         * Logout Method for Facebook Provider
         */
        AsyncStorage.multiRemove(['accessToken', 'FcmToken', 'userId', 'name_first', 'name_last', 'name_slug', 'email',
          'status', 'confirmed', 'verified', 'language', 'timezone', 'timeline_id', 'img_avatar', 'img_background',
          'referring_user_id', 'created_at', 'updated_at', 'deleted_at', 'current_team_id', 'picture', 'registered', 'message']).then((response) => { console.log('HELLO RESPON FACEBOOK', response); }, (error) => { console.log(error); });
        LoginManager.logOut();
        Actions.login({ type: 'reset' });
      } else if (temp[1] === 'google' && temp[0] !== '') {
        /**
         * Logout Method for Google Provider
         */
        AsyncStorage.multiRemove(['accessToken', 'userId', 'FcmToken', 'name_first', 'name_last', 'name_slug', 'email',
          'status', 'confirmed', 'verified', 'language', 'timezone', 'timeline_id', 'img_avatar', 'img_background',
          'referring_user_id', 'created_at', 'updated_at', 'deleted_at', 'current_team_id', 'picture', 'registered', 'message']).then((response) => { console.log('HELLO RESPON', response); }, (error) => { console.log(error); });
        google.signOut();
        // GoogleSignOut()
        Actions.login({ type: 'reset' });
      } else if (temp[1] === 'twitter' && temp[0] !== '') {
        /**
         * Logout Method for Twitter Provider
         */
        AsyncStorage.multiRemove(['accessToken', 'userId', 'FcmToken', 'name_first', 'name_last', 'name_slug', 'email',
          'status', 'confirmed', 'verified', 'language', 'timezone', 'timeline_id', 'img_avatar', 'img_background',
          'referring_user_id', 'created_at', 'updated_at', 'deleted_at', 'current_team_id', 'picture', 'registered', 'message']).then((response) => { console.log('HELLO RESPON', response); }, (error) => { console.log(error); });
        Actions.login({ type: 'reset' });
        // manager.deauthorize('twitter'); It's caused unhandle promise
      } else {
        /**
         * Logout Method for login by Email
         */
        AsyncStorage.removeItem('accessToken').then((response) => { console.log('HELLO RESPON', response); }, (error) => { console.log(error); });
        Actions.login({ type: 'reset' });
      }
    });
  }).catch(err => console.log(err));
};

export default Logout;
