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
import auth from './../../services/auth';
import NavigationBar from 'react-native-navbar';
import IconClose from './../../layouts/IconClose';
import {Actions} from 'react-native-router-flux';

export default class PassEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      newPassword: '',
      confirmNewPassword: '',
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
    const validPassword = usedPassword === currentPassword;
    const passwordInput = this.state.newPassword;
    const combinePassword = this.state.newPassword === this.state.confirmNewPassword;
    const passwordLength = passwordInput.length >= 6;
    const id = this.state.profile.id;
    const name_first = this.state.profile.name_first;
    const name_last = this.state.profile.name_last;
    const name_slug = this.state.profile.name_slug;
    const phone = this.state.profile.phone;
    const birthday = this.state.profile.date;
    const onSave = () => {
      if (validPassword && passwordLength && combinePassword) {
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

    const rightButtonConfig = {
      title: 'Save',
      handler: () => onSave(),
    };

    const titleConfig = {
      title: 'Edit Paasword',
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
              {strings.PassEditLoc.enter_old_password}
            </Text>
            {/* @TODO we need to delete this current password later, thanks!!! */}
            <Text style={styles.Text2}>
              {currentPassword}
            </Text>
            <TextInput
              style={styles.TextInput1} placeholder={strings.PassEditLoc.input_old_password} underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'} onChangeText={password => this.setState({ password })}
              numberOfLines={4}
            />
            {validPassword || !usedPassword ?
              <Text /> : <Text style={styles.invalid}>{strings.PassEditLoc.error_wrong_password}</Text>}
            <Text style={styles.Text2}>
              {strings.PassEditLoc.enter_new_password}
            </Text>
            <TextInput
              ref={'textInput1'}
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder={strings.PassEditLoc.input_new_password} onChangeText={newPassword => this.setState({ newPassword })} multiline
              numberOfLines={4}
            />
            {passwordLength || !passwordInput ? <Text /> :
            <Text style={styles.invalid}>{strings.PassEditLoc.alert_password_length}</Text>}
            <Text style={styles.Text2}>
              {strings.PassEditLoc.confirm_new_password}
            </Text>
            <TextInput
              ref={'textInput2'}
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder={strings.PassEditLoc.input_confirm_password} onChangeText={confirmNewPassword => this.setState({ confirmNewPassword })} multiline
              numberOfLines={4}
            />
            {combinePassword ? <Text /> : <Text style={styles.invalid}>{strings.PassEditLoc.error_password_combination}</Text>}
          </View>
        </ScrollView>
      </View>
    );
  }
}
