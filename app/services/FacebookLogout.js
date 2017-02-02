import { LoginManager } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

class FacebookLogout {
  getFacebookLogout() {
    LoginManager.logOut();
    Actions.login();
  }
}

const facebookLogout = new FacebookLogout();
export default facebookLogout;
