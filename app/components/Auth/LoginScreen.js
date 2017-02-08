import React, { Component } from 'react';
import {
   ActivityIndicator,
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
   TouchableHighlight,
   ScrollView,
 } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './LoginStyles';
import loginService from '../../services/AuthLogin';
import FacebookLogin from './../../services/FacebookLogin';
// import GoogleSignIn from './../../services/signingoogle';

const google = require('./../../images/login/google.png');
const facebook = require('./../../images/login/facebook.png');
const twitter = require('./../../images/login/twitter.png');
const logo = require('./../../images/logo.png');

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validUsername: true,
      validPassword: true,
      isFail: false,
      loading: false,
    };
    this.validate = this.validate.bind(this);
  }
  validate() {
    this.setState({ loading: true }, () => {
      if (this.state.username === '') {
        this.setState({ validUsername: false, loading: false });
      }
      if (this.state.password === '') {
        this.setState({ validPassword: false, loading: false });
      }
      if (this.state.username !== '' && this.state.password !== '') {
        this.props.submitLogin(this.state.username, this.state.password);
      }
    });
  }
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
            <Text style={{ width: 20, color: 'rgba(0,0,0,0.8)' }}> Or </Text>
            <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginRight: 5 }} />
          </View>
          <TextInput
            style={{ height: 40 }}
            onChangeText={username =>
              this.setState({ username, validUsername: true, isFail: false })}
            placeholder={'Username'}
            required
          />
          {this.state.validUsername ? <Text /> : (
            <Text style={styles.wrong}>Usename cannot blank</Text>
          )}
          <TextInput
            secureTextEntry style={{ height: 40 }}
            onChangeText={password =>
              this.setState({ password, validPassword: true, isFail: false })
            }
            placeholder="Password"
          />
          {this.state.validPassword ? <Text /> : (
            <Text style={styles.wrong}>Password cannot blank</Text>
          )}
          {!this.state.loading ? (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={() => this.validate()}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
            >
              <ActivityIndicator size={'large'} />
            </TouchableOpacity>
          )}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => Actions.register()}>
              <Text style={{ color: '#2196F3', margin: 10, textAlign: 'right' }}>
                  Register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.forgotPassword()}>
              <Text style={{ color: '#2196F3', margin: 10, textAlign: 'right' }}>
                  Forgot Password
                </Text>
            </TouchableOpacity>
          </View>
          {!this.state.isFail ? <Text /> : (
            <View style={styles.errBox}>
              <Text style={{ color: '#fff' }} >Username or Password not match</Text>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
