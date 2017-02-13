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
import registerService from '../../services/AuthRegister';

const { width } = Dimensions.get('window');
const facebookLogo = require('../../images/facebook-square.png');
const google = require('../../images/login/google.png');
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
              activeOpacity={0.7} onPress={() => this.register()} >
              <View style={{ flexDirection: 'row'}}>
                <Image source={google} style={styles.icon} />
                <Text style={styles.text}>Register With Google</Text>
              </View>
            </TouchableOpacity>
            </View>
            <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonTwitter} activeOpacity={0.7} onPress={() => this.register()}>
              <View style={{ flexDirection: 'row'}}>
                <Image source={facebookLogo} style={styles.icon} />
                <Text style={styles.text}>Register With Twitter</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonEmail} activeOpacity={0.7} onPress={() => this.register()}>
              <View style={{ flexDirection: 'row'}}>
                <Image style={styles.icon} source={mail} />
                <Text style={styles.text}>Register With Email</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}
