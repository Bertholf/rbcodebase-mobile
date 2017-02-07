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
} from 'react-native';
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
      name: '',
      email: '',
      username: '',
      password: '',
    };
    this.register = this.register.bind(this);
  }
  // dummy button action
  register() {
    registerService.register(this.state);
  }

  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: '#ffffff', paddingBottom: 16 }}
      >
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.separatorText}>Register with:</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                activeOpacity={0.7} onPress={() => FacebookLogin.getFacebookLogin()}
              >
                <Image source={facebook} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.register()} >
                <Image source={google} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.register()}>
                <Image source={twitter} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', top: 10, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
              <View style={{ borderWidth: 1, borderColor: 'silver', width: 140, height: 1, marginLeft: 5 }} />
              <Text style={{ width: 20, marginRight: 5, marginLeft: 5, top: -7, color: 'silver' }}> OR </Text>
              <View style={{ borderWidth: 1, borderColor: 'silver', width: 140, height: 1, marginRight: 5 }} />
            </View>
            <TextInput
              maxLength={32}
              placeholder={'Name'}
              style={styles.textInput}
              onChangeText={name => this.setState({ name })}
            />
            <TextInput
              keyboardType={'email-address'}
              placeholder={'Email'}
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              placeholder={'Username'}
              style={styles.textInput}
              onChangeText={username => this.setState({ username })}
            />
            <TextInput
              placeholder={'Password'}
              style={styles.textInput}
              secureTextEntry
              onChangeText={password => this.setState({ password })}
            />
            <View style={{ alignItems: 'flex-start', width: width * 0.87, height: 20 }} >
              <Text style={{ color: 'white' }}>Gender</Text>
            </View>
            <View style={styles.genderRow} >
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.btnGender, this.state.male && styles.active]}
                onPress={() => this.setState({ male: true, female: false })}
              >
                <Image source={imgmale} style={[styles.imgGender, { tintColor: '#1565c0' }]} />
                <Text style={{ color: '#1565c0' }}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.btnGender, this.state.female && styles.active2]}
                onPress={() => this.setState({ female: true, male: false })}
              >
                <Image source={imgfemale} style={[styles.imgGender, { tintColor: '#DF2668' }]} />
                <Text style={{ color: '#DF2668' }}>Female</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.7} style={styles.btnReg} onPress={() => this.register()}
          >
            <Text style={styles.textReg}>Register</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
