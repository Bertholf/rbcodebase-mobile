import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TextInput, Linking, Alert, TouchableOpacity } from 'react-native';
import FacebookLogin from './../../services/FacebookLogin';

const google = require('./../../images/login/google.png');
const facebook = require('./../../images/login/facebook.png');
const twitter = require('./../../images/login/twitter.png');
const logo = require('./../../images/logo.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 5,
  },
  otherlog: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
  },
  facebook: {
    height: 48,
    width: 48,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 48,
  },
  twitter: {
    height: 48,
    width: 48,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 48,
  },
  google: {
    height: 48,
    width: 48,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 48,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
});

const LoginScreen = ({ submitLogin, register, forgotPassword, updateUsername, updatePassword, loginWithGoogle, loginWithFacebook }) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={{ alignItems: 'center' }} ><Text style={{ fontSize: 14, color: '#2196F3' }}>Login With</Text></View>
      <View style={styles.otherlog}>
        <TouchableHighlight style={styles.facebook} onPress={() => FacebookLogin.getFacebookLogin()} underlayColor={'#99d9f4'}>
          <Image source={facebook} style={styles.facebook} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.google} onPress={() => loginWithGoogle()} underlayColor={'#99d9f4'}>
          <Image source={google} style={styles.google} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.twitter} onPress={() => loginWithFacebook()} underlayColor={'#99d9f4'}>
          <Image source={twitter} style={styles.twitter} />
        </TouchableHighlight>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
        <View style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.5)', width: 140, height: 1, marginLeft: 5 }} />
        <Text style={{ width: 20, color: 'rgba(0,0,0,0.8)' }}> Or </Text>
        <View style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.5)', width: 140, height: 1, marginRight: 5 }} />
      </View>
      <TextInput style={{ paddingBottom: 2 }} onChangeText={(username) => updateUsername(username)} placeholder={"Username"} placeholderTextColor={'rgba(0,0,0,0.5)'}/>
      <TextInput secureTextEntry={true} style={{paddingBottom: 2 }} onChangeText={(password) => updatePassword (password)} placeholder="Password" placeholderTextColor={'rgba(0,0,0,0.5)'}/>
      <TouchableHighlight style={styles.button} onPress={() => submitLogin()} underlayColor={'#1E88E5'}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableHighlight>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => register()}>
          <Text style={{ color: '#2196F3', margin: 10, textAlign: 'right' }}>
              Register
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => forgotPassword()}>
          <Text style={{ color: '#2196F3', margin: 10, textAlign: 'right' }}>
              Forgot Password
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

LoginScreen.propTypes = {
  // submitLogin: React.PropTypes.func.isRequired,
  // forgotPassword: React.PropTypes.func.isRequired,
  // loginWithGoogle: React.PropTypes.func.isRequired,
  // register: React.PropTypes.func.isRequired,
  // loginWithFacebook: React.PropTypes.func.isRequired,
  // loginWithTwitter: React.PropTypes.func.isRequired,
  // updatePassword: React.PropTypes.func.isRequired,
  // updateUsername: React.PropTypes.func.isRequired,
};

module.exports = LoginScreen;
