import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Alert,
  AsyncStorage,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';
import Toast, { DURATION } from 'react-native-easy-toast';
import styles from './ChangeSetting/ChangeStyles';
import auth from './../../services/auth';
import strings from '../../localizations';
import IconClose from './../../layouts/IconClose';

export default class emailVarification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: '',
      email: '',
      profile: {},
      emailnew: '',
      token: '',
      loading: true,
    };
  }
  componentDidMount() {
    // Save dan get Item AsyncStorage from Api/change-email
    AsyncStorage.getItem('email').then((res) => { this.setState({ emailnew: res }); console.log('email set AsyncStorage', this.state.emailnew); }).catch(res => console.log('error ambil email new-----'));
    auth.profile()
    .then(response => this.setState({ profile: response.data }))
    .catch(Err => Err);
  }
  onClick(text, position, duration, withStyle) {
    this.setState({
      position,
    });
    if (withStyle) {
      this.refs.toastWithStyle.show(text, duration);
    } else {
      this.refs.toast.show(text, duration);
    }
  }

  // method validation email with  /api/change-email-validation

  validationEmail() {
    auth.emailValidation(this.state.newEmail, this.state.token)
    .then((res) => {
      console.log('RESPONSE CHANGE EMAIL=====', res);
      Actions.setting();

      // loading will stop when succes submit forgot password
    }).catch(err => console.log('ERROR FOUND', err));
  }
  render() {
    const rightButtonConfig = {
      title: strings.settings.save,
      handler: () => saveemail1(),
    };
    const leftButtonConfig = {
      title: 'Cancel',
      handler: () => Actions.pop(),
    };

    const titleConfig = {
      title: strings.EditEmail.titleVarification,
    };
    const value = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidator = value.test(this.state.newEmail);
    const currentEmail = this.state.profile.email;
    const sameEmail = currentEmail !== emailInput;
    const emailInput = this.state.newEmail;
    const tokenInput = this.state.token;
    const saveemail1 = () => {
      if (emailInput) {
        this.validationEmail();
        // @TODO We need to fix it later thanks!!!
        // console.log('New Email==>', emailInput);
        // saveProfile(firstName, lastName, slug, emailInput, phone, birthday);
        this.onClick(strings.EditEmail.savedvalidation, 'bottom', DURATION.LENGTH_LONG);
      } else {
        this.onClick(strings.EditEmail.error, 'bottom', DURATION.LENGTH_LONG);
      }
    };
    return (
      <View style={styles.OuterView}>
        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={<IconClose onPress={Actions.pop} />}
            style={{ height: 55 }}
          />
        </View>
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.Text2} />
            <TextInput
              style={styles.TextInput1} placeholder="New Email Changed" underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              onChangeText={newEmail => this.setState({ newEmail })}
              multiline
              numberOfLines={4} editable
            />
            {emailValidator && emailInput ?
              <Text /> : <Text style={styles.invalid}>
                {strings.EditEmail.error_invalid_email}
              </Text>}
            <Text style={styles.Text2}>
              {strings.EditEmail.confirm_change}
            </Text>
            <TextInput
              style={styles.TextInput1} underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.EditEmail.confirm_code}
              onChangeText={token => this.setState({ token })}
              multiline
              numberOfLines={4}
            />
          </View>
        </ScrollView>
        {/* ---------------------------------------------------------
          *
          * Give Toast message
          *
          * --------------------------------------------------------- */}
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
