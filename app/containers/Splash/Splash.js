import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
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
  componentWillMount() {
    AsyncStorage.getItem('accessToken')
      .then((token) => {
        const loadWalk = AsyncStorage.getItem('loadingWalk');
        if (token !== null && typeof token !== 'undefined') {
          console.log('TOKEN', token);
          if (loadWalk) {
            Actions.dashboard();
          } else {
            Actions.walkthrough();
          }
        } else {
          console.log('No TOKEN');
          Actions.loginscreen();
        }
      }).catch((err) => { console.log(err) })
  }
  render() {
    return (<SplashScreen />);
  }
}

export default Splash;
