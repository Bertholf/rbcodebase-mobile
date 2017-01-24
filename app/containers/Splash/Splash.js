import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-redux-router';
import SplashScreen from '../../components/Splash/SplashScreen';
import { moveToAuthLogin } from '../../actions/Splash';

const mapStateToProps = () => ({
  loading: true,
});
const mapDispatchToProps = dispatch => ({
  goToAuth: () => dispatch(),
  dispatcher: command => dispatch(command),
  moveToAuthLogin: () => {
    Actions.login();
  },
  moveToDashboard: () => {
    Actions.welcome();
  },
});

export class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.moveToDashboard();
    }, 5000);
  }
  render() {
    return (<SplashScreen />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
