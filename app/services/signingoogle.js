import React, { Component } from 'react';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class GoogleSignIn{
  constructor(props) {
    this.state={
      user: {},
    };
    this.setupGoogleSignin();
  }
  render() {
        return (
          <View style={styles.container}>
            <GoogleSigninButton style={ {width: 70, height: 50, borderRadius:100}}
              color={GoogleSigninButton.Color.Light}
              size={GoogleSigninButton.Size.Icon}
              onPress={() => { this.signIn(); }}/>
          </View>
        );
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
   catch(err) {
     console.log("Play services error", err.code, err.message);
   }
}

  getGoogleSignIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user});
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }
}
export default new GoogleSignIn;
