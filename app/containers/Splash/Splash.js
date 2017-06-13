import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import strings from '../../localizations';
import SplashScreen from '../../components/Splash/SplashScreen';
import { moveToAuthLogin, moveToDashboard } from '../../actions/Splash';

const mapStateToProps = () => ({
  loading: true,
});
// const mapDispatchToProps = dispatch => ({
//   goToAuth: () => dispatch(),
//   dispatcher: command => dispatch(command),
//   moveToAuthLogin: () => moveToAuthLogin(),
//   moveToDashboard: () => moveToDashboard(),
// });

export class Splash extends Component {
  constructor(props) {
    // Initialize the Localization File
    const lang = strings.getInterfaceLanguage();
    let setlang;
    switch (lang) {
      case 'in-ID':
        console.log('Bahasa');
        setlang = 'id';
        break;
      case 'en-US':
        console.log('Language');
        setlang = 'en';
        break;
      default:
        setlang = 'en';
        break;
    }
    strings.setLanguage(setlang);
    super(props);
    this.state = {
      screen: strings.walkthrought.screen,
    };
  }
  componentWillMount() {
    AsyncStorage.getItem('accessToken')
      .then((token) => {
        AsyncStorage.getItem('loadingWalk').then((response) => {
          console.log('HELLO RESPON', response);
          if (token !== null && typeof token !== 'undefined') {
            console.log('TOKEN', token);
            Actions.actionswiper({ type: 'reset' });
          } else {
            console.log('No TOKEN');
            if (response === 'true') {
              Actions.walkthrough({ type: 'reset' });
              // Give Action if there is no Token found
              //
              // e.g Actions.login({ type: 'reset' });
            } else if (response === null) {
              Actions.walkthrough({ type: 'reset' });
            } else {
              console.log('ERRRRRR');
            }
          }
        }, (error) => {
          console.log(error);
        });
      }).catch((err) => { console.log(err) })
  }
  render() {
    return (<SplashScreen />);
  }
}

export default Splash;
