import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  Alert,
} from 'react-native';
import strings from '../../localizations';
import  me from '../../services/me';
const logo = require('./../../images/logo.png');

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      profile: {},
    }
  }
  componentDidMount() {
    me.getMe(1234)
    .then(data => this.setState({ profile: data }))
    .then(() => console.log(this.state.profile))
  };

  static propTypes = { url: React.PropTypes.string };

  render() {
      strings.setLanguage('id');
    const value = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidator = value.test(this.state.email);
    const emailInput = this.state.email;
    const currentEmail = this.state.profile.email;
    const validateEmail = () => {
      if (emailValidator && emailInput) {
        // Need action here, please fix it later, thanks!!!
        if (currentEmail == emailInput) {
          Alert.alert({strings.ForgotPass.validemailS});
        } else {
          Alert.alert({strings.ForgotPass.validemailF});
        }
      } else {
        return;
      }
    };

    return (
      <View style={styles.container}>
        {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center' }}
        >
          <Image
            source={logo} style={styles.image}
          />
        </View> */}
        <Text>{this.state.profile.email}</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'#2196f3'}
          onChangeText={email => this.setState({ email })}
          placeholder="Email"
          underlineColorAndroid='rgba(0,0,0,0)'
        />
        {!emailInput || emailValidator ?
          <Text /> : <Text style={styles.invalid}>{strings.ForgotPass.statusF}</Text>}
        <TouchableHighlight
          style={styles.button}
          onPress={validateEmail}
          underlayColor="#99d9f4"
        >
          <Text style={styles.buttonText}>{strings.ForgotPass.send}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
  },
  textInput: {
    height: 50,
    color: '#2196f3',
    borderColor: '#2196f3',
    borderRadius: 2,
    borderWidth: 0.5,
    padding: 15,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  image: {
    marginBottom: 100,
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  button: {
    height: 36,
    backgroundColor: '#039be5',
    borderColor: '#0288d1',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 15,
    marginBottom: 5,
    elevation: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  invalid: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'center',
  },
});
