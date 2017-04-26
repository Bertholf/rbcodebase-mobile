import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './style'

export default class LeftDashboard extends Component {
  render() {
    return (
    <View style={{flex:1,flexDirection:'column', justifyContent: 'center'}}>
      <View>
        <View>
          <View>
            <TouchableOpacity onPress= { Actions.actionswiper}>
              <Image style={{height: 50}} source={require('../../../images/dashboard/left.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    );
  }
}
