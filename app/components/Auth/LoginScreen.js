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
import FacebookLogin from './../../services/FacebookLogin';


// import GoogleSignIn from './../../services/signingoogle';

const { width, height } = Dimensions.get('window');
const facebookLogo = require('../../images/facebook-square.png');
const google = require('../../images/login/google.png');
const twitter = require('../../images/login/twitter.png');
const logo = require('./../../images/logo.png');
const email = require('./../../images/ic_email_white_24dp.png');


export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.otherlog}>
          <TouchableOpacity onPress={() => this.props.loginWithFacebook()}
            style={styles.facebookBtn}
          >
            <View style={{ flexDirection: 'row', paddingLeft: 7}}>
              <View style={styles.facebookLogo}>
                <Image
                  style={styles.facebookLogo}
                  source={facebookLogo}
                />
              </View>
              <View style={{ justifyContent: 'space-around', paddingLeft: 23 }} >
                <Text style={styles.facebookText}>Sign in with Facebook</Text>
              </View>
            </View>
          </TouchableOpacity>
            <TouchableHighlight
              style={styles.google}
              onPress={() => this.props.loginWithGoogle()} underlayColor={'#f44336'}>
              <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
                <View style={styles.logoGoogle}>
                  <Image source={google} style={styles.logoGoogle} /></View>
                <View style={{ justifyContent: 'space-around', paddingLeft: 18 }}><Text style={styles.buttonText}>Sign in with Google</Text></View>
              </View>
            </TouchableHighlight>
          </View>
        <TouchableHighlight
          style={styles.twitter}
          onPress={() => this.props.loginWithTwitter()} underlayColor={'#1E88E5'}>
          <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
            <View style={styles.logoTwitter}>
              <Image source={twitter} style={styles.logoTwitter} /></View>
            <View style={{ justifyContent: 'space-around', paddingLeft: 20 }}><Text style={styles.buttonText}>Sign in with Twitter</Text></View>
          </View>
        </TouchableHighlight>
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
          <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginLeft: 5 }} />
          <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginRight: 5 }} />
        </View>
        <View style={styles.loginEmail}>
          <TouchableHighlight
            style={styles.email}
            onPress={() => Actions.loginscreenemail()} underlayColor={'#039be5'}>
            <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
              <View style={styles.logoEmail}>
                <Image source={email} style={styles.logoEmail} />
              </View>
              <View style={{ justifyContent: 'space-around', paddingLeft: 20 }}>
                <Text style={styles.buttonText}>Sign in with Email</Text>
              </View>
            </View>
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
      </View>
    );
  }
}
