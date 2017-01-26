import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TextInput, Linking, Alert, TouchableOpacity } from 'react-native';

const google = require('./../../images/google.png');
const facebook = require('./../../images/facebook.png');
const twitter = require('./../../images/twitter.png');
const logo = require('./../../images/logo.png');

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '',
      password: '',
    };
  }
  render() {
    const changeMe = () => { Alert.alert('Tombol Button di Tekan!')}
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
          <Image source={logo} style={styles.logo} />
        </View>
        <TextInput
          style={{height: 40}} onChangeText={(username) => this.setState({username})}
          placeholder="Username"
          />
        <TextInput
            secureTextEntry={true} style={{height: 40}} onChangeText={(password) => this.setState({password})}
            placeholder="Password"
            />
        <TouchableHighlight style={styles.button} onPress={changeMe} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <View>
          <Text style={{textAlign: 'center', color: '#555'}}>Or Login with</Text>
        </View>
        <View style={styles.otherlog}>
          <TouchableOpacity onPress={changeMe} underlayColor='#99d9f4'>
            <Image style={styles.facebook} source={facebook} />
          </TouchableOpacity>
          <TouchableHighlight style={styles.google} onPress={changeMe} underlayColor='#99d9f4'>
            <Image style={styles.google} source={google} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.twitter} onPress={changeMe} underlayColor='#99d9f4'>
            <Image style={styles.twitter} source={twitter} />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
              <Text style={{color : '#555', margin : 10, textAlign :'right' }}>
                Register
              </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
              <Text style={{color : '#555', margin : 10, textAlign :'right' }}>
                Forgot Password?
              </Text>
          </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    flex: 1,
    backgroundColor: '#dddddd',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#1565C0',
    borderColor: '#1976D2',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  facebook: {
    height: 36,
    width: 36,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  twitter: {
    height: 36,
    width: 36,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  google: {
    height: 36,
    width: 36,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  otherlog: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
});

const LoginScreen = ({ submitLogin, register, forgotPassword, updateUsername, updatePassword, loginWithGoogle, loginWithFacebook }) => {
  return (
    <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={logo} style={styles.logo} />
        </View>
        <TextInput style={{height: 40}} onChangeText={(username) => updateUsername(username)} placeholder={"Username"} />
      <TextInput
        secureTextEntry={true}
        style={{height: 40}} onChangeText={(password) => updatePassword (password)} placeholder="Password"
      />
      <TouchableHighlight style={styles.button} onPress={() => submitLogin()} underlayColor={'#99d9f4'}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableHighlight>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => register()}>
          <Text style={{ color : 'blue', margin : 10, textAlign :'right' }}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => forgotPassword()}>
          <Text style={{ color: 'blue', margin : 10, textAlign :'right' }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableHighlight style={styles.google} onPress={() => loginWithGoogle()} underlayColor={'#99d9f4'}>
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.facebook} onPress={() => loginWithFacebook()} underlayColor={'#99d9f4'}>
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </TouchableHighlight>
    </View>
  );
};
LoginScreen.propTypes = {
  submitLogin: React.PropTypes.func.isRequired,
  forgotPassword: React.PropTypes.func.isRequired,
  loginWithGoogle: React.PropTypes.func.isRequired,
  register: React.PropTypes.func.isRequired,
  loginWithFacebook: React.PropTypes.func.isRequired,
  updatePassword: React.PropTypes.func.isRequired,
  updateUsername: React.PropTypes.func.isRequired,
};
