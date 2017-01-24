import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-redux-router';
import SplashScreen from '../../components/Splash/SplashScreen';

const mapStateToProps = () => ({
  loading: true,
});
const mapDispatchToProps = dispatch => ({
  goToAuth: () => dispatch(),
  dispatcher: command => dispatch(command),
});

export class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.welcome();
    }, 5000);
  }
  render() {
    return (<SplashScreen />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
