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

          <View style={styles.otherlog}>
            <TouchableHighlight style={styles.facebook} onPress={() => this.props.loginWithFacebook()} underlayColor={'#99d9f4'}>
              <Image source={facebook} style={styles.facebook} />
            </TouchableHighlight>
            <TouchableHighlight style={styles.twitter} onPress={() => Actions.timelineList()} underlayColor={'#99d9f4'}>
              <Image source={twitter} style={styles.twitter} />
            </TouchableHighlight>
            <TouchableHighlight style={styles.google}
              onPress={() => this.props.loginWithGoogle()} underlayColor={'#f44336'}>
              <View style={{flexDirection: 'row', paddingLeft: 5 }}>
              <View style ={styles.logoGoogle}><Image source={google} style={styles.logoGoogle} /></View>
              <View style= {{justifyContent: 'space-around', paddingLeft: 30 }}><Text style={styles.buttonText}>Signin with Google</Text></View>
              </View>
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
          <View style={{ padding: 50 }}>
            <TouchableOpacity onPress={() => Actions.register()}>
              <Text style={{ color: 'black', textAlign: 'center' }}>
                  Create Account
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ textAlign: 'center' }}>
            <Text style={{ color: 'grey', textAlign: 'center' }}>
                By signing up, you agree to RBC
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View style={{ height: 40 }}>
              <Text style={{ color: '#2196F3', text: 'underlineColorAndroid' }} onPress={() => Actions.tos()}> Terms of Service
              <Text style={{ color: 'grey' }}> and
                  <Text style={{ color: '#2196F3' }} onPress={() => Actions.pp()}> Privacy Policy</Text>
              </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
