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
// import GoogleSignIn from './../../services/signingoogle';

const facebookLogo = require('../../images/facebook-square.png');
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
    this.setState({ loading: false });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
            <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginLeft: 5 }} />
            <Text style={{ width: 20, color: 'rgba(0,0,0,0.8)' }}> Or </Text>
            <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 145, height: 1, marginRight: 5 }} />
          </View>
          { this.props.message !== '' &&
          <View style={styles.errBox}>
            <Text style={{ color: '#fff', fontWeight: 'bold'}}>
              {this.props.message}
            </Text>
          </View> }


          <TouchableOpacity
            onPress={() => this.props.loginWithFacebook()}
            style={styles.facebookBtn}
          >
            <View style={{ flexDirection: 'row', paddingLeft: 5 }}>
              <View style={styles.facebookLogo}>
                <Image
                  style={styles.facebookLogo}
                  source={facebookLogo}
                />
              </View>
              <View style={{ justifyContent: 'space-around', marginLeft: 30 }} >
                <Text style={styles.facebookText}>Sign in with facebook</Text>
              </View>
            </View>
          </TouchableOpacity>

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

          <View style={{ padding:50 }}>
            <TouchableOpacity onPress={() => Actions.register()}>
              <Text style={{ color: 'black', textAlign: 'center' }}>
                  Create Account
              </Text>
            </TouchableOpacity>

          </View>
          <View style={{ textAlign:'center'}}>
          <Text style={{ color: 'grey', textAlign: 'center' }}>
              By signing up, you agree to RBC
          </Text>
          </View>
          <View style={{alignItems:'center'}}>
          <View style={{height: 40}}>
            <Text style={{ color: '#2196F3' , text:'underlineColorAndroid'}} onPress={() => Actions.tos()}> Terms of Service
            <Text style={{ color: 'grey' }}> and
                <Text style={{ color: '#2196F3' }} onPress={() => Actions.pp()}> Privacy Policy</Text>
            </Text>
            </Text>
          </View>
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
