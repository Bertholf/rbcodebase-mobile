import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import EmailNotif from './app/components/Setting/EmailNotif';


const HikerApp = () => (
  <EmailNotif />
);
AppRegistry.registerComponent('hikerapp', () => HikerApp);
