import { Alert } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

class FacebookLogin {
  constructor() {
    this.state = {
      fbLoggedIn: false,
      accessToken: '',
    };
  }

  setState(value) {
    this.state = value;
  }

  getFacebookLogin() {
    Actions.loader({ hide: false });
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      (result) => {
        if (result.isCancelled) {
          Actions.pop();
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const { accessToken } = data;
            this.setState({ fbLoggedIn: true, accessToken });
            initUser(accessToken);
          });
          Actions.actionswiper();
        }
      },
      (error) => {
        Actions.pop();
        Alert.alert('Unable to connect with facebook');
      },
    );
  }
}

const facebookLogin = new FacebookLogin();
export default facebookLogin;
