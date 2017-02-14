/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*import React from 'react';
import {
   AppRegistry,
 } from 'react-native';
import App from './app/App';

const HikerApp = () => (
  <App />
);

AppRegistry.registerComponent('hikerapp', () => HikerApp);
*/
import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator, BackAndroid } from 'react-native';
import Swiper from './app/components/Listing/listing';


class ReactProject extends Component {
  render() {
    return (
      <View style = {{flex : 1 }}><Swiper/>
    </View>

    );
  }
}

AppRegistry.registerComponent('hikerapp', () => ReactProject);
