import React from 'react';
import { connect } from 'redux';
import { Component } from 'react-native';
import { Actions } from 'react-native-redux-router';
import SplashScreen from '../../components/Splash/SplashScreen';

const mapStateToProps = () => ({
  loading: true,
});
const mapDispatchToProps = dispatch => ({
  goToAuth: () => dispatch(),
  dispatcher: command => dispatch(command),
});

class Splash extends Component {
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
