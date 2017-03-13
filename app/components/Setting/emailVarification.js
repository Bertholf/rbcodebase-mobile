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
import styles from './ChangeSetting/ChangeStyles';
import auth from './../../services/auth';
import strings from '../../localizations';
import IconClose from './../../layouts/IconClose';

export default class emailVarification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: '',
      profile: {},
      email: '',
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('email').then((res) => { this.setState({ email: res }); console.log('NAMAAAA KAMUUUUU=====',this.state.email); }).catch((res) => console.log('error ambil email-----'));
    auth.profile()
    .then(response => this.setState({ profile: response.data }))
    .catch(Err => Err);
  }
  render() {
    const rightButtonConfig = {
      title: strings.settings.save,
      handler: () => Actions.emailcodevarification(),
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
    const emailInput = this.state.newEmail;
    const currentEmail = this.state.profile.email;
    const sameEmail = currentEmail !== emailInput;
    const validEmail = () => {
      if (emailValidator && emailInput && sameEmail) {
        // @TODO We need to fix it later thanks!!!
        // console.log('New Email==>', emailInput);
        // saveProfile(firstName, lastName, slug, emailInput, phone, birthday);
        Alert.alert('Success', 'Your email has been Changed');
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
            <Text style={styles.Text2}>
            </Text>
            <TextInput
              style={styles.TextInput1} placeholder={this.state.profile.email == null ? this.state.email : this.state.profile.email} underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'} onChangeText={() => console.log('dummy')} multiline
              numberOfLines={4} editable={false}
            />
            <Text style={styles.Text2}>
              {strings.EditEmail.enter_new_mail}
            </Text>
            {emailValidator || !emailInput ?
              <Text /> : <Text style={styles.invalid}>
                {strings.EditEmail.error_invalid_email}
              </Text>}
            {sameEmail ?
              <Text /> : <Text style={styles.invalid}>{strings.EditEmail.alert_same_email}</Text>}
            <Text style={styles.Text2}>
              {strings.EditEmail.confirm_change}
            </Text>
            <TextInput
              style={styles.TextInput1} underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.EditEmail.confirm_code}
              onChangeText={() => console.log('dummy')}
              multiline
              numberOfLines={4}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
