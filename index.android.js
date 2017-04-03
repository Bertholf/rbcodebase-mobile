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

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

export default class HikerApp extends Component {
  render() {
    return (
      <App />
    );
  }
}


const appWrap = codePush(codePushOptions)(HikerApp);

AppRegistry.registerComponent('hikerapp', () => appWrap);
