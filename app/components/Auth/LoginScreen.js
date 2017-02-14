import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './LoginStyles';
import FacebookLogin from './../../services/FacebookLogin';

const { width,height } = Dimensions.get('window');
const facebookLogo = require('../../images/facebook-square.png');
const google2 = require('../../images/login/google.png');
const twitter = require('../../images/login/twitter.png');
const logo = require('./../../images/logo.png');
const mail = require('./../../images/ic_mail_outline_white_24dp_1x.png')

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.logo} source={logo} />

          <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonFacebook}
              activeOpacity={0.7}
              onPress={() =>this.props.loginWithFacebook()}
            >
              <View style={{ flexDirection: 'row'}}>
                <Image source={facebookLogo} style={styles.icon} />
                <Text style={styles.text}>Sign in with Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity
              style={styles.buttonGoogle}
              activeOpacity={0.7} onPress={() => this.props.loginWithGoogle()} >
              <View style={{ flexDirection: 'row'}}>
                <Image source={google2} style={styles.icon} />
                <Text style={styles.text}>Sign in with Google</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonTwitter}
              activeOpacity={0.7}
              onPress={() => this.props.loginWithTwitter()}>
              <View style={{ flexDirection: 'row'}}>
                <Image source={twitter} style={styles.logoTwitter} />
                <Text style={styles.text}>Sign in with Twitter</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
            <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginLeft: 5 }} />
            <Text style={{ width: 20, color: 'rgba(0,0,0,0.8)' }}> Or </Text>
            <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginRight: 5 }} />
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonEmail} activeOpacity={0.7}   onPress={() => Actions.loginscreenemail()}>
              <View style={{ flexDirection: 'row'}}>
                <Image style={styles.icon} source={mail} />
                <Text style={styles.text}>Sign in with Email</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 50 }}>
          <TouchableOpacity onPress={() => Actions.register()}>
            <Text style={{ color: 'black', textAlign: 'center' }}>
                  Create Account
              </Text>
          </TouchableOpacity>
        </View>

          <View style={{ marginTop: 10, alignItems: 'center' }}>
            <View style={{ height: 40 }}>
              <Text>By Signing up, you agree to App Name</Text>
              <Text style={{ color: '#2196F3' , text: 'underlineColorAndroid' }} onPress={() => Actions.tos()}> Terms of Service
              <Text style={{ color: 'grey' }}> and
                  <Text style={{ color: '#2196F3' }} onPress={() => Actions.pp()}> Privacy Policy</Text>
              </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
