/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
   AppRegistry,
 } from 'react-native';
import codePush from 'react-native-code-push';
import App from './app/App';

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

// App can wrapped only by Codepush using class structure
export default class HikerApp extends Component {
  render() {
    return (
      <App />
    );
  }
}

// Wrap the root of the application
const appWraper = codePush(codePushOptions)(HikerApp);

AppRegistry.registerComponent('hikerapp', () => appWraper);
