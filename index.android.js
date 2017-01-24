import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import ForgotPassword from './app/components/Auth/ForgotPassword';

const HikerApp = () => (
  <ForgotPassword />
);
AppRegistry.registerComponent('hikerapp', () => HikerApp);
