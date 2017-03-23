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
import Toast, { DURATION } from 'react-native-easy-toast';
import NavigationBar from 'react-native-navbar';
import styles from './ChangeSetting/ChangeStyles';
import auth from './../../services/auth';
import strings from '../../localizations';
import IconClose from './../../layouts/IconClose';

export default class EmailEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: '',
      profile: {},
      email: '',
      submit: false,
    };
  }

  componentDidMount() {
    // respon data profile
    auth.profile()
    .then(response => this.setState({ profile: response.data, email: response.data.email }))
    .catch(() => {
      AsyncStorage.getItem('email').then((res) => { this.setState({ email: res }); console.log('NAMAAAA KAMUUUUU=====', this.state.email); }).catch(res => console.log('error ambil email-----'));
    });
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

  getButton(text, position, duration, withStyle) {
    return (
      <Text
        onPress={() => this.onClick(text, position, duration, withStyle)}
      >
        <Text>{text}</Text>
      </Text>
    );
  }
  validation() {
    auth.changeemail(this.state.email)
    .then((res) => {
      Actions.emailVarification();
      // after get res (response) from auth.changeemail()
      // user  will direct to Actions.emailVarification()
      // loading will stop when succes submit forgot password
      this.setState({ submit: false });
    });
    this.onClick(strings.EditEmail.saved, 'bottom', DURATION.LENGTH_LONG);
  }

  render() {
    const rightButtonConfig = {
      title: strings.settings.save,
      handler: () => validEmail(),
    };
    const leftButtonConfig = {
      title: 'Cancel',
      handler: () => Actions.pop(),
    };

    const titleConfig = {
      title: strings.EditEmail.title,
    };

    const value = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidator = value.test(this.state.email);
    const emailInput = this.state.email;
    const currentEmail = this.state.profile.email;
    const validEmail = () => {
      if (emailValidator && emailInput) {
        this.validation();

        // @TODO We need to fix it later thanks!!!
        // console.log('New Email==>', emailInput);
        // saveProfile(firstName, lastName, slug, emailInput, phone, birthday);
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
            style={{ height: 55, backgroundColor: '#f0f0f0' }}
          />
        </View>
        <ScrollView>

          <View style={styles.View1}>
            <Text style={styles.Text2}>
              {strings.EditEmail.currentEmail}
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.EditEmail.enter_email}
              onChangeText={newEmail => this.setState({ email: newEmail })}
              multiline
              numberOfLines={4}
              // value={this.state.email}
            />
            {emailValidator && emailInput ?
              <Text /> : <Text style={styles.invalid}>
                {strings.EditEmail.error_invalid_email}
              </Text>}
            {/* {sameEmail ?
              <Text /> : <Text style={styles.invalid}>{strings.EditEmail.alert_same_email}</Text>}*/}
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
