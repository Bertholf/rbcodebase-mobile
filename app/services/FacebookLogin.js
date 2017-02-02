import { Alert } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

const url = 'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=';

function initUser(token) {
  fetch(url + token)
  .then(response => response.json())
  .then((json) => {
    console.log(json.name);
    console.log(json.id);
  })
  .catch(() => console.log('ERROR GETTING DATA FROM FACEBOOK'));
}

class FacebookLogin {
  constructor(){
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
          console.log('Login cancelled');
          Actions.pop();
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const { accessToken } = data;
            this.setState({ fbLoggedIn: true, accessToken: accessToken });
            initUser(accessToken);
            console.log('Token is : ' + this.state.accessToken);
            console.log('state loggedIn : '+ this.state.fbLoggedIn);
          });
          Actions.timelineList();
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
