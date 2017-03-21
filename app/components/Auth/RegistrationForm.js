import React, { Component } from 'react';
import {
     View,
     Text,
     Dimensions,
     TouchableOpacity,
     Image,
     TextInput,
     ScrollView,
     StyleSheet,
     ActivityIndicator,
     AsyncStorage,
     ListView,
} from 'react-native';
import { Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Toast, { DURATION } from 'react-native-easy-toast';
import strings from './../../localizations/';
import submitRegister from '../../services/AuthRegistration';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import auth from '../../services/auth';
import style from './../../style/StyleGlobal';
const imgmale = require('./../../images/male.png');
const imgfemale = require('./../../images/female.png');
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flex: 3,
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 10,
    paddingLeft: 14,
    paddingRight: 14,
  },
  textinputStyle: {
    fontSize: 16,
    color: 'black',
    width: 0.75 * width,
    height: 40,
  },
  textinputWrapperStyle: {
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    flexDirection: 'column',
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 6,
    marginTop: 6,
  },
  btnReg: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50,
    marginBottom: 40,
    marginRight: 16,
    marginLeft: 16,
  },
  textReg: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  line: {
    borderBottomWidth: 0.8,
    borderColor: 'black',
    marginTop: 20,
    marginBottom: 20,
  },
  fail: {
    color: '#ff0000',
    alignSelf: 'flex-start',
  },
  acceptImg: {
    height: 20,
    width: 20,
    marginTop: 10,
    marginLeft: -40,
  },
  policyStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btnGender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 2,
    height: 65,
    width: (width * 0.85) / 2,
    borderWidth: 1,
    borderColor: 'silver',
    paddingTop: 5,
  },
  active: {
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  active2: {
    borderWidth: 2,
    borderColor: '#f2003d',
  },
  errBox: {
    margin: 10,
    borderRadius: 6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,0,0,0.7)',
    width: 0.75 * width,
    height: 60,
    padding: 10,
  },
  genderStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 6,
    marginTop: 6,
    height: 40,
  },
});

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      availableUser: false,
      app: 'RBCodeBase',
      firstname: this.props.firstName || '',
      lastname: this.props.lastName || '',
      email: this.props.email || '',
      gender: 'male',
      username: this.props.username || '',
      secret: this.props.secret || '',
      provider: this.props.provider || '',
      accessToken: this.props.accessToken || '',
      oauthProviderId: this.props.oauthProviderId || '',
      password: '',
      confirmPassword: '',
      valid: false,
      submitting: false,
      failregister: false,
      failMsg: '',
      loading: true,
      position: 'bottom',
      customField: ds.cloneWithRows([{ name: 'one' }, { name: 'two' }]),
    };
  }

  onClick(text, position, duration, withStyle) {
    this.setState({
      position,
    });
    if (withStyle) {
      this.refs.toastWithStyle.show(text, duration);
    } else {
      this.refs.toast.show(text, duration);
    }
  }

  onSubmit() {
    const { firstname, lastname, username, gender, email, password, confirmPassword } = this.state;
    const { provider, accessToken, secret, oauthProviderId } = this.state;
    if (provider && accessToken) {
      this.setState({ submitting: true });
      auth.registerSSO(firstname, lastname, username, gender, email, password, confirmPassword, provider, secret, accessToken, oauthProviderId)
      .then(res => this.setState({ submitting: false }, () =>
      this.loginAfterRegister(username, password),
    ))
    .catch((err) => {
      this.setState({ failregister: true, failMsg: err.response.data.message, submitting: false });
      console.log('error register', err);
    });
    } else {
      submitRegister(firstname, lastname, username, gender, email, password, confirmPassword, (msg) => {
        this.setState({ failregister: true, failMsg: msg, submitting: false });
        this.onClick();
      });
    }
  }

  getButton(text, position, duration, withStyle) {
    return (
      <Text
        onPress={() => this.onClick(text, position, duration, withStyle)}
      >
        <Text>{text}</Text>
      </Text>
    );
  }
  rerender() {
    this.setState({ loading: true }, () => {
      this.componentDidMount();
    });
  }

  loginAfterRegister(username, password) {
    auth.login(username, password)
    .then((loginRes) => {
      AsyncStorage.setItem('accessToken', loginRes.access_token)
      .then(() => Actions.actionswiper())
      .catch((err) => {
        console.log('FAIL LOGIN AFTER REGISTER');
        this.setState({ failregister: true, failMsg: err.response.data.message, submitting: false });
      });
    })
    .catch(err => this.setState({ failregister: true, failMsg: err.response.data.message, submitting: false }));
  }
  render() {
    const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9_]+?\.[a-zA-Z]{2,3}$/;
    const usernameRegex = /^[a-zA-Z0-9_-]/;
    const nameRegex = /^[a-zA-Z]+$/;
    const validFName = nameRegex.test(this.state.firstname);
    const validLName = nameRegex.test(this.state.lastname);
    const validUsername = usernameRegex.test(this.state.username);
    const validGender = this.state.gender !== null;
    const usernameLength = this.state.username.length >= 5;
    const emptyFName = this.state.firstname === '';
    const emptyLName = this.state.lastname === '';
    const emptyUName = this.state.username === '';
    const emptyEmail = this.state.email === '' || !this.state.email;
    const validEmail = emailRegex.test(this.state.email);
    const validPass = (this.state.password === this.state.confirmPassword);
    const validLPass = this.state.password.length >= 6;
    const emptyPass = this.state.password === '';
    const available = validFName && validLName && validUsername && validEmail && validPass && validLPass && validGender;
    const notEmpty = !emptyFName && !emptyLName && !emptyUName && !emptyEmail && !emptyPass;
    const validate = () => {
      if (available && notEmpty) {
        this.onSubmit();
      } else if (!validFName || !validLName || emptyFName || emptyLName) {
        this.onClick(strings.register.error_name, 'bottom', DURATION.LENGTH_LONG);
      } else if (!validUsername || emptyUName) {
        this.onClick(strings.register.error_username, 'bottom', DURATION.LENGTH_LONG);
      } else if (!validEmail || emptyEmail) {
        this.onClick(strings.register.error_email, 'bottom', DURATION.LENGTH_LONG);
      } else if (!validPass || !validLPass || emptyPass) {
        this.onClick(strings.register.error_password, 'bottom', DURATION.LENGTH_LONG);
      } else if (!validGender) {
        this.onClick(strings.register.error_gender, 'bottom', DURATION.LENGTH_LONG);
      } else {
        this.onClick(strings.register.error_connection, 'bottom', DURATION.LENGTH_LONG);
      }
    };
    // strings.setLanguage('en');
    if (this.state.submitting === false) {
      console.log('false');
      return (
        <View style={{ flex: 1 }}>
          <KeyboardAwareView animated>
            <View style={styles.container} >
              <ScrollView
                ref={(view) => { this.scrollView = view; }}
                style={[{ flex: 1, alignSelf: 'stretch' }]}
                keyboardShouldPersistTaps="always"
                automaticallyAdjustContentInsets={false}
                onScroll={this.onScroll}
                scrollEventThrottle={200}
                onLayout={(e) => { const { x, y, width, height } = e.nativeEvent.layout; console.log(height); }}
              >
                <View style={styles.scrollContent} >
                  {this.state.failregister ? (
                    <View style={styles.errBox}>
                      <Text style={{ color: '#fff' }}>{this.state.failMsg}</Text>
                    </View>
                  ) : (
                    <Text />
                  )}
                  <View style={styles.textinputWrapperStyle}>
                    <TextInput
                      placeholder={strings.register.first_name}
                      placeholderTextColor="black"
                      selectionColor="black"
                      underlineColorAndroid="rgba(0,0,0,0)"
                      style={styles.textinputStyle}
                      onChangeText={firstname => this.setState({ firstname, failregister: false })}
                      value={this.state.firstname}
                    />
                  </View>
                  {validFName || emptyFName ? <View /> : <Text style={styles.fail}>{strings.register.alert_first_name}</Text>}
                  <View style={styles.textinputWrapperStyle}>
                    <TextInput
                      placeholder={strings.register.last_name}
                      placeholderTextColor="black"
                      selectionColor="black"
                      underlineColorAndroid="rgba(0,0,0,0)"
                      style={styles.textinputStyle}
                      editable
                      onChangeText={lastname => this.setState({ lastname, failregister: false })}
                      value={this.state.lastname}
                    />
                  </View>
                  {validLName || emptyLName ? <View /> :
                  <Text style={styles.fail}>{strings.register.alert_last_name}</Text>}

                  <View style={styles.line} />
                  <View style={[styles.textinputWrapperStyle, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <TextInput
                      placeholder={strings.register.user_name}
                      placeholderTextColor="black"
                      selectionColor="black"
                      underlineColorAndroid="rgba(0,0,0,0)"
                      style={styles.textinputStyle}
                      onChangeText={username => this.setState({ username, failregister: false })}
                      value={this.state.username}
                      editable
                    />
                    {usernameLength && validUsername ? (<Image source={require('../../images/accept.png')} style={styles.acceptImg} />)
                    : (<Image source={require('../../images/wrong.png')} style={styles.acceptImg} />)
                  }

                  </View>
                  {usernameLength || emptyUName ? (<View />) : (<Text style={styles.fail}>
                    { strings.register.alert_username_length}</Text>)
                  }
                  <View style={styles.textinputWrapperStyle}>
                    <TextInput
                      placeholder={strings.register.email}
                      placeholderTextColor="black"
                      selectionColor="black"
                      underlineColorAndroid="rgba(0,0,0,0)"
                      style={styles.textinputStyle}
                      editable
                      onChangeText={email => this.setState({ email, failregister: false })}
                      value={this.state.email}
                    />
                  </View>
                  {validEmail || emptyEmail ? (<View />)
                    : (<Text style={styles.fail}>{strings.register.alert_invalid_email}</Text>)
                  }

                  {/*
                      Show picker gender
                  */}
                  <View style={styles.genderStyle}>
                    <View>
                      <Text style={{ color: '#000', fontSize: 16 }}>{strings.register.gender}</Text>
                    </View>
                    <View>
                      <Picker
                        style={{ width: 120, height: 30 }}
                        iosHeader="Pick Your Gender"
                        mode="dropdown"
                        selectedValue={this.state.gender}
                        onValueChange={value => this.setState({ gender: value })}
                      >
                        <Picker.Item label={strings.register.male} value="male" />
                        <Picker.Item label={strings.register.female} value="female" />
                      </Picker>
                    </View>
                  </View>

                  <View style={styles.textinputWrapperStyle}>
                    <TextInput
                      placeholder={strings.register.password}
                      placeholderTextColor="black"
                      selectionColor="black"
                      underlineColorAndroid="rgba(0,0,0,0)"
                      style={styles.textinputStyle}
                      onChangeText={password => this.setState({ password, failregister: false })}
                      secureTextEntry
                    />
                  </View>
                  { validLPass || emptyPass ? <View /> : <Text style={styles.fail}>{strings.register.alert_min_password}</Text>}
                  <View style={styles.textinputWrapperStyle}>
                    <TextInput
                      placeholder={strings.register.confirm_password}
                      placeholderTextColor="black"
                      selectionColor="black"
                      underlineColorAndroid="rgba(0,0,0,0)"
                      style={styles.textinputStyle}
                      onChangeText={confirmPassword => this.setState({ confirmPassword, failregister: false })}
                      secureTextEntry
                    />
                  </View>
                  { validPass || emptyPass ? <View /> : <Text style={styles.fail}>{strings.register.alert_password}</Text>}
                  <View style={styles.line} />
                  <View style={styles.textinputWrapperStyle}>
                    <TextInput
                      placeholder={strings.register.custom_field}
                      placeholderTextColor="black"
                      selectionColor="black"
                      underlineColorAndroid="rgba(0,0,0,0)"
                      style={styles.textinputStyle}
                    />
                  </View>

                  <ListView
                    dataSource={this.state.dataSource}
                    renderRow={rowData =>
                      <View style={styles.textinputWrapperStyle}>
                        <Text>{rowData.name}</Text>
                        <TextInput
                          placeholder={strings.register.custom_field}
                          placeholderTextColor="black"
                          selectionColor="black"
                          underlineColorAndroid="rgba(0,0,0,0)"
                          style={styles.textinputStyle}
                        />
                      </View>}
                  />

                </View>
                <View style={styles.line} />
                <TouchableOpacity
                  onPress={validate}
                >
                  <View style={styles.btnReg} >
                    {this.state.submitting ? <ActivityIndicator size={'large'} color={'#fff'} /> : <Text style={styles.textReg} >
                      {strings.register.Register}
                    </Text>}
                  </View>
                </TouchableOpacity>
                {/*
                    LICENSE AND POLICY PRIVACY TEXT VIEW
                */}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <View style={styles.policyStyle} >
                    <Text>
                      {strings.register.register_agreement}
                    </Text>
                  </View>
                  <View style={[styles.policyStyle, { justifyContent: 'space-between', flex: 1, marginBottom: 10 }]}>
                    <TouchableOpacity onPress={Actions.tos}>
                      <Text style={{ color: '#01579B', borderBottomWidth: 0.5, borderColor: '#01579B' }}>
                        {strings.register.tou}
                      </Text>
                    </TouchableOpacity>
                    <Text />
                    <Text> {strings.register.and} </Text>
                    <TouchableOpacity onPress={Actions.pp}>
                      <Text style={{ color: '#01579B', borderBottomWidth: 0.5, borderColor: '#01579B' }}>
                        {strings.register.Privacy_policy}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
              <Toast
                ref="toast"
                style={{ backgroundColor: 'grey' }}
                position={'center'}
                fadeInDuration={300}
                fadeOutDuration={1000}
                textStyle={{ fontSize: 15, color: 'white' }}
              />
            </View>
          </KeyboardAwareView>
        </View>
      );
    }
    console.log('true');
    return (<ActivityIndicator />);
  }
}
