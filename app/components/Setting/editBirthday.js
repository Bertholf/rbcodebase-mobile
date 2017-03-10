import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Keyboard,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import Toast from 'react-native-simple-toast';
import NavigationBar from 'react-native-navbar';
import strings from '../../localizations';
import auth from './../../services/auth';
import saveProfile from '../../services/updateProfile';
import IconClose from './../../layouts/IconClose';

const moment = require('moment');

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
    height: 40,
  },
  text: {
    color: '#000000',
    fontSize: 13,
  },
});

export default class editBirthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      profile: {},
    };
  }

  componentDidMount() {
    auth.profile()
     .then(response => this.setState({ profile: response.data, date: response.data.date_birth }))
     .catch(Err => Err);
  }

  getDate() {
    return moment().local();
  }

  render() {
    const rightButtonConfig = {
      title: strings.settings.save,
      handler: () => updateBirthday(),
    };
    const leftButtonConfig = {
      title: 'Cancel',
      handler: () => Actions.pop(),
    };

  const titleConfig = {
    title: strings.editBirthday.title,
  };
    const id = this.state.profile.id;
    const name_first = this.state.profile.name_first;
    const name_last = this.state.profile.name_last;
    const name_slug = this.state.profile.name_slug;
    const phone = this.state.profile.phone;
    const birthday = this.state.profile.date_birth;
    const dateBirth = this.state.date;
    const updateBirthday = () => {
      saveProfile(id, name_first, name_last, name_slug, phone, dateBirth, birthday);
        Toast.show(strings.mobilephone.phoneChanged);
      auth.profile()
      .then(response => {
        this.setState({ profile: response.data, loading: false }, () => {
          this.props.reRender();
        });
      })
      .catch(Err => Err);
      Keyboard.dismiss();
      Actions.pop();
  };


    return (
      <View style={{ flex: 1}}>
        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={<IconClose onPress={Actions.pop} />}
          />
        </View>
        <View style={{ padding: 16 }}>
          <View style={styles.styleView}>
            <View style={{ alignSelf: 'center' }}>
              <Text style={styles.text}>{strings.editBirthday.birthday}</Text>
            </View>
            <DatePicker
              date={dateBirth}
              placeholder={strings.editBirthday.placeholder}
              format="YYYY-MM-DD"
              minDate="1990-05-01"
              maxDate={this.getDate()}
              confirmBtnText={strings.editBirthday.confirm}
              cancelBtnText={strings.editBirthday.cancel}
              onDateChange={(dateBirth) => { this.setState({ date: dateBirth }); }}
              customStyles={{
                dateInput: {
                  borderColor: 'rgba(0,0,0,0)',
                },
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
