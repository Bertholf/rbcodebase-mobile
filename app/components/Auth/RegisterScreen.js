import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  AsyncStorage,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './../../style/StyleGlobal';
import facebookRegister from '../../services/FacebookRegister';
import google from '../../modules/google';
import twitterModule from '../../modules/twitter';
import strings from './../../localizations/';
import auth from '../../services/auth';

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

  // Register with Google
  registerWithGoogle() {
    google.signIn()
     .then((res) => {
       console.log('RESPONSE GOOGLE', res);
       auth.checkgoogle('google', res.user.email)
       .then((resp) => {
         console.log('GOOGLE AFTER OAUTH', resp);
         if (resp.data === null) {
           if (res.user.displayName === undefined) {
             Actions.registrationform({
               firstName: res.user.name.split(' ')[0],
               lastName: res.user.name.split(' ')[1],
               email: res.user.email,
               provider: 'google',
               oauthProviderId: res.user.email,
             });
           } else {
             Actions.registrationform({
               firstName: res.user.displayName.split(' ')[0],
               lastName: res.user.displayName.split(' ')[1],
               email: res.user.email,
               provider: 'google',
               oauthProviderId: res.user.email,
             });
           }
         } else {
           this.registered(resp.data.access_token, 'google');
         }
       });
     })
      .catch(err => console.log('error google done login', err));
  }
  // Register with twitter
  registerWithTwitter() {
    twitterModule.signIn()
    .then((res) => {
      const twitterResponse = res;
      if (twitterResponse.secret === undefined) {
        Actions.loaderview();
        auth.checktwitter(res.token, 'twitter', res.tokenSecret, res.userId)
      .then((resL) => {
        if (resL.data.registered === false) {
          Actions.registrationform({
            firstName: resL.data.name.split(' ')[0],
            lastName: resL.data.name.split(' ')[1],
            username: resL.data.nickname,
            email: resL.data.email,
            provider: 'twitter',
            secret: twitterResponse.tokenSecret,
            accessToken: twitterResponse.token,
            oauthProviderId: twitterResponse.userId,
          });
        } else {
          this.registered(resL.data.access_token, 'twitter');
        }
      }).catch(err => console.log(err));
      } else {
        Actions.loaderview();
        auth.checktwitter(res.token, 'twitter', res.secret, res.userId)
        .then((resL) => {
          if (resL.data.registered === false) {
            Actions.registrationform({
              firstName: resL.data.name.split(' ')[0],
              lastName: resL.data.name.split(' ')[1],
              username: resL.data.nickname,
              email: resL.data.email,
              provider: 'twitter',
              secret: twitterResponse.secret,
              accessToken: twitterResponse.token,
              oauthProviderId: twitterResponse.userId,
            });
          } else {
            this.registered(resL.data.access_token, 'twitter');
          }
        }).catch(err => console.log(err));
      }
    })
    .catch(err => console.log('ERROR TWITTER', err));
  }

  registered(token, provider) {
    AsyncStorage.setItem('provider', provider);
    AsyncStorage.setItem('accessToken', token)
    .then(() => {
      Actions.loaderview({ message: 'You are already registered', onPress: () => Actions.actionswiper({ type: 'reset' }) });
      setTimeout(() => Actions.actionswiper({ type: 'reset' }), 1000);
    }).catch(err => err);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.separatorText}>{strings.register.Register_with}</Text>
            <View style={styles.otherlog}>
              <TouchableOpacity
                style={styles.buttonFacebook}
                activeOpacity={0.7}
                onPress={() => facebookRegister(token => this.registered(token, 'facebook'))}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Image source={facebookLogo} style={styles.facebookLogo} />
                  <Text style={styles.text}>{strings.register.Register_facebook}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.otherlog}>
              <TouchableOpacity
                style={styles.buttonGoogle}
                activeOpacity={0.7}
                onPress={() => this.registerWithGoogle()}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Image source={google2} style={styles.logoGoogle} />
                  <Text style={styles.text}>{strings.register.Register_google}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.otherlog}>
              <TouchableOpacity
                style={styles.buttonTwitter}
                activeOpacity={0.7}
                onPress={() => this.registerWithTwitter()}
              >
                <View style={{ flexDirection: 'row' }}>
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
                onPress={Actions.registrationform}
              >
                <View
                  style={{ flexDirection: 'row' }}
                >
                  <Image style={styles.icon} source={mail} />
                  <Text style={styles.text}>{strings.register.Register_email}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ paddingTop: 8, paddingBottom: 10 }}>
              <TouchableOpacity onPress={Actions.login}>
                <Text style={{ fontSize: 14, color: 'black' }}>{strings.register.Sign_in}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ textAlign: 'center' }}>{strings.LoginScreen.agreement}</Text>
                <Text style={{ color: '#2196F3' }} onPress={() => Actions.tos()}> {strings.LoginScreen.tos}
                  <Text style={{ color: 'grey' }}> {strings.LoginScreen.and}
                    <Text style={{ color: '#2196F3' }} onPress={() => Actions.pp()}> {strings.LoginScreen.privacy_policy}</Text>
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
