import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator } from 'react-native';

import Login from './app/scenes/Login';
import Pin from './app/scenes/Pin';

import { strings } from './app/lib/Locale';

class ReactProject extends Component {
  render() {
    var initialRoute = { name:'login', title: strings.signup }
    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={RouteMapper}
        />
    );
  }
}

var RouteMapper = function(route, navigator) {
  switch (route.name) {
    case 'pin':
      return (
        <Pin
          title={route.title}
          navigator={navigator}
          />
      );
      break;
    case 'login':
      return (
        <Login
          navigator={navigator}
          />
      );
      break;
    default:
      break;
  }
}

AppRegistry.registerComponent('ReactProject', () => ReactProject);
