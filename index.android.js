/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
   AppRegistry,
 } from 'react-native';
import Profile from './app/components/Profile/Profile';

const HikerApp = () => (
  <Profile />
);

AppRegistry.registerComponent('hikerapp', () => HikerApp);
