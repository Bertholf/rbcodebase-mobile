import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Keyboard,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast, { DURATION } from 'react-native-easy-toast';
import DatePicker from 'react-native-datepicker';
import NavigationBar from 'react-native-navbar';
import strings from '../../localizations';
import auth from './../../services/auth';
import saveProfile from '../../services/updateProfile';
import IconClose from './../../layouts/IconClose';

const moment = require('moment');

export default class editBirthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      profile: {},
      position: 'bottom',
      style: {},
    };
  }
  // Mount Component with Value in auth.profile (birthday)
  componentDidMount() {
    auth.profile()
     .then(response => this.setState({ profile: response.data, date: moment(response.data.date_birth, 'YYYY-MM-DD').format('MMMM Do YYYY') }))
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

  getButton(text, position, duration, withStyle) {
    return (
      <Text
        onPress={() => this.onClick(text, position, duration, withStyle)}
      >
        <Text>{text}</Text>
      </Text>
    );
  }

  getDate() {
    const dateNow = moment().local().format('MMMM Do YYYY');
    console.log('TANGGAL HARI INI', dateNow);
    return dateNow;
  }

  render() {
    // Create Save Button on Navigation
    const rightButtonConfig = {
      title: strings.settings.save,
      handler: () => updateBirthday(),
    };
    const leftButtonConfig = {
      title: 'Cancel',
      handler: () => Actions.pop({ type: 'refresh' }),
    };
      // title of screen
    const titleConfig = {
    title: strings.editBirthday.title,
  };
    const id = this.state.profile.id;
    const name_first = this.state.profile.name_first;
    const name_last = this.state.profile.name_last;
    const name_slug = this.state.profile.name_slug;
    const email = this.state.profile.email;
    const displayName = this.state.profile.name_display;
    const phone = this.state.profile.phone;
    const birthday = moment(this.state.date, 'MMM Do YYYY').format('YYYY-MM-DD');
    const gender = this.state.profile.gender;
    const dateBirth = this.state.date;
    const updateBirthday = () => {
      saveProfile(id, name_first, name_last, displayName, name_slug, gender, phone, birthday);
      //  Toast.show(strings.mobilephone.phoneChanged);
      auth.profile()
      .then((response) => {
        /**
         * Set response to profile
         * profile = response.data
         * loading = false
         *
         * and run callback to show Toast:
         * this.onClick();
         */
        this.setState({ profile: response.data, loading: false }, () => {
          this.onClick(strings.editBirthday.saved, 'bottom', DURATION.LENGTH_LONG)
        });
      })
      .catch(Err => Err);
      Keyboard.dismiss();
    };


    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={<IconClose onPress={() => Actions.pop(this.props.reRender({type: 'refresh'}))} />}
            style={{ height: 55, backgroundColor: '#f0f0f0' }}
          />
        </View>
        <View style={{ padding: 16 }}>
          <View style={styles.styleView}>
            <View style={{ alignSelf: 'center' }}>
              <Text style={styles.text}>{strings.editBirthday.birthday}</Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
              <DatePicker
                date={dateBirth}
                placeholder={strings.editBirthday.placeholder}
                format="MMM Do YYYY"
                minDate="1990-05-01"
                maxDate={this.getDate()}
                confirmBtnText={strings.editBirthday.confirm}
                cancelBtnText={strings.editBirthday.cancel}
                onDateChange={(value) => { this.setState({ date: value }); }}
                customStyles={{
                  dateInput: {
                    borderColor: 'rgba(0,0,0,0)',
                  },
                }}
              />
            </View>
          </View>
        </View>
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

const styles = StyleSheet.create({
  titleButton: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: 'center',
  },
  styleView: {
    marginTop: 10,
    flexDirection: 'row',
    paddingLeft: 15,
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    justifyContent: 'space-between',
    marginBottom: 8,
    height: 50,
  },
  text: {
    color: '#000000',
    fontSize: 13,
  },
});
