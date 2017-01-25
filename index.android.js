import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import MainDrawer from './app/layouts/MainDrawer'


import App1 from './app/components/Trail/TrailDetailScreen';


const HikerApp = () => (
  <App1 />
);
AppRegistry.registerComponent('hikerapp', () => HikerApp);
