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

import styles from './styles';
// import {GoogleSigninButton} from 'react-native-google-signin';
// import GoogleSignIn from './../../services/signingoogle';
import FacebookLogin from './../../services/FacebookLogin';
import facebookRegister from '../../services/FacebookRegister';
import registerService from '../../services/AuthRegister';
import registerWithGoogle from '../../services/googleRegister';
import google from '../../modules/google';
import twitterRegister from '../../services/TwitterRegister';
import strings from './../../localizations/';


const { width } = Dimensions.get('window');
const facebookLogo = require('../../images/facebook-square.png');
const google2 = require('../../images/login/google.png');
const twitter = require('../../images/login/twitter.png');
const logo = require('./../../images/logo.png');
const mail = require('./../../images/ic_email_white_24dp.png');

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      male: true,
      female: false,
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      gender: 'male',
      validFName: true,
      validLName: true,
      validEmail: true,
      validUsername: true,
      validPass: true,
      errMsg: '',
      loading: false,
    };
  }

  // dummy button action
  register() {
    Alert.alert('Button Pressed');
  }

  registerWithGoogle() {
    google.signIn()
    .then(({user}) => Actions.registrationform({firstName: user.name.split(' ')[0], lastName: user.name.split(' ')[1], email: user.email}))
  }

  render() {
    strings.setLanguage('id');
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.separatorText}>{strings.register.RegisterWith}</Text>
          <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonFacebook}
              activeOpacity={0.7}
              onPress={() => facebookRegister()}
            >
              <View style={{ flexDirection: 'row'}}>
                <Image source={facebookLogo} style={styles.facebookLogo} />
                <Text style={styles.text}>{strings.register.Registerfacebook}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity
              style={styles.buttonGoogle}
              activeOpacity={0.7} onPress={() => this.registerWithGoogle()} >
              <View style={{ flexDirection: 'row'}}>
                <Image source={google2} style={styles.logoGoogle} />
                <Text style={styles.text}>{strings.register.RegisterGoogle}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonTwitter}
              activeOpacity={0.7}
              onPress={() => twitterRegister()}>
              <View style={{ flexDirection: 'row'}}>
                <Image source={twitter} style={styles.logoTwitter} />
                <Text style={styles.text}>{strings.register.RegisterTwitter}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
            <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginLeft: 5 }} />
            <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginRight: 5 }} />
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity
              style={styles.buttonEmail}
              activeOpacity={0.7}
              onPress={Actions.registrationform}>
              <View style={{ flexDirection: 'row'}}>
                <Image style={styles.icon} source={mail} />
                <Text style={styles.text}>{strings.register.RegisterEmail}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 8, paddingBottom: 10 }}>
            <TouchableOpacity onPress={Actions.loginscreen}>
              <Text style={{ fontSize: 14, color: 'black' }}>{strings.register.SignIn}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10, alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{justifyContent: 'center' }}>{strings.register.BySigningupYouAgree}</Text>
              <Text style={{ color: '#2196F3' }} onPress={() => Actions.tos()}> {strings.register.TermsofService}
              <Text style={{ color: 'grey' }}> {strings.register.And}
                  <Text style={{ color: '#2196F3' }} onPress={() => Actions.pp()}> {strings.register.PrivacyPolicy}</Text>
              </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}
