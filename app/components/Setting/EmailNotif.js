import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default class EmailNotif extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: 'white' }}>
          <Text style={{ fontSize: 25, color:'white' }}>Email Setting</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: 'white' }}>
          <Text style={{ fontSize: 15, color:'white' }}>Receive Update</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: 'white' }}>
          <Text style={{ fontSize: 15, color:'white' }}>Receive Update</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('emailNotif', () => emailNotif);
