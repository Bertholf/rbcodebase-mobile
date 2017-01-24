
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './app/App';
import HomeContainer from './app/component/profile/HomeContainer'

const HikerApp = () => (
  <HomeContainer />
);
AppRegistry.registerComponent('hikerapp', () => HikerApp);
