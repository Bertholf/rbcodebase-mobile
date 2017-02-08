import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import SplashScreen from '../../components/Splash/SplashScreen';
import { moveToAuthLogin, moveToDashboard } from '../../actions/Splash';

const mapStateToProps = () => ({
  loading: true,
});
const mapDispatchToProps = dispatch => ({
  goToAuth: () => dispatch(),
  dispatcher: command => dispatch(command),
  moveToAuthLogin: () => moveToAuthLogin(),
  moveToDashboard: () => moveToDashboard(),
});

export class Splash extends Component {
  componentDidMount() {
      AsyncStorage.getItem('accessToken')
      .then((token)=>{
        if (token !== null && typeof token !== 'undefined') {
          this.props.moveToDashboard();
        } else {
          this.props.moveToAuthLogin();
        }

      })
  }
  render() {
    return (<SplashScreen />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
