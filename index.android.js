
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import MainDrawer from './app/layouts/MainDrawer'

const HikerApp = () => (
  <MainDrawer />
);
AppRegistry.registerComponent('hikerapp', () => HikerApp);
