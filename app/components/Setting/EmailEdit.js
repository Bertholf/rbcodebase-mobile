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
import auth from './../../services/auth';
import strings from '../../localizations';
import saveProfile from '../../services/updateProfile';

export default class EmailEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: '',
      profile: {},
    };
  }
  componentDidMount() {
    // me.getMe()
    // .then(data => this.setState({ profile: data }));
    auth.profile()
    .then(response => this.setState({ profile: response.data}, () => console.log(this.state)))
    .catch(Err => console.log('err,Err'));
  }
  render() {
    const value = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidator = value.test(this.state.newEmail);
    const emailInput = this.state.newEmail;
    const currentEmail = this.state.profile.email;
    const sameEmail = currentEmail !== emailInput;

    // const firstName = this.state.profile.name_first;
    // const lastName = this.state.profile.name_last;
    // const slug = this.state.profile.name_slug;
    // const phone = this.state.profile.phone;
    // const birthday = this.state.profile.birthday;
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
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.Text2}>
            </Text><TextInput
              style={styles.TextInput1} placeholder={currentEmail} underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'} onChangeText={() => console.log('dummy')} multiline
              numberOfLines={4} editable={false}
            />
            <Text style={styles.Text2}>
              {strings.EditEmail.enterNewEmail}
            </Text>
            <TextInput
              style={styles.TextInput1} underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'} placeholder={strings.EditEmail.enterNewEmail} onChangeText={newEmail => this.setState({ newEmail })} multiline
              numberOfLines={4}
            />
            {emailValidator || !emailInput ?
              <Text /> : <Text style={styles.invalid}>{strings.EditEmail.invalidEmail}</Text>}
            {sameEmail ?
              <Text /> : <Text style={styles.invalid}>{strings.EditEmail.sameEmail}</Text>}
            <Text style={styles.Text2}>
              {strings.EditEmail.confirmChange}
            </Text>
            <TextInput
              style={styles.TextInput1} underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'} placeholder={strings.EditEmail.confirmCode} onChangeText={() => console.log('dummy')} multiline
              numberOfLines={4}
            />
          </View>
        </ScrollView>
        <TouchableOpacity onPress={validEmail}>
          <View style={styles.View2}>
            <Text style={styles.Button}>
              {strings.EditEmail.save}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
