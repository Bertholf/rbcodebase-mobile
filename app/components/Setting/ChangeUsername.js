import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
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
    const saveUsername = () => {
      const newUsername = this.state.newUsername;
      console.log(newUsername);
      saveProfile(newUsername);
    };
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
          </View>
          <Text style={{ marginTop: 10 }}>
            {strings.changeUname.uniquename}
          </Text>
          <Text style={{ marginTop: 10, lineHeight: 20 }}>
            {strings.changeUname.text}
          </Text>
        </ScrollView>
        <TouchableOpacity onPress={saveUsername}>
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
