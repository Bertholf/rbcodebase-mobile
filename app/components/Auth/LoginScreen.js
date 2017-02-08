import React, { Component } from 'react';
import {
   ActivityIndicator,
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
   TouchableHighlight,
   Alert,
   ScrollView,
   Button,
 } from 'react-native';
import styles from './LoginStyles';

import { Actions } from 'react-native-router-flux';
import GoogleSignIn from './../../modules/google';
import FacebookLogin from './../../services/FacebookLogin';

const google = require('./../../images/login/google.png');
const facebook = require('./../../images/login/facebook.png');
const twitter = require('./../../images/login/twitter.png');
const logo = require('./../../images/logo.png');

// const LoginScreen = ({
//   username, password, submitLogin, register,
//   forgotPassword, updateUsername, updatePassword,
//   loginWithGoogle, loginWithFacebook }) =>
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validUsername: true,
      validPassword: true,
    };
    this.validate = this.validate.bind(this);
  }
  validate() {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passValidate = /^[a-zA-Z0-9]+$/;
    let message = '';
    if (!this.state.username.match(usernameRegex)) {
      this.setState({ validUsername: false });
      message = 'Please enter a valid username';
    } else if (!this.state.password.match(passValidate)) {
      this.setState({ validPassword: false });
      message = 'Please enter the correct password';
    } else {
      loginService(this.state.username, this.state.password);
    }
    if (message !== '') {
      Alert.alert(message.toString());
    }
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#ddd' }}>
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
              <TouchableHighlight style={styles.twitter} onPress={() => this.props.loginWithFacebook()} underlayColor={'#99d9f4'}>
                <Image source={twitter} style={styles.twitter} />
              </TouchableHighlight>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
              <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginLeft: 5 }} />
              <Text style={{ width: 20, color: 'rgba(0,0,0,0.8)' }}> Or </Text>
              <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginRight: 5 }} />
            </View>
            <TextInput style={{ height: 40 }} onChangeText={username => this.setState({ username })} placeholder={"Username"} required={true} />
            <TextInput
              secureTextEntry style={{ height: 40 }}
              onChangeText={password => this.setState({ password })}
              placeholder="Password"
            />
            <TouchableHighlight style={styles.button} onPress={() => this.validate()} underlayColor={'#99d9f4'}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
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
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

// LoginScreen.propTypes = {
//   // submitLogin: React.PropTypes.func.isRequired,
//   // forgotPassword: React.PropTypes.func.isRequired,
//   // loginWithGoogle: React.PropTypes.func.isRequired,
//   // register: React.PropTypes.func.isRequired,
//   // loginWithFacebook: React.PropTypes.func.isRequired,
//   // loginWithTwitter: React.PropTypes.func.isRequired,
//   // updatePassword: React.PropTypes.func.isRequired,
//   // updateUsername: React.PropTypes.func.isRequired,
// };
//
// module.exports = LoginScreen;
