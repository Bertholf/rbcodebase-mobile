import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Alert,
  ToastAndroid,
  Keyboard
} from 'react-native';
import styles from './ChangeSetting/ChangeStyles';
import auth from './../../services/auth';
import strings from '../../localizations';
import saveProfile from '../../services/updateProfile';
import NavigationBar from 'react-native-navbar';
import IconClose from './../../layouts/IconClose';
import {Actions} from 'react-native-router-flux';

export default class ChangeUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      newUsername: '',
      currentUserName: '',
    };
  }
  componentDidMount() {
    auth.profile ()
    .then (response => this.setState({profile:response.data, loading:false}, () => console.log(this.state)))
    .catch(Err=> console.log('err', Err))
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  render() {
    const id = this.state.profile.id;
    const name_first = this.state.profile.name_first;
    const name_last = this.state.profile.name_last;
    const name_slug = this.state.profile.name_slug;
    const email = this.state.profile.email;
    const phone = this.state.profile.phone;
    const birthday = this.state.profile.birthday;
    const emptyUsername = this.state.newUsername;
    const newUsernames = this.state.newUsername;
    const regex = /^[a-zA-Z0-9_.-]{6,25}$/;
    const validRegex = regex.test(this.state.newUsername);
    const validUsername = this.state.profile.name_slug !== this.state.newUsername;
    const onSave = () => {
    if (validRegex && validUsername) {
        saveProfile(id, name_first, name_last, newUsernames, phone, birthday);
        this.clearText('textInput')
        auth.profile ()
        .then (response => {
          this.setState({profile:response.data, loading:false}, () => {
            this.props.reRender();
          })
          Keyboard.dismiss();
          ToastAndroid.show('Setting saved', ToastAndroid.SHORT)
        })
        .catch(Err=> console.log('err', Err))
        Actions.pop();
      } else {
        Alert.alert("Error", "invalid username");
      }
    }

    const rightButtonConfig = {
    title: 'Save',
    handler: () => onSave(),
    };

  const titleConfig = {
    title: 'Edit Username',
  };
    // const saveUsername = () => {
    //   const newUsername = this.state.newUsername;
    //   console.log(newUsername);
    //   saveProfile(newUsername);
    //   Alert.alert('Success', 'Your Username has been Changed');
    // };
    return (
      <View style={styles.OuterView}>
      <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2}}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={<IconClose onPress={Actions.pop} />}/>
      </View>
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.Text2}>
              {strings.changeUname.current_name}
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid="rgba(0,0,0,0)"
              // defaultValue={this.state.profile.name_slug}
              // onChangeText={(this.stat.profile.name_slug) => this.setState({ currentUserName })}

              value={this.state.profile.name_slug}
              editable={false}
            />
            <Text style={styles.Text2}>
              {strings.changeUname.new_name}
            </Text>
            <TextInput
              ref={'textInput'}
              style={styles.TextInput1}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.changeUname.placeholder}
              maxLength={25}
              onChangeText={newUsername => this.setState({ newUsername })}
              multiline={false}
              numberOfLines={4} editable
              value={this.state.newUsername}
            />
            {validRegex || !emptyUsername ? <Text /> : <Text style={styles.invalid}>{strings.changeUname.error_length}</Text>}
            {validUsername ? <Text /> : <Text style={styles.invalid}>{strings.changeUname.error_same_username}</Text>}
          </View>
          <Text style={{ marginLeft: 20, marginTop: 10 }}>
            {strings.changeUname.uniquename}
          </Text>
        </ScrollView>
      </View>
    );
  }
}
