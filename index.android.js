import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import MainDrawer from './app/layouts/MainDrawer'

const HikerApp = () => (
  <MainDrawer />
);
AppRegistry.registerComponent('hikerapp', () => HikerApp);
