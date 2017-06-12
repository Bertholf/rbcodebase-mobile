import React, { Component } from 'react';
import { Text, View, ActivityIndicator, TouchableHighlight, TextInput, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import auth from '../../../services/auth';
import strings from '../../../localizations';
import style from './../../../style/StyleGlobal';

export default class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      submit: false,
    };
  }
  // endpoint verify email to submit forgot password
  verifyEmail() {
    this.setState({ submit: true });
    auth
      .verify(this.state.email)
      .then((res) => {
        Actions.resetresult({
          name: `${res.data.name_first} ${res.data.name_last}`,
          email: res.data.email,
        });
        // loading will stop when succes submit forgot password
        this.setState({ submit: false });
      })
      .catch(() => {
        Alert.alert(strings.ForgotPass.warning, strings.ForgotPass.message);
        // loading will stop when error email
        this.setState({ submit: false });
      });
  }

  render() {
    // validation varify email if wrong email
    const value = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidator = value.test(this.state.email);
    const emailInput = this.state.email;
    const validateEmail = () => {
      if (emailValidator && emailInput) {
        this.verifyEmail();
      }
    };
    return (
      <View style={style.container}>
        <TextInput
          style={style.textInput}
          placeholderTextColor={'silver'}
          onChangeText={email => this.setState({ email })}
          placeholder={'Email'}
          underlineColorAndroid={'rgba(0,0,0,0)'}
        />
        {!emailInput || emailValidator
          ? <View />
          : <Text style={style.invalid}>
            {strings.ForgotPass.alert_invalid_email}
          </Text>}
        <View>
          <TouchableHighlight
            style={style.button}
            onPress={validateEmail}
            underlayColor={'#99d9f4'}
          >
            <View>
              {this.state.submit
                ? <ActivityIndicator color={'#fff'} />
                : <Text style={style.buttonText}>
                  {strings.ForgotPass.send}
                </Text>}
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
