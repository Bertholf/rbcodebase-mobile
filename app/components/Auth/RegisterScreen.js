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

const { width } = Dimensions.get('window');
const facebookLogo = require('../../images/facebook-square.png');
const google2 = require('../../images/login/google.png');
const twitter = require('../../images/login/twitter.png');
const logo = require('./../../images/logo.png');
const mail = require('./../../images/ic_mail_outline_white_24dp_1x.png')
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
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.separatorText}>Register with:</Text>
          <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonFacebook}
              activeOpacity={0.7}
              onPress={() => FacebookLogin.getFacebookLogin()}
            >
              <View style={{ flexDirection: 'row'}}>
                <Image source={facebookLogo} style={styles.icon} />
                <Text style={styles.text}>Register With Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity
              style={styles.buttonGoogle}
              activeOpacity={0.7} onPress={() => this.registerWithGoogle()} >
              <View style={{ flexDirection: 'row'}}>
                <Image source={google2} style={styles.icon} />
                <Text style={styles.text}>Register With Google</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonTwitter}
              activeOpacity={0.7}
              onPress={() => this.register()}>
              <View style={{ flexDirection: 'row'}}>
                <Image source={twitter} style={styles.icon} />
                <Text style={styles.text}>Register With Twitter</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
            <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginLeft: 5 }} />
            <Text style={{ width: 20, color: 'rgba(0,0,0,0.8)' }}> Or </Text>
            <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginRight: 5 }} />
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonEmail} activeOpacity={0.7} onPress={Actions.registrationform}>
              <View style={{ flexDirection: 'row'}}>
                <Image style={styles.icon} source={mail} />
                <Text style={styles.text}>Register With Email</Text>
              </View>
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
      </ScrollView>
      </View>
    );
  }
}
