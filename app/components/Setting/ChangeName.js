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
import auth from './../../services/auth';
import strings from '../../localizations';

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
    auth.profile()
    .then(response => this.setState({ profile: response.data}, () => console.log(this.state)))
    .catch(Err => console.log('err,Err'));
  }

  render() {
    const value = /^[a-zA-Z ]+$/
    const firstNameValidator = value.test(this.state.firstName);
    const lastNameValidator = value.test(this.state.lastName);
    const firstNameInput = this.state.firstName;
    const lastNameInput = this.state.lastName;
    const currentFirstName = this.state.profile.first_name;
    const currentLastName = this.state.profile.last_name;
    const validateName = () => {
      if (firstNameInput && firstNameValidator && lastNameInput && lastNameValidator){
        if (firstNameInput === currentFirstName) {
          if (lastNameInput === currentLastName) {
            Alert.alert('Nothing Changed!', 'Your name is same as current :)');
          } else if (lastNameInput !== currentLastName && firstNameInput === currentFirstName) {
            Alert.alert('Success', 'Your Last Name has been Changed');
          }
        } else if (firstNameInput !== currentFirstName && lastNameInput === currentLastName) {
          Alert.alert('Success', 'Your First Name has been Changed');
        } else {
          Alert.alert('Success', 'Your name has been Changed');
        }
      } else {
        Alert.alert('Error', 'You have invalid input or You have no input');
      }
    };
    return (
      <View style={styles.OuterView}>
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.TextInput1}>
              {this.state.profile.name_first} {this.state.profile.name_last}
            </Text>
            <Text style={styles.Text2}>
              {strings.ChangeName.newname}
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'}
              placeholder="Enter your new name"
              onChangeText={firstName => this.setState({ firstName })}
              multiline={false}
              numberOfLines={1} editable={true}
            />
            {firstNameValidator || !firstNameInput ?
              <Text /> : <Text style={styles.invalid}>{strings.ChangeName.alertnewname}</Text>}
            <Text style={styles.Text2}>
              {strings.ChangeName.lastName}
            </Text>
            <TextInput
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder="Your Last Name" onChangeText={lastName => this.setState({ lastName })}
              multiline={false}
              numberOfLines={1} editable={true}
            />
            {lastNameValidator || !lastNameInput ?
              <Text /> : <Text style={styles.invalid}>{strings.ChangeName.alertlastname}</Text>}
          </View>
        </ScrollView>
        <TouchableOpacity onPress={validateName}>
          <View style={styles.View2}>
            <Text style={styles.Button}>
              {strings.ChangeName.store}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
