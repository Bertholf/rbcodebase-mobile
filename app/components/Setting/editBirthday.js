import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  NetInfo,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast, { DURATION } from 'react-native-easy-toast';
import DatePicker from 'react-native-datepicker';
import NavigationBar from 'react-native-navbar';
import strings from '../../localizations';
import auth from './../../services/auth';
import saveProfile from '../../services/updateProfile';
import IconClose from './../../layouts/IconClose';
import styles from '../../style/StyleGlobal';

const moment = require('moment');

export default class editBirthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      profile: {},
      position: 'bottom',
      style: {},
      netstate: this.props.network,
    };
  }
  // Mount Component with Value in auth.profile (birthday)
  componentDidMount() {
    auth.profile()
     .then((response) => {
       if (response.data.date_birth === null) {
         this.setState({
           profile: response.data,
           date: 'Jan 1st 1992',
         });
       } else {
         this.setState({
           profile: response.data,
           date: moment(response.data.date_birth, 'YYYY-MM-DD').format('MMMM Do YYYY'),
         });
       }
     })
     .catch(Err => Err);
  }

  // Get current props state
  componentWillReceiveProps(NextProps) {
    console.log('NETWORK STATE BRITHDAY', NextProps.network);
    this.setState({ netstate: NextProps.network });
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
    const color = this.state.netstate ? 'blue' : '#c0c0c0';
    const handlerState = this.state.netstate ? () => updateBirthday() : () => console.log('Disabled');

    const rightButtonConfig = {
      title: strings.settings.save,
      tintColor: color,
      handler: handlerState,
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
          this.onClick(strings.editBirthday.saved, 'bottom', DURATION.LENGTH_LONG);
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
            leftButton={<IconClose onPress={() => Actions.pop(this.props.reRender({ type: 'refresh' }))} />}
            style={{ height: 55, backgroundColor: '#f0f0f0' }}
          />
        </View>
        <View style={{ padding: 16 }}>
          <View style={styles.styleViewEditBirthday}>
            <View style={{ alignSelf: 'center' }}>
              <Text style={styles.textEditBirthday}>{strings.editBirthday.birthday}</Text>
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

