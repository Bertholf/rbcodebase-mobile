import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './ChangeSetting/ChangeStyles';
import auth from './../../services/auth';
import strings from '../../localizations';
import saveProfile from '../../services/updateProfile';

export default class ChangeUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      newUsername: '',
    };
  }
  componentDidMount() {
    auth.profile ()
    .then (response => this.setState({profile:response.data, loading:false}, () => console.log(this.state)))
    .catch(Err=> console.log('err', Err))
  }

  render() {
    const emptyUsername = this.state.newUsername === '';
    const newUsernames = this.state.newUsername;
    const regex = /^[a-zA-Z0-9_-]{5,25}$/;
    const validRegex = regex.test(this.state.newUsername);
    const validUsername = this.state.profile.name_slug !== this.state.newUsername;
    const onSave = () => {
    if (validRegex && validUsername) {
        saveProfile(newUsernames);
        console.log('Username changed' + newUsernames);
      } else {
        Alert.alert("Error", "invalid username");
      }
    }
    return (
      <View style={styles.OuterView}>
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.Text2}>
              {strings.changeUname.oldname}
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid="rgba(0,0,0,0)"
              defaultValue={this.state.profile.name_slug}
              editable={false}
            />
            <Text style={styles.Text2}>
              {strings.changeUname.newname}
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder="New Username"
              onChangeText={newUsername => this.setState({ newUsername })}
              multiline={false}
              numberOfLines={4} editable
              value={this.state.newUsername}
            />
            {validRegex || emptyUsername ? <Text /> : <Text style={styles.invalid}>Username should be at least 5 characters or numbers</Text>}
            {validUsername ? <Text /> : <Text style={styles.invalid}>Your new username should be different with current username</Text>}
          </View>
          <Text style={{ marginLeft: 20, marginTop: 10 }}>
            {strings.changeUname.uniquename}
          </Text>
        </ScrollView>
        <TouchableOpacity onPress={onSave}>
          <View style={styles.View2}>
            <Text style={styles.Button}>
              {strings.changeUname.store}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
