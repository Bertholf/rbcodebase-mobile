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

export default class LoginScreenEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validEmail: true,
      validPassword: true,
      isFail: false,
      loading: false,
    };
    this.validate = this.validate.bind(this);
  }
  validate() {
    this.setState({ loading: true }, () => {
      if (this.state.email === '') {
        this.setState({ validEmail: false, loading: false });
      }
      if (this.state.password === '') {
        this.setState({ validPassword: false, loading: false });
      }
      if (this.state.email !== '' && this.state.password !== '') {
        this.props.submitLogin(this.state.email, this.state.password);
      }
    });
    this.setState({ loading: false });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentLoginEmail}>
          <TextInput
            style={{ height: 40 }}
            onChangeText={email =>
              this.setState({ email, validEmail: true, isFail: false })}
            placeholder={'Email'}
            required
          />
          {this.state.validEmail ? <Text /> : (
            <Text style={styles.wrong}>PLease input valid email</Text>
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
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
            >
              <ActivityIndicator size={'large'} />
            </TouchableOpacity>
          )}
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Actions.forgotPassword()}>
              <Text style={{ color: '#2196F3', margin: 10, textAlign: 'right' }}>
                  Forgot your Password?
                </Text>
            </TouchableOpacity>
          </View>
          {!this.state.isFail ? <Text /> : (
            <View style={styles.errBox}>
              <Text style={{ color: '#fff' }} >Email or Password not match</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}
