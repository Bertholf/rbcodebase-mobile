import { GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

const url ='https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=XYZ123=';

class GoogleSignIn {
  constructor() {
    this.state = {
      user: null,
    };
    this.setupGoogleSignin();
  }
  componentDidMount() {
    this.setupGoogleSignin();
  }


  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/calendar'],
        webClientId: '867788377702-gmfcntqtkrmdh3bh1dat6dac9nfiiku1.apps.googleusercontent.com',
        offlineAccess: true
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({user});
       }
  catch (err) {
     console.log("Play services error", err.code, err.message);
   }
}

  getGoogleSignIn() {
    Actions.loader();
    GoogleSignin.signIn()
    .then((user) => {
      console.log('aku dasfasf', user);
      this.setState({ user : user });

    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done()
    Actions.timelineList();
  }


  signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({ user: null });
    })
    .done();
  }
}

export default new GoogleSignIn;
