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
import styles from './LoginStyleEmail';
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
      username: '',
      password: '',
      validUsername: true,
      validPassword: true,
      isFail: false,
      // loading: false,
    };
    this.validate = this.validate.bind(this);
  }
  validate() {
    if (this.state.username === '') {
      this.setState({ validUsername: false, loading: false });
    }
    if (this.state.password === '') {
      this.setState({ validPassword: false, loading: false });
    }
    this.setState({ loading: true }, () => {
      if (this.state.username !== '' && this.state.password !== '') {
        this.props.login(this.state.username, this.state.password, () => {
          this.setState({ loading: false });
        }, () => {
          this.setState({ loading: false, isFail: true });
        });
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentLoginEmail}>
          <TextInput
            underlineColorAndroid={'rgba(0,0,0,0)'}
            style={styles.textInput}
            onChangeText={username =>
              this.setState({ username, validUsername: true, isFail: false })}
            placeholderTextColor={'#2196f3'}
            placeholder={'Username'}
            required
          />
          {this.state.validUsername ? <Text /> : (
            <Text style={styles.wrong}>PLease input valid username</Text>
          )}
          <TextInput
            secureTextEntry
            underlineColorAndroid={'rgba(0,0,0,0)'}
            style={styles.textInput}
            onChangeText={password =>
              this.setState({ password, validPassword: true, isFail: false })
            }
            placeholderTextColor={'#2196f3'}
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
              activeOpacity={1}
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
