import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TextInput, Linking, Alert, TouchableOpacity } from 'react-native';

const google = require('./../../images/google.png');
const facebook = require('./../../images/facebook.png');
const twitter = require('./../../images/twitter.png');
const logo = require('./../../images/logo.png');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    flex: 1,
    backgroundColor: '#dddddd',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#1565C0',
    borderColor: '#1976D2',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  facebook: {
    height: 48,
    width: 48,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  twitter: {
    height: 48,
    width: 48,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  google: {
    height: 48,
    width: 48,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  otherlog: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
});

const LoginScreen = ({ submitLogin, register, forgotPassword, updateUsername, updatePassword, loginWithGoogle, loginWithFacebook }) => {
  return (
    <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={{alignItems: 'center', top: 10, marginBottom: 10 }} ><Text>Login With</Text></View>
        <View style={styles.otherlog}>
          <TouchableHighlight style={styles.facebook} onPress={() => loginWithFacebook()} underlayColor={'#99d9f4'}>
            <Image source={facebook} style={styles.facebook} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.google} onPress={() => loginWithGoogle()} underlayColor={'#99d9f4'}>
            <Image source={google} style={styles.google} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.twitter} onPress={() => loginWithFacebook()} underlayColor={'#99d9f4'}>
            <Image source={twitter} style={styles.twitter} />
          </TouchableHighlight>
        </View>
        <View style={{ alignItems: 'center', top: 10, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
          <View style={{ borderWidth: 1, borderColor: 'grey', width: 150, height: 1, marginLeft: 5 }}/>
          <Text style={{ width: 20, margin: 5 }}> Or </Text>
          <View style={{ borderWidth: 1, borderColor: 'grey', width: 150, height: 1, marginRight: 5 }}/>
        </View>
        <TextInput style={{height: 40}} onChangeText={(username) => updateUsername(username)} placeholder={"Username"} />
        <TextInput secureTextEntry={true} style={{height: 40}} onChangeText={(password) => updatePassword (password)} placeholder="Password"/>
        <TouchableHighlight style={styles.button} onPress={() => submitLogin()} underlayColor={'#99d9f4'}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <TouchableOpacity onPress={() => register()}>
            <Text style={{ color : 'blue', margin : 10, textAlign :'right' }}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => forgotPassword()}>
            <Text style={{ color: 'blue', margin : 10, textAlign :'right' }}>
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
