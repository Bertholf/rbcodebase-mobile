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
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
// import {GoogleSigninButton} from 'react-native-google-signin';
// import GoogleSignIn from './../../services/signingoogle';
import FacebookLogin from './../../services/FacebookLogin';
import registerService from '../../services/AuthRegister';

const { width } = Dimensions.get('window');
const logo = require('./../../images/logo.png');
const google = require('./../../images/login/google.png');
const facebook = require('./../../images/login/facebook.png');
const twitter = require('./../../images/login/twitter.png');
const imgmale = require('./../../images/male.png');
const imgfemale = require('./../../images/female.png');

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

  validate() {
    this.setState({ loading: true });
    if (this.state.male) {
      this.setState({ gender: 'male' });
    } else {
      this.setState({ gender: 'female' });
    }
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9_]+?\.[a-zA-Z]{2,3}$/;
    const nameRegex = /^[a-zA-Z ]+$/;
    if (!this.state.firstName.match(nameRegex)) {
      this.setState({ validFName: false, loading: false });
    }
    if (!this.state.lastName.match(nameRegex)) {
      this.setState({ validLName: false, loading: false });
    }
    if (!emailRegex.test(this.state.email)) {
      this.setState({ validEmail: false, loading: false });
    }
    if (!this.state.username.match(usernameRegex)) {
      this.setState({ validUsername: false, loading: false });
    }
    if (this.state.password === '') {
      this.setState({ validPass: false, loading: false });
    }
    this.setState({}, () => {
      if ((this.state.validEmail && this.state.validUsername) &&
      (this.state.validFName && this.state.validLName)) {
        registerService.register(this.state, () => {
          const Message = registerService.errorMsg();
          if (Message !== undefined) {
            this.setState({ errMsg: Message, loading: false });
          }
        });
      }
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.separatorText}>Register with:</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                activeOpacity={0.7} onPress={() => FacebookLogin.getFacebookLogin()}
              >
                <View>
                  <Image source={facebook} style={styles.icon} />
                  <Text>Register With Facebook</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.register()} >
                <Image source={google} style={styles.icon} />
                <Text>Register With Google</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.register()}>
                <Image source={twitter} style={styles.icon} />
                <Text>Register With Twitter</Text>
              </TouchableOpacity>
              <View style={{ alignItems: 'center', top: 10, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                <View style={{ borderWidth: 1, borderColor: 'silver', width: 140, height: 1, marginLeft: 5 }} />
                <Text style={{ width: 20, marginRight: 5, marginLeft: 5, top: -7, color: 'silver' }}> OR </Text>
                <View style={{ borderWidth: 1, borderColor: 'silver', width: 140, height: 1, marginRight: 5 }} />
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.register()}>
                <Image source={twitter} style={styles.icon} />
                <Text>Register With Email</Text>
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    );
  }
}
