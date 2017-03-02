import React, { Component } from 'react';
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   Alert,
} from 'react-native';

const styles = require('./styles');

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
    };
  }
  render() {
    const validPassword = this.state.password === this.state.confirmPassword;
    const onSave = () => {
      if (validPassword) {
        // Please fix it later, thanks!!!
        Alert.alert('Valid password');
      }
    };
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.title}>
            <View style={[styles.middle_line, { marginLeft: 5 }]} />
            <Text style={styles.text}>New Password</Text>
            <View style={[styles.middle_line, { marginRight: 5 }]} />
          </View>
          <TextInput
            placeholder="New password"
            placeholderTextColor={'#2196f3'}
            style={styles.new_password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
          <TextInput
            placeholder="Confirm new password"
            placeholderTextColor={'#2196f3'}
            style={styles.new_password}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            secureTextEntry
          />
          {validPassword ?
            <Text /> : <Text style={styles.invalid}>Invalid password</Text>}
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={onSave} style={styles.button_save}>
              <Text style={{ color: 'white' }}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
