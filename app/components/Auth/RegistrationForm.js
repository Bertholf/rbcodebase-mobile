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
     Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  textinputStyle: {
    fontSize: 16,
    color: '#2196f3',
    width: 0.75 * width,
    height: 60,
  },
  textinputWrapperStyle: {
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 6,
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
    borderColor: 'silver',
    marginTop: 20,
    marginBottom: 20,
  },
  fail: {
    color: '#ff0000',
    alignSelf: 'flex-start',
  },
  acceptImg: {
    height: 30,
    width: 30,
    marginTop: 15,
    marginRight: 20,
  },
  policyStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableUser: false,
      app: 'RBCodeBase',
      firstname: this.props.firstName,
      lastname: this.props.lastName,
      email: this.props.email,
      username: '',
      password: '',
      confirmPassword: '',
      valid: false,
    };
  }

  render() {
    const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9_]+?\.[a-zA-Z]{2,3}$/;
    const usernameRegex = /^[a-zA-Z0-9]{0,4}$/;
    const nameRegex = /^[a-zA-Z]+$/;

    const validFName = nameRegex.test(this.state.firstname);
    const validLName = nameRegex.test(this.state.lastname);
    const emptyFName = this.state.firstname === '';
    const emptyLName = this.state.lastname === '';
    const emptyUName = this.state.username === '';
    const emptyEmail = this.state.email === '' || !this.state.email;
    console.log(emptyEmail);
    const validUsername = this.state.username.length > 4;
    const validEmail = emailRegex.test(this.state.email);
    // console.log(validEmail);
    const validPass = (this.state.password === this.state.confirmPassword);
    const validLPass = this.state.password.length >= 6;
    const emptyPass = this.state.password === '';
    const available = validFName && validLName && validUsername && validEmail && validPass && validLPass;
    const notEmpty = !emptyFName && !emptyLName && !emptyUName && !emptyEmail && !emptyPass;
    const validate = () => {
      if (available && notEmpty) {
        Alert.alert('Success');
      } else {
        Alert.alert('FAILED');
      }
    };
    return (
      <View style={{ flex: 1 }} >
        <ScrollView>
          <View style={{ flex: 3, marginLeft: 16, marginRight: 16 }} >
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                onChangeText={firstname => this.setState({ firstname })}
                value={this.state.firstname}
              />
            </View>
            {validFName || emptyFName ? <Text /> : <Text style={styles.fail}>Invalid First Name</Text>}

            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                editable
                onChangeText={lastname => this.setState({ lastname })}
                value={this.state.lastname}
              />
            </View>
            {validLName || emptyLName ? <Text /> : <Text style={styles.fail}>Invalid Last Name</Text>}

            <View style={styles.line} />
            <View style={[styles.textinputWrapperStyle, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <TextInput
                placeholder="Username"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
                editable
              />
              {validUsername ? (<Image source={require('../../images/accept.png')} style={styles.acceptImg} />)
              : (<Image source={require('../../images/wrong.png')} style={styles.acceptImg} />)
              }

            </View>
            {validUsername || emptyUName ? (<Text />) : (<Text style={styles.fail}>
              The username already taken</Text>)
            }
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                editable
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </View>
            {validEmail || emptyEmail ? (<Text />)
              : (<Text style={styles.fail}>Invalid email</Text>)
            }
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                onChangeText={password => this.setState({ password })}
                secureTextEntry
              />
            </View>
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                secureTextEntry
              />
            </View>
            {(validPass && validLPass) || emptyPass ? <Text /> : <Text style={styles.fail}>Password doesn't match</Text>}
            <View style={styles.line} />
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="{{ custom field }}"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
              />
            </View>
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="{{ custom field }}"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
              />
            </View>
          </View>
          <View style={styles.line} />
          <TouchableOpacity onPress={validate}>
            <View style={styles.btnReg} >
              <Text style={styles.textReg} >
                Register
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.policyStyle} >
            <Text>
              By registering, you agree to {this.state.app}
            </Text>
          </View>
          <View style={[styles.policyStyle, { justifyContent: 'space-between', flex: 1, marginBottom: 10 }]}>
            <TouchableOpacity onPress={Actions.tos}>
              <Text style={{ color: '#01579B', borderBottomWidth: 0.5, borderColor: '#01579B' }}>
                Terms of Use
              </Text>
            </TouchableOpacity>
            <Text>  </Text>
            <Text>
              and
            </Text>
            <Text>  </Text>
            <TouchableOpacity onPress={Actions.pp}>
              <Text style={{ color: '#01579B', borderBottomWidth: 0.5, borderColor: '#01579B' }}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
