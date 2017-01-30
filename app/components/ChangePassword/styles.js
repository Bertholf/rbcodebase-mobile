import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  box: {
    marginTop: 70,
    width: width * 0.9
  },
  icon: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#2196F3'
  },
  new_password: {
    marginTop: 20
  },
  button_save: {
    backgroundColor: '#2196F3',
    padding: 10,
    marginTop: 50,
    borderRadius: 5,
    alignItems: 'center',
    width: width * 0.5
  },
  link: {
    color : '#2196F3',
    margin : 10,
    textAlign :'left'
  },
  middle_line: {
    borderWidth: 0.4,
    borderColor: 'grey',
    width: width * 0.2,
    height: 0.5,
  },
  middle_text: {
    width: width * 0.4,
    margin: 5,
    textAlign: 'center', 
    fontStyle: 'italic'
  }
})
