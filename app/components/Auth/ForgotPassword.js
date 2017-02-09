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
    const value = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidator = value.test(this.state.email);
    const emailInput = this.state.email;
    const currentEmail = this.state.profile.email;
    const validateEmail = () => {
      if (emailValidator && emailInput) {
        // Need action here, please fix it later, thanks!!!
        if (currentEmail == emailInput) {
          Alert.alert('Success, Your Password Has Sent to Email')
        } else {
          Alert.alert('Wrong Email Address!')
        }
      } else {
        return;
      }
    };

    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center' }}
        >
          <Image
            source={logo} style={styles.image}
          />
        </View>
        <Text>{this.state.profile.email}</Text>
        <TextInput
          style={{ height: 40, color: '#2196f3' }}
          placeholderTextColor={'#2196f3'}
          onChangeText={email => this.setState({ email })}
          placeholder="Email or Phone"
        />
        {!emailInput || emailValidator ?
          <Text /> : <Text style={styles.invalid}>Invalid email</Text>}
        <TouchableHighlight
          style={styles.button}
          onPress={validateEmail}
          underlayColor="#99d9f4"
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableHighlight>
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
  image: {
    marginBottom: 100,
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  button: {
    height: 36,
    backgroundColor: '#1565C0',
    borderColor: '#1976D2',
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
