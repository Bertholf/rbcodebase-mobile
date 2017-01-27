import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196f3',
  },
  imagesLeft: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  list: {
    marginTop: 10,
    alignItems : 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ffffff',
  },
  list1: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 20,
    padding: 15,
  },
  text: {
    color: '#000000',
    fontSize: 20,
  },
  deactive: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 10,
  },
})

module.exports = styles;
