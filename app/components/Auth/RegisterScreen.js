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
      name: '',
      email: '',
      username: '',
      password: '',
      gender: 'male',
      validName: true,
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
    if (!this.state.name.match(nameRegex)) {
      this.setState({ validName: false, loading: false });
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
      (this.state.validName)) {
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
                <Image source={facebook} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.register()} >
                <Image source={google} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.register()}>
                <Image source={twitter} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: 'center', top: 10, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ borderWidth: 1, borderColor: 'silver', width: 140, height: 1, marginLeft: 5 }} />
            <Text style={{ width: 20, marginRight: 5, marginLeft: 5, top: -7, color: 'silver' }}> OR </Text>
            <View style={{ borderWidth: 1, borderColor: 'silver', width: 140, height: 1, marginRight: 5 }} />
          </View>
          {this.state.errMsg === '' ? <Text /> : (
            <View style={styles.errBox}>
              <Text style={{ color: '#fff' }}>{this.state.errMsg}</Text>
            </View>
          )}
          <TextInput
            multiline={false}
            maxLength={32}
            placeholder={'Name'}
            style={styles.textInput}
            onChangeText={name => this.setState({ name, validName: true, errMsg: '' })}
          />
          {this.state.validName ? (<Text />)
            : (<Text style={styles.wrong}>Name cannot contain numbers and simbols</Text>)
          }
          <TextInput
            multiline={false}
            keyboardType={'email-address'}
            placeholder={'Email'}
            style={styles.textInput}
            onChangeText={email => this.setState({ email, validEmail: true, errMsg: '' })}
          />
          {this.state.validEmail ? (<Text />)
            : (<Text style={styles.wrong}>Please input valid email</Text>)
          }
          <TextInput
            multiline={false}
            placeholder={'Username'}
            maxLength={32}
            style={styles.textInput}
            onChangeText={username => this.setState({ username, validUsername: true, errMsg: '' })}
          />
          {this.state.validUsername ? (<Text />)
            : (<Text style={styles.wrong}>Username just contain letter and number</Text>)
          }
          <TextInput
            multiline={false}
            placeholder={'Password'}
            maxLength={32}
            style={styles.textInput}
            secureTextEntry
            onChangeText={password => this.setState({ password, validPass: true })}
          />
          {this.state.validPass ? (<Text />)
            : (<Text style={styles.wrong}>Password cannot be blank</Text>)
          }
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
          <View style={{height: 40}}>
            <Text>By clicking Register, I agree with
              <Text style={{ color: '#2196F3' }} onPress={() => Actions.tos()}> Terms of Service</Text>
            </Text>
          </View>
          {this.state.loading ? (
            <View style={styles.btnReg}>
              <ActivityIndicator size={'large'}/>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7} style={styles.btnReg}
              onPress={() => this.validate()}
            >
              <Text style={styles.textReg}>Register</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    );
  }
}
