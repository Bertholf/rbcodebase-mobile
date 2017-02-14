/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
   AppRegistry,
 } from 'react-native';
import App from './app/components/Timeline/Dashboard';

const HikerApp = () => (
  <App />
);

AppRegistry.registerComponent('hikerapp', () => HikerApp);
