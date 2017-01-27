import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import Profile from './app/components/Profile/Profile'

const HikerApp = () => (
  <Profile />
);
AppRegistry.registerComponent('hikerapp', () => HikerApp);
