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
  Timers,
  AsyncStorage,
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
import twitterModule from '../../modules/twitter';
import twitterRegister from '../../services/TwitterRegister';
import strings from './../../localizations/';
import Loader from '../../views/Loader';
import auth from '../../services/auth';


const { width } = Dimensions.get('window');
const facebookLogo = require('../../images/facebook-square.png');
const google2 = require('../../images/login/gplus.png');
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
    .then(({user}) => Actions.registrationform({ firstName: user.name.split(' ')[0], lastName: user.name.split(' ')[1], email: user.email, username: '' }))
  }
  registerWithTwitter() {
    twitterModule.signIn()
    .then((res) => {
      const twitterResponse = res;
      auth.checktwitter(res.token, res.provider, res.secret)
      .then((resL) => {
        console.log('resL', resL);
        if (resL.data.registered === false) {
          Actions.registrationform({
            firstName: resL.data.name.split(' ')[0],
            lastName: resL.data.name.split(' ')[1],
            username: resL.data.nickname,
            email: resL.data.email,
            provider: 'twitter',
            secret: twitterResponse.secret,
            accessToken: twitterResponse.token,
          });
        } else {
          AsyncStorage.setItem('provider', 'twitter');
          AsyncStorage.setItem('accessToken', resL.data.access_token)
          .then(() => {
            this.registered();
          });
        }
      }).catch(err => console.log(err));
    })
    .catch(err => console.log("ERROR TWITTER", err));
  }
  registered() {
    const loader = Actions.loaderview({message: 'You are already registered', onPress: () => Actions.actionswiper({type: 'reset'})});
    setTimeout(() => Actions.actionswiper({ type: 'reset'}), 1000);
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.separatorText}>{strings.register.Register_with}</Text>
          <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonFacebook}
              activeOpacity={0.7}
              onPress={() => facebookRegister(() => this.registered())}
            >
              <View style={{ flexDirection: 'row'}}>
                <Image source={facebookLogo} style={styles.facebookLogo} />
                <Text style={styles.text}>{strings.register.Register_facebook}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity
              style={styles.buttonGoogle}
              activeOpacity={0.7} onPress={() => this.registerWithGoogle()} >
              <View style={{ flexDirection: 'row'}}>
                <Image source={google2} style={styles.logoGoogle} />
                <Text style={styles.text}>{strings.register.Register_google}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.otherlog}>
            <TouchableOpacity style={styles.buttonTwitter}
              activeOpacity={0.7}
              onPress={() => this.registerWithTwitter()}>
              <View style={{ flexDirection: 'row'}}>
                <Image source={twitter} style={styles.logoTwitter} />
                <Text style={styles.text}>{strings.register.Register_twitter}</Text>
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
                <Text style={styles.text}>{strings.register.Register_email}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 8, paddingBottom: 10 }}>
            <TouchableOpacity onPress={Actions.loginscreen}>
              <Text style={{ fontSize: 14, color: 'black' }}>{strings.register.Sign_in}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10, alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{justifyContent: 'center' }}>{strings.register.sign_agreement}</Text>
              <Text style={{ color: '#2196F3' }} onPress={() => Actions.tos()}> {strings.register.tos}
              <Text style={{ color: 'grey' }}> {strings.register.and}
                  <Text style={{ color: '#2196F3' }} onPress={() => Actions.pp()}> {strings.register.Privacy_policy}</Text>
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
