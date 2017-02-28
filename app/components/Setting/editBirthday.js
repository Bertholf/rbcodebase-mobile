import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';
import strings from '../../localizations';
import auth from './../../services/auth';
import saveProfile from '../../services/updateProfile';
import NavigationBar from 'react-native-navbar';
import IconClose from './../../layouts/IconClose';

const moment = require('moment');

const { width } = Dimensions.get('window');
export default class editBirthday extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: '2016-01-01',
      profile: {},
   };
  }

  componentDidMount() {
   auth.profile()
   .then(response => this.setState({ profile: response.data}, () => console.log(this.state)))
   .catch(Err => console.log('err,Err'));
  }

  getDate() {
    return moment().local();
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
    title: 'Edit Birthday',
  };
    const updateBirthday = () => {
      const id = this.state.profile.id;
      const name_first = this.state.profile.name_first;
      const name_last = this.state.profile.name_last;
      const name_slug = this.state.profile.name_slug;
      const phone = this.state.profile.phone;
      const birthday = this.state.date;
      console.log('tangal lahir==>', birthday);
      saveProfile(id, name_first, name_last, name_slug, phone, birthday);
      Alert.alert('Success', 'Your birthday has been Changed');
      auth.profile ()
        .then (response => this.setState({profile:response.data, loading:false}, () => console.log(this.state)))
        .catch(Err=> console.log('err', Err))
    };
    return (
      <View style={{ flex: 1}}>
      <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2}}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={<IconClose onPress={Actions.pop} />}/>
      </View>
        <View style={{ padding: 16 }}>
          <View style={styles.styleView}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.text}>{strings.editBirthday.birthday}</Text>
            </View>
            <DatePicker
              date={this.state.date}
              placeholder={strings.editBirthday.placeholder}
              format="YYYY-MM-DD"
              minDate="1990-05-01"
              maxDate={this.getDate()}
              confirmBtnText={strings.editBirthday.confirm}
              cancelBtnText={strings.editBirthday.cancel}
              onDateChange={(date) => { this.setState({ date: date }); }}
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
