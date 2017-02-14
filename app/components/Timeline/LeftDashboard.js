import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class LeftDashboard extends Component {
  render() {
    return (
    <View style={{flex:1,flexDirection:'column', justifyContent: 'center'}}>
      <View>
        <View>
          <View>
            <TouchableOpacity onPress= { Actions.actionswiper}>
              <Image style={{height: 50}} source={require('../../images/dashboard/left.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
