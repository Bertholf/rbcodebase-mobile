import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
const {width, height} = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: '#2196F3',
    marginBottom: 10
  },
  box: {
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9
  },
  content: {
    textAlign: 'center',
    margin:20
  },
  deactivate: {
    backgroundColor: '#2196F3',
    alignSelf: 'stretch',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center'
  }
});
