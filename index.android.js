
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React from 'react';
// import {
//   AppRegistry,
// } from 'react-native';
// import App from './app/App';
//
// const HikerApp = () => (
//   <App />
// );
// AppRegistry.registerComponent('hikerapp', () => HikerApp);


import React, {Component} from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import Chat from './app/components/Chat/ChatView';

export default class HikerApp extends Component {
render() {
  return (
    <View><Chat/></View>
  );
}
}

AppRegistry.registerComponent('hikerapp', () => HikerApp);
