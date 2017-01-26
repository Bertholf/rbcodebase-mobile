import React from 'react';
import {
  AppRegistry,
} from 'react-native';
// import App from './app/App';
import MainDrawer from './app/layouts/MainDrawer'

const HikerApp = () => (
  <MainDrawer />
);
AppRegistry.registerComponent('hikerapp', () => HikerApp);
