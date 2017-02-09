import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from './ChangeSetting/ChangeStyles';
import me from '../../services/me';

export default class NameEdit extends Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      profile: {},
    };
  }
  componentDidMount() {
    me.getMe()
    .then(data => this.setState({ profile: data }))
    .then(() => console.log(this.state.profile));
  }

  render() {
    const value = /^[a-zA-Z]+$/
    const nameValidator = value.test(this.state.firstName);
    const nameInput = this.state.firstName;
    const currentName = this.state.profile.first_name;
    const validateName = () => {
      if (nameInput || nameValidator) {
        if (nameInput === currentName) {
          Alert.alert('Your Name is same as Current Name!');
        } else {
          Alert.alert('Success, Verification Code Has been Sent!');
        }
      } else {
        Alert.alert('Enter your Name!');
      }
    };
    return (
      <View style={styles.OuterView}>
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.Text2}>
              Your current name
            </Text>
            <TextInput
              style={styles.TextInput1} placeholder={this.state.profile.first_name} underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'} onChangeText={() => console.log('dummy')} multiline={true}
              numberOfLines={4} editable={false}
            />
            <Text style={styles.Text2}>
              Enter your new name
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'}
              placeholder="Enter your new name"
              onChangeText={firstName => this.setState({ firstName })}
              multiline={true}
              numberOfLines={4} editable={true}
            />
            {nameInput && nameValidator ?
              <Text /> : <Text style={styles.invalid}>Enter Valid Character (A-Z/a-z)</Text>}
            <Text style={styles.Text2}>
              Confirm change
            </Text>
            <TextInput
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder="Enter received code" onChangeText={() => console.log('dummy')} multiline={true}
              numberOfLines={4} editable={true}
            />
          </View>
        </ScrollView>
        <TouchableOpacity onPress={validateName}>
          <View style={styles.View2}>
            <Text style={styles.Button}>
              SAVE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
