import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, Keyboard, NetInfo } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { Actions } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';
import styles from './../StyleSetting/style';
import saveProfile from '../../../services/updateProfile';
import strings from '../../../localizations/';
import auth from './../../../services/auth';
import IconClose from './../../../layouts/IconClose';

export default class PassEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      newPassword: '',
      confirmNewPassword: '',
      profile: {},
      isConnected: null,
    };
  }

  componentDidMount() {
    // check condiotion if CONNECTION or no CONNECTION
    NetInfo.isConnected.addEventListener('change', this._handleConnectivityChange);
    NetInfo.isConnected.fetch().done(isConnected => {
      console.log('CONNECTION', isConnected), this.setState({ isConnected });
    });
    auth
      .profile()
      .then(response => this.setState({ profile: response.data }, () => console.log(this.state)))
      .catch(Err => Err);
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('change', this._handleConnectivityChange);
  }
  _handleConnectivityChange = isConnected => {
    this.setState({
      isConnected,
    });
  };


  // Add action of Toast
  onClick(text, position, duration, withStyle) {
    this.setState({
      position: position,
    });
    if (withStyle) {
      this.refs.toastWithStyle.show(text, duration);
    } else {
      this.refs.toast.show(text, duration);
    }
  }
  // Initial onPress for show Toast
  getButton(text, position, duration, withStyle) {
    return (
      <Text onPress={() => this.onClick(text, position, duration, withStyle)}>
        <Text>{text}</Text>
      </Text>
    );
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  render() {
    //validation for change password
    const validPassword = this.state.password === this.state.profile.password;
    const passwordInput = this.state.newPassword;
    const passwordConfirmation = this.state.confirmNewPassword;
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
        saveProfile(id, name_first, name_last, name_slug, phone, birthday, passwordInput, passwordConfirmation);
        this.clearText('textInput1')
        this.clearText('textInput2')
        auth.profile()
        .then(response => this.setState({ profile: response.data, loading: false }, () => {
          //show toast when condition true
          this.onClick(strings.settings.saved, 'bottom', DURATION.LENGTH_LONG)
        }))
        .catch(Err => Err);

        this.props.reRender();
        Keyboard.dismiss();
      } else {
         //show toast when condition false
        this.onClick(strings.settings.error, 'bottom', DURATION.LENGTH_LONG);
      }
    };

    //initialization for navigation bar
    const rightButtonConfig = {
      title: strings.settings.save,
      //proses for save in navigation bar
      handler: () => onSave(),
    };
    const rightButtonConfig2 = {
      title: strings.settings.save,
      tintColor: 'grey',
    };
    const titleConfig = {
      title: strings.PassEditLoc.title,
    };

    return (
      <View style={styles.OuterView}>
        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}>
          {this.state.isConnected === true
            ? <NavigationBar
                title={titleConfig}
                rightButton={rightButtonConfig}
                style={{ height: 55, backgroundColor: '#f0f0f0' }}
                leftButton={<IconClose onPress={Actions.pop} />}
              />
            : <NavigationBar
                title={titleConfig}
                rightButton={rightButtonConfig2}
                style={{ height: 55, backgroundColor: '#f0f0f0' }}
                leftButton={<IconClose onPress={Actions.pop} />}
              />}
        </View>
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.Text2}>
              {strings.PassEditLoc.enter_old_password}
            </Text>
            <TextInput
              style={styles.TextInput1}
              placeholder={strings.PassEditLoc.input_old_password}
              underlineColorAndroid={'transparent'}
              placeholderTextColor={'#2196f3'}
              onChangeText={password => this.setState({ password })}
              numberOfLines={4}
            />
            {validPassword || !this.state.password
              ? <Text />
              : <Text style={styles.invalid}>
                  {strings.PassEditLoc.error_wrong_password}
                </Text>}
            <Text style={styles.Text2}>
              {strings.PassEditLoc.enter_new_password}
            </Text>
            <TextInput
              ref={'textInput1'}
              style={styles.TextInput1}
              underlineColorAndroid={'transparent'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.PassEditLoc.input_new_password}
              onChangeText={newPassword => this.setState({ newPassword })}
              multiline
              numberOfLines={4}
            />
            {passwordLength || !passwordInput
              ? <Text />
              : <Text style={styles.invalid}>{strings.PassEditLoc.alert_password_length}</Text>}
            <Text style={styles.Text2}>
              {strings.PassEditLoc.confirm_new_password}
            </Text>
            <TextInput
              ref={'textInput2'}
              style={styles.TextInput1}
              underlineColorAndroid={'transparent'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.PassEditLoc.input_confirm_password}
              onChangeText={confirmNewPassword => this.setState({ confirmNewPassword })}
              multiline
              numberOfLines={4}
            />
            {combinePassword
              ? <Text />
              : <Text style={styles.invalid}>
                  {strings.PassEditLoc.error_password_combination}
                </Text>}
          </View>
        </ScrollView>
    {/* ------- component's render method, use Toast, MUST add in Bottom of the root View --------- */}
        <Toast
          ref="toast"
          style={{ backgroundColor: 'grey' }}
          fadeInDuration={300}
          fadeOutDuration={1000}
        />
      </View>
    );
  }
}
