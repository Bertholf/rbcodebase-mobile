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
const { width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
export default class editBirthday extends Component {
  constructor(props){
    super(props);
    this.state = { date: '2016-05-15' };
  }
  render() {
    return (
      <View>
        <View style={{ padding: 9 }}>
          <View>
            <Text>Birthday</Text>
          </View>
          <View>
            <DatePicker
              style={{ width: width * .97 }}
              date={this.state.date}
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="1990-05-01"
              maxDate="2017-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(date) => { this.setState({date:date})}}
            />
          </View>
        </View>
        <View style={{ marginTop: 30, padding: 7 }}>
          <TouchableOpacity style={styles.button} onPress={Actions.setting}>
            <Text style={styles.titleButton} >Save</Text>
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
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: 'center',
  },
});
