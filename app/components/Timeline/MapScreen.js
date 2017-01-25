import React, { Component } from 'react';
import { AppRegistry, Text, View,  Navigator, BackAndroid, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map:{
    flex : 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})
export default class Maps extends Component {

render() {
  return (
    <View style = {styles.container}><MapView style ={styles.map}
    initialRegion={{
      latitude: 45.5209087,
      longitude: -122.6705107,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
</View>
  );
}
}
