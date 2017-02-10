import React, { Component } from 'react';
import React, { DeviceEventEmitter, StyleSheet, Text,View, } from 'react-native';
const RNALocation = require('react-native-android-location');


const RNALocation = React.createClass({
  // Create and Reset initial State Longitude (lng) and Latitude (lat)
  getInitialState() { return { lng: 0.0, lat: 0.0}; },

  componentDidMount() {
  	  // Register Listener Callback !Important!
      DeviceEventEmitter.addListener('updateLocation',(e: Event) {
          this.setState({lng: e.Longitude, lat: e.Latitude });
      }.bind(this));
      // Initialize RNALocation
      RNALocation.getLocation();
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.location}>
          Lng: {this.state.lng} Lat: {this.state.lat}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    textAlign: 'center'
  }
});
