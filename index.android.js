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

import Timeline from './Timeline'

class ReactProject extends Component {
  render() {
    return(
      <Timeline />
    )
  }
}

AppRegistry.registerComponent('ReactProject', () => ReactProject);
