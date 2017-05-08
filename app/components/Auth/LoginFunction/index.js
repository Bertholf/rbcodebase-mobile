import React, { Component } from 'react';
import 'react-native';
import LoginScreen from './../LoginScreen';

class LoginFucntion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  updateUsername(username) {
    this.setState({ email: username });
  }

  render() {
    return <LoginScreen />;
  }
}

module.exports = LoginFucntion;
