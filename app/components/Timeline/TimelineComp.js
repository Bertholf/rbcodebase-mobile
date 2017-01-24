import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#009688',

  },
  text: {
    fontSize: 10,
    textAlign: 'right',
    margin: 2,
    color: '#f8f8ff',
    backgroundColor: '#009688',

    padding: 8,
    elevation: 3,
  },
  nameProfile: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#ffffff',
    padding: 8,
    fontSize: 30,
    margin: 4,
    backgroundColor: '#009688',
  },
  mainView: {
    marginLeft: 16,
    marginRight: 16,

    backgroundColor: '#ffffff',
    elevation: 4,
  },
});

export default class MapMain extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.card}>
          <Image source={require('./1.jpeg')} style={{ width: 75, height: 75, borderRadius: 70, margin: 6 }} />
          <Text style={styles.nameProfile}>Nama Profile</Text>
        </View>

        <Image source={{ uri: 'http://ke5ter.com/img/route.png' }} style={{ width: 325, height: 183, alignItems: 'center', marginLeft: 2 }} />

        <Text style={styles.text}>Tangkuban Perahu</Text>
        <Text style={styles.text}>KM</Text>

      </View>

    );
  }
}
