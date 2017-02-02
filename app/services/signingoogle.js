import { GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { ActivityIndicator, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

class GoogleSignIn {
  constructor() {
    this.state = {
      user: null,
    };
    GoogleSignin.configure({
      scopes: ['email', 'profile'],
      webClientId: '855412335195-5f869c8610qr44dbl3tcpi2a477mu657.apps.googleusercontent.com',
      offlineAccess: true
    });
  }


  setupGoogleSignin() {
    return GoogleSignin.hasPlayServices({ autoResolve: true });
  }

  getGoogleSignIn() {
    // Actions.loader();
    this.setupGoogleSignin().then(() => GoogleSignin.signIn())
    .then((received) => {
      const user = GoogleSignin.currentUser();
      Actions.timelineList();
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }


  signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({ user: null });
    })
    .done();
  }
}

export default new GoogleSignIn;
