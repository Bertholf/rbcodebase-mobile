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
    //change or update to username from mail
    this.setState({ email: username });
  }

  render() {
    return <LoginScreen />;
  }
}

module.exports = LoginFucntion;
