import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './style';

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = { markers: [] };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
        },
      ],
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -6.90389,
            longitude: 107.61861,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}

          onPress={this.handlePress}
        >
          {this.state.markers.map((marker) => {
            return (
            <Marker {...marker} >
            </Marker>
            );
          })}
        </MapView>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }} >--Indicator of zoom scale(10:10)--</Text>
        <View style={{ flex: 1, flexDirection: 'column', marginTop: 330, marginLeft: 250 }}>
          <TouchableOpacity style={styles.square}>
            <Image style={{ borderRadius: 50, width: 20, height: 20 }} source={require('../../../images/reset.png')} />
          </TouchableOpacity>
          <Text>{'\n'}</Text>
          <TouchableOpacity style={styles.square}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.square}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image style={{ borderRadius: 30, width: 170, height: 40, marginBottom: 20, marginRight: 150 }} source={require('./../../images/add location.png')} />
        </TouchableOpacity>
        <MapView />
      </View>
    );
  }
  }
