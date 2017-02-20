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
import strings from '../../localizations';
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
          {!this.state.isFail ? <Text /> : (
            <View style={styles.errBox}>
              <Text style={{ color: '#fff' }} >{strings.LoginbyEmail.validate}</Text>
            </View>
          )}
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
            <Text style={styles.wrong}>{strings.LoginbyEmail.validEUser}</Text>
          )}
          <TextInput
            secureTextEntry
            underlineColorAndroid={'rgba(0,0,0,0)'}
            style={styles.textInput}
            onChangeText={password =>
              this.setState({ password, validPassword: true, isFail: false })
            }
            placeholderTextColor={'#2196f3'}
            placeholder={strings.LoginbyEmail.pass}
          />
          {this.state.validPassword ? <Text /> : (
            <Text style={styles.wrong}>{strings.LoginbyEmail.validEPass}</Text>
          )}
          {!this.state.loading ? (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={() => this.validate()}
            >
              <Text style={styles.buttonText}>{strings.LoginbyEmail.signIn}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.button}
            >
              <ActivityIndicator size={'large'} color={'#fff'}/>
            </TouchableOpacity>
          )}
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Actions.forgotPassword()}>
              <Text style={{ color: '#2196F3', margin: 10, textAlign: 'right' }}>
                  {strings.LoginbyEmail.forgot}
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
