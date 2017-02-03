/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import CommentView from './app/components/Comment/CommentView';

const HikerApp = () => (
  <CommentView />
);

AppRegistry.registerComponent('hikerapp', () => HikerApp);
