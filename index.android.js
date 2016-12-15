import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator, BackAndroid } from 'react-native';

import Login from './app/scenes/Login';
import Pin from './app/scenes/Pin';
import BridgetList from './app/scenes/BridgeList';
import DeviceState from './app/scenes/DeviceState';
import SharedPrefs from './app/scenes/SharedPrefs';
import Rest from './app/scenes/Rest';
import Contact from './app/scenes/Contact';
import Notif from './app/scenes/Notification';
import Receiver from './app/scenes/Receiver';
import Service from './app/scenes/Service';
import Sms from './app/scenes/Sms';
import Database from './app/scenes/Database';

import { strings } from './app/lib/Locale';

class ReactProject extends Component {
  render() {
    var initialRoute = { name:'bridge', title: strings.signup }
    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={RouteMapper}
        ref={(nav) => { this.navigator = nav }}
        />
    );
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
  }

  onBackPress() {
    if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop();
        return true;
    }
    return false;
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
    case 'bridge':
      return (
        <BridgetList
          navigator={navigator}
          />
        );
      break
    case 'ds':
      return (
        <DeviceState
          navigator={navigator}
          />
        );
      break;
    case 'sp':
      return (
        <SharedPrefs
          navigator={navigator}
          />
        );
      break;
    case 'rest':
      return (
        <Rest
          navigator={navigator}
          />
        );
      break;
    case 'contact':
      return (
        <Contact
          navigator={navigator}
          />
        );
      break;
    case 'notif':
      return (
        <Notif
          navigator={navigator}
          />
        );
      break;
    case 'receiver':
      return (
        <Receiver
          navigator={navigator}
          />
        );
      break;
    case 'service':
      return (
        <Service
          navigator={navigator}
          />
        );
      break;
    case 'sms':
      return (
        <Sms
          navigator={navigator}
          />
        );
      break;
    case 'db':
      return (
        <Database
          navigator={navigator}
          />
        );
      break;
    default:
      break;
  }
}

AppRegistry.registerComponent('ReactProject', () => ReactProject);
