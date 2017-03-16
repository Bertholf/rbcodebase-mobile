import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './../../style/StyleGlobal';
import FacebookLogin from './../../services/FacebookLogin';
import strings from '../../localizations';

const facebookLogo = require('../../images/facebook-square.png');
const google2 = require('../../images/login/gplus.png');
const twitter = require('../../images/login/twitter.png');
const logo = require('./../../images/logo.png');
const mail = require('./../../images/ic_mail_outline_white_24dp_1x.png');

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image style={styles.logo} source={logo} />

            <View style={styles.otherlog}>
              <TouchableOpacity
                style={styles.buttonFacebook}
                activeOpacity={0.7}
                onPress={() => this.props.loginWithFacebook()}
              >
              <View style={{ flexDirection: 'row' }}>
                <Image source={facebookLogo} style={styles.facebookLogo} />
                <Text style={styles.textfb}>{strings.LoginScreen.facebook_sign_in}</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.otherlog}>
              <TouchableOpacity
                style={styles.buttonGoogle}
                activeOpacity={0.7} onPress={() => this.props.loginWithGoogle()}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Image source={google2} style={styles.logoGoogle} />
                  <Text style={styles.text}>{strings.LoginScreen.google_sign_in}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.otherlog}>
              <TouchableOpacity
                style={styles.buttonTwitter}
                activeOpacity={0.7}
                onPress={() => this.props.loginWithTwitter()}>
                <View
                  style={{ flexDirection: 'row' }}
                >
                  <Image source={twitter} style={styles.logoTwitter} />
                  <Text style={styles.texttw}>{strings.LoginScreen.twitter_sign_in}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
              <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginLeft: 5 }} />
              <Text style={{ paddingLeft: 3, paddingRight: 3, color: 'rgba(0,0,0,0.8)' }}>{strings.LoginScreen.or}</Text>
              <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginRight: 5 }} />
            </View>
            <View style={styles.otherlog}>
              <TouchableOpacity
                style={styles.buttonEmail}
                activeOpacity={0.7}
                onPress={() => Actions.loginscreenemail({ login: this.props.submitLogin })}
              >
                <View style={{ flexDirection: 'row'}}>
                  <Image style={styles.icon} source={mail} />
                  <Text style={styles.text}>{strings.LoginScreen.email_sign_in}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
              <TouchableOpacity onPress={() => Actions.register()}>
                <Text style={{ color: 'black', textAlign: 'center' }}>
                  {strings.LoginScreen.create_new_account}
                </Text>
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
