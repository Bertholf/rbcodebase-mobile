import React, { Component } from 'react';
import { AppRegistry, View, Button, Text, StyleSheet, TextInput, AsyncStorage } from 'react-native';
import { strings } from './../lib/Locale';

export default class Pin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: ''
    };
  }

  static get defaultProps() {
    return {
      title: strings.enter_pin
    };
  }

  render() {
    return (
      <View style={ styles.login_wrap }>
        <View style={ styles.form }>
          <TextInput
              placeholder={strings.pin}
              onChangeText={ (text) => this.setState({ pin: text })}
            />
        </View>
        <View>
          <Button
            onPress={this.onLogin.bind(this)}
            title={strings.login}
            color='green'
          />
        </View>
      </View>
    );
  }

  onLogin() {
    this.props.navigator.push({
      name: 'bridge'
    });
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
