import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 2,
    fontSize: 40,
    fontWeight: 'bold',

  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ff5722',
    fontWeight: 'bold',
    marginLeft: 50,
    marginRight: 50,
    height: 30,
  },
});

const Gender = () => {
    return (
      <View style={{ marginTop: 30 }}>
      <View style={{justifyContent: 'flex-start', flexDirection: 'row', marginTop: 40}}>
      <TouchableOpacity style ={{width: 100, height:100, marginLeft: 70 }}>
        <Image  source ={require('./../../images/male.png')} />
        <Text style={{ fontSize: 20 }}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style ={{width: 100, height:100, marginLeft: 50 }}>
        <Image source ={require('./../../images/female.png')} />
        <Text style={{ fontSize: 20 }}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>
   );
 }

 module.exports = Gender;
