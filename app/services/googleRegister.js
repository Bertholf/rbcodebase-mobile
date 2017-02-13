import google from './../modules/google';
import { Actions } from 'react-native-router-flux';

function onSignIn(googleUser) {
  const props = googleUser.getBasicProfile();
  ID: profile.getId;
  Name: profile.getName;
  email: profile.getEmail;
  // console.log('ID: ' + profile.getId());
  // console.log('Name: ' + profile.getName());
  // console.log('Email: ' + profile.getEmail());
}
//Actions.register(props);


export default onSignIn;
