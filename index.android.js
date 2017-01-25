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


import App1 from './app/components/Trail/TrailDetailScreen';


const HikerApp = () => (
  <App1 />
);
AppRegistry.registerComponent('hikerapp', () => HikerApp)
