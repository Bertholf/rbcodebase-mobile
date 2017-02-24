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
import strings from '../../localizations/';
import auth from './../../services/auth';
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
  // componentDidMount() {
  //   me.getMe()
  //   .then(data => this.setState({ profile: data }));
  // }
  componentDidMount() {
    auth.profile()
    .then(response => this.setState({ profile: response.data}, () => console.log(this.state)))
    .catch(Err => console.log('err,Err'));
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  render() {
    const usedPassword = this.state.password;
    const currentPassword = this.state.profile.password;
    const Invalidpassword = usedPassword !== currentPassword;
    const passwordInput = this.state.newPassword;
    const password_confirmation = this.state.confirmPassword;
    const passwordLength = passwordInput.length < 6;
    const id = this.state.profile.id;
    const name_first = this.state.profile.name_first;
    const name_last = this.state.profile.name_last;
    const name_slug = this.state.profile.name_slug;
    const phone = this.state.profile.phone;
    const birthday = this.state.profile.date;
    const validPassword = () => {
      if (!Invalidpassword && !passwordLength) {
        // @TODO We need to fix it later, thanks!!!
        console.log('new password==>', passwordInput, password_confirmation);
        saveProfile(id, name_first, name_last, name_slug, phone, birthday, passwordInput, password_confirmation);
        Alert.alert('Success', 'Your password has been Changed');
        this.clearText('textInput1')
        this.clearText('textInput2')
        auth.profile ()
        .then (response => this.setState({profile:response.data, loading:false}, () => console.log(this.state)))
        .catch(Err=> console.log('err', Err))
      }
    };
    // strings.setLanguage('en');
    return (
      <View style={styles.OuterView}>
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.Text2}>
              {strings.PassEditLoc.enterYourPassword}
            </Text>
            {/* @TODO we need to delete this current password later, thanks!!! */}
            <Text style={styles.Text2}>
              {currentPassword}
            </Text>
            <TextInput
              style={styles.TextInput1} placeholder={strings.PassEditLoc.inputEnterOldPassword} underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'} onChangeText={password => this.setState({ password })}
              numberOfLines={4}
            />
            {!Invalidpassword || !usedPassword ?
              <Text /> : <Text style={styles.invalid}>{strings.PassEditLoc.wrongPassword}</Text>}
            <Text style={styles.Text2}>
              {strings.PassEditLoc.enterYourNewPassword}
            </Text>
            <TextInput
              ref={'textInput1'}
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder={strings.PassEditLoc.inputEnterYourPassword} onChangeText={newPassword => this.setState({ newPassword })} multiline
              numberOfLines={4}
            />
            {!passwordLength || !passwordInput ? <Text /> :
            <Text style={styles.invalid}>{strings.PassEditLoc.passwordMustbeharacters}</Text>}
            <Text style={styles.Text2}>
              {strings.PassEditLoc.confirmChange}
            </Text>
            <TextInput
              ref={'textInput2'}
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder={strings.PassEditLoc.confirmInputChange} onChangeText={confirmPassword => this.setState({ confirmPassword })} multiline
              numberOfLines={4}
            />
          </View>
        </ScrollView>
        <TouchableOpacity onPress={validPassword}>
          <View style={styles.View2}>
            <Text style={styles.Button}>
              {strings.PassEditLoc.save}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
