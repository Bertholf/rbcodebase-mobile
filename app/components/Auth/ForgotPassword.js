import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableHighlight,
  TextInput,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import strings from '../../localizations';
import style from './../../style/StyleGlobal';
import  me from '../../services/me';
import auth from '../../services/auth';
const logo = require('./../../images/logo.png');

export default class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      profile: {},
      alertS: '',
      alertF: '',
      submit: false,
    }
  }
    // endpoint verify email to submit forgot password
    verifyEmail() {
    this.setState({ submit: true})
    auth.verify(this.state.email)
    .then((res) => {
      console.log('RESPONSE VERIFY EMAIL=====', res);
      Actions.resetresult({ name: res.data.name_first+ ' '+res.data.name_last, email: res.data.email })
      //loading will stop when succes submit forgot password
      this.setState({submit: false});
    })
    .catch(() => { Alert.alert(strings.ForgotPass.warning, strings.ForgotPass.message)
      //loading will stop when error email
      this.setState({submit: false});
    });
  }


  render() {
    // validation varify email if wrong email
    const value = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidator = value.test(this.state.email);
    const emailInput = this.state.email;
    const validateEmail = () => {
      if (emailValidator && emailInput) {
        // Need action here, please fix it later, thanks!!!
        this.verifyEmail();
      } else {
        return;
      }
    };

    return (
      <View style={styles.container}>
        <TextInput
          style={style.textInput}
          placeholderTextColor={'silver'}
          onChangeText={email => this.setState({ email })}
          placeholder={'Email'}
          underlineColorAndroid={'rgba(0,0,0,0)'}
        />
        {!emailInput || emailValidator ?
        <Text /> : <Text style={styles.invalid}>
          {strings.ForgotPass.alert_invalid_email}
        </Text>}

        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={validateEmail}
            underlayColor={"#99d9f4"}
          >
            <View>
              {this.state.submit ? <ActivityIndicator color={'#fff'}/>:
                <Text style={style.buttonText}>
                  {strings.ForgotPass.send}
                </Text>}
              </View>
          </TouchableHighlight>
        </View>
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
