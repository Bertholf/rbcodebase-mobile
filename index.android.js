import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import LoginScreen from './app/components/Auth/LoginScreen';

const HikerApp = () => (
  <LoginScreen />
);
AppRegistry.registerComponent('hikerapp', () => HikerApp);
