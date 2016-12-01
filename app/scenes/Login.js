import React, { Component } from 'react';
import { AppRegistry, View, Button, Text, StyleSheet, TextInput, AsyncStorage } from 'react-native';
import { country, country_code, locale, timezone } from './../lib/Constants';
import { RestAndroid, SharedPrefsAndroid, ToastAndroid } from './../lib/Modules';
import { strings } from './../lib/Locale';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      phone: ''
    };
  }

  static get defaultProps() {
    return {
      title: strings.signup
    };
  }

  render() {
    return (
      <View style={ styles.login_wrap }>
        <View style={ styles.form }>
          <TextInput
              placeholder={strings.phone}
              onChangeText={ (text) => this.setState({ phone: text })}
            />
          <TextInput
              placeholder={strings.fullname}
              onChangeText={ (text) => this.setState({ display_name: text })}
            />

        </View>
        <View>
          <Button
            onPress={this.onRegister.bind(this)}
            title={strings.signup}
            color='green'
          />
        </View>
      </View>
    );
  }

  onRegister() {
    var phone = this.state.phone;
    var display_name = this.state.display_name;
    var nav = this.props.navigator;
    RestAndroid.register(this.state.phone, country_code, country, timezone, locale)
    .then(
      async function(resp) {
        nav.push({
          name: 'pin'
        });

        try {
          await AsyncStorage.multiSet([
            ['phone', phone],
            ['display_name', display_name],
            ['country_code', country_code],
            ['country', country],
            ['timezone', timezone],
            ['locale', locale],
          ]);
        } catch(e) {
          console.log(e);
        }
      }
    ).catch(
      function(error) {
        console.log("landing here 2");
        ToastAndroid.show(strings.failed, ToastAndroid.SHORT);
      }
    );
  }
}

const styles = StyleSheet.create({
  login_wrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  form: {
    padding: 50
  }
});
