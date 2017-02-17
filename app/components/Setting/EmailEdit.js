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

export default class EmailEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: '',
      profile: {},
    };
  }
  componentDidMount() {
    me.getMe()
    .then(data => this.setState({ profile: data }));
  }
  render() {
    const value = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidator = value.test(this.state.newEmail);
    const emailInput = this.state.newEmail;
    const currentEmail = this.state.profile.email;
    const sameEmail = currentEmail !== emailInput;
    const validEmail = () => {
      if (emailValidator && emailInput && sameEmail) {
        // @TODO We need to fix it later thanks!!!
        Alert.alert('Valid email');
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
              Enter your new email
            </Text>
            <TextInput
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder="Enter your new email" onChangeText={newEmail => this.setState({ newEmail })} multiline
              numberOfLines={4}
            />
            {emailValidator || !emailInput ?
              <Text /> : <Text style={styles.invalid}>Invalid email input</Text>}
            {sameEmail ?
              <Text /> : <Text style={styles.invalid}>Seems you input the same email</Text>}
            <Text style={styles.Text2}>
              Confirm change
            </Text>
            <TextInput
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder="Enter received code" onChangeText={() => console.log('dummy')} multiline
              numberOfLines={4}
            />
          </View>
        </ScrollView>
        <TouchableOpacity onPress={validEmail}>
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
