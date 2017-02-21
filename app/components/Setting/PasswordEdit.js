import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import me from '../../services/me';
import styles from './ChangeSetting/ChangeStyles';
import saveProfile from '../../services/updateProfile';

export default class PassEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      newPassword: '',
      confirmPassword: '',
      profile: {},
    };
  }
  componentDidMount() {
    me.getMe()
    .then(data => this.setState({ profile: data }));
  }
  render() {
    const usedPassword = this.state.password;
    const currentPassword = this.state.profile.password;
    const Invalidpassword = usedPassword !== currentPassword;
    const passwordInput = this.state.newPassword;
    const password_confirmation = this.state.confirmPassword;
    const passwordLength = passwordInput.length < 6;
    const validPassword = () => {
      if (!Invalidpassword && !passwordLength) {
        // @TODO We need to fix it later, thanks!!!
        console.log('new password', passwordInput, password_confirmation);
        saveProfile(passwordInput, password_confirmation);
        Alert.alert('Success', 'Your password has been Changed');
      }
    };
    return (
      <View style={styles.OuterView}>
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.Text2}>
              Enter your password
            </Text>
            {/* @TODO we need to delete this current password later, thanks!!! */}
            <Text style={styles.Text2}>
              {currentPassword}
            </Text>
            <TextInput
              style={styles.TextInput1} placeholder="Enter your password" underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'} onChangeText={password => this.setState({ password })}
              numberOfLines={4}
            />
            {!Invalidpassword || !usedPassword ?
              <Text /> : <Text style={styles.invalid}>Wrong password</Text>}
            <Text style={styles.Text2}>
              Enter your new password
            </Text>
            <TextInput
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder="Enter your new password" onChangeText={newPassword => this.setState({ newPassword })} multiline
              numberOfLines={4}
            />
            {!passwordLength || !passwordInput ? <Text /> :
            <Text style={styles.invalid}>The password must be at least  6 characters</Text>}
            <Text style={styles.Text2}>
              Confirm change
            </Text>
            <TextInput
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder="Enter received code" onChangeText={confirmPassword => this.setState({ confirmPassword })} multiline
              numberOfLines={4}
            />
          </View>
        </ScrollView>
        <TouchableOpacity onPress={validPassword}>
          <View style={styles.View2}>
            <Text style={styles.Button}>
              SAVE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
