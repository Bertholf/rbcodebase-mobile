import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';
import strings from '../../localizations';
import saveProfile from '../../services/updateProfile';

const { width } = Dimensions.get('window');
export default class editBirthday extends Component {
  constructor(props){
    super(props);
    this.state = { date: '2016-01-01' };
  }
  render() {
    const updateBirthday = () => {
      const birthday = this.state.date;
      saveProfile(birthday);
    };
    return (
      <View style={{ flex: 1}}>
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
              maxDate="2017-06-01"
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
        <View style={{ marginTop: 20, padding: 14 }}>
          <TouchableOpacity style={styles.button} onPress={updateBirthday}>
            <Text style={styles.titleButton} >{strings.editBirthday.save}</Text>
          </TouchableOpacity>
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
