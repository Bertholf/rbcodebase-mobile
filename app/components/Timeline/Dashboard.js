import React, { Component } from 'react';
import {
   ActivityIndicator,
   Text,
   View,
   Image,
   TouchableOpacity,
   Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './DashboardStyle';
import FacebookLogin from './../../services/FacebookLogin';
const { width, height } = Dimensions.get('window');
const chat = require('../../images/dashboard/chat.png');
const home = require('../../images/dashboard/panel.png');
const account = require('../../images/dashboard/account.png');
const modul = require('../../images/dashboard/module.png');


export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={Actions.profile}>
          <View style={{ justifyContent: 'flex-end' }}>
            <Image source={account} style={styles.account} />
          </View>
          </TouchableOpacity>


          <Text style= {{textAlign: 'center', marginTop : 100, fontSize : 18}}> Dashboard</Text>


          <View style={{ flex:1, justifyContent: 'flex-end' }}>
          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <View style={{ justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={Actions.timeline}>
            <Image style={styles.icon}
                source={modul} />
          </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={Actions.friendlist}>
            <Image style={styles.icon}
                source={home} />
          </TouchableOpacity>

          <TouchableOpacity onPress={Actions.chat}>
            <Image style={styles.icon}
                source={chat} />
          </TouchableOpacity>
          </View>
          </View>
          </View>
    );
  }
}
