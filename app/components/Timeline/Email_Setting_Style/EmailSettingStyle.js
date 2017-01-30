'use strict';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  OuterView: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  View1: {
    marginLeft: 16,
    alignItems: 'flex-start',
    paddingTop: 50,

  },
  View2: {
    //justifyContent: 'center',//
    alignItems: 'center',
    marginTop: 80,
    elevation: 2,
    backgroundColor: '#1565c0',
  },
  Button: {
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',


  },
  Text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1565c0',
    alignItems: 'flex-start',
    paddingTop: 16,
    paddingBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: '#1565c0',
    marginLeft: 16,
    marginRight: 16,
  },
  Text2: {
    fontSize: 18,
    alignItems: 'flex-start',
    paddingTop: 8,
  },
  Text3: {
    fontSize: 14,
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  Text4: {
    fontSize: 30,
    color: '#ffffff',
  },
  Text5: {
    fontSize: 18,
    alignItems: 'flex-start',
    paddingTop: 20,

  },
  TextInput1: {
    height: 50,
    width: 250,
    paddingTop: 2,
  },
  TextInput2: {
    height: 50,
    width: 250,
    paddingTop: 2,
  },
});

module.exports = styles;
