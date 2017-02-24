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
import strings from '../../localizations/';
import NavigationBar from 'react-native-navbar';
import IconClose from './../../layouts/IconClose';
import {Actions} from 'react-native-router-flux';

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
    const rightButtonConfig = {
    title: 'Save',
    handler: () => alert('successfully!'),
  };
    const leftButtonConfig = {
    title: 'Cancel',
    handler: () => Actions.pop(),
  };

  const titleConfig = {
    title: 'Edit Paasword',
  };
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
    // strings.setLanguage('en');
    return (
      <View style={styles.OuterView}>
      <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2}}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={<IconClose onPress={Actions.pop} />}/>
      </View>
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
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder={strings.PassEditLoc.confirmInputChange} onChangeText={() => console.log('dummy')} multiline
              numberOfLines={4}
            />
          </View>
        </ScrollView>

      </View>
    );
  }
}
