import React, { Component } from 'react';
import {
   ActivityIndicator,
   Text,
   View,
   Image,
   TouchableOpacity,
   TouchableHighlight,
   ScrollView,
   Dimensions,
 } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './LoginStyles';
const { width, height } = Dimensions.get('window');
import loginService from '../../services/AuthLogin';
import FacebookLogin from './../../services/FacebookLogin';
// import GoogleSignIn from './../../services/signingoogle';

const google = require('./../../images/login/google.png');
const facebook = require('./../../images/login/facebook.png');
const twitter = require('./../../images/login/twitter.png');
const logo = require('./../../images/logo.png');
const email = require('./../../images/ic_email_white_24dp.png');

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={{ alignItems: 'center' }} ><Text style={{ fontSize: 14, color: '#2196F3' }}>Login With</Text></View>
          <View style={styles.otherlog}>
            <TouchableHighlight style={styles.facebook} onPress={() => this.props.loginWithFacebook()} underlayColor={'#99d9f4'}>
              <Image source={facebook} style={styles.facebook} />
            </TouchableHighlight>
            <TouchableHighlight style={styles.google}
            onPress={() => this.props.loginWithGoogle()}  underlayColor={'#99d9f4'}>
            <Image source={google} style={styles.google} />
          </TouchableHighlight>
            <TouchableHighlight style={styles.twitter} onPress={() => Actions.timelineList()} underlayColor={'#99d9f4'}>
              <Image source={twitter} style={styles.twitter} />
            </TouchableHighlight>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
            <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginLeft: 5 }} />
            <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginRight: 5 }} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
            <TouchableHighlight style={{ backgroundColor: '#37474f', padding: 5, borderWidth: 0.3, borderColor: '#333' }}>
              <Image style={{ width: 28, height: 28 }} source={email} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.loginEmail()} style={{ backgroundColor: '#0277bd', borderWidth: 0.3, borderColor: '#333', padding: 5, width }}>
              <Text style={{ color: '#fff', justifyContent: 'center', height: 28, paddingTop: 3, paddingLeft: 10 }}>Sign in with Email</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}
