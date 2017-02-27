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
import NavigationBar from 'react-native-navbar';
import IconClose from './../../layouts/IconClose';
import {Actions} from 'react-native-router-flux';
import me from '../../services/me';
import auth from './../../services/auth';
import saveProfile from '../../services/updateProfile';
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

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  render() {
    const rightButtonConfig = {
    title: 'Save',
    handler: () => validateName() ,
  };
    const leftButtonConfig = {
    title: 'Cancel',
    handler: () => Actions.pop(),
  };

  const titleConfig = {
    title: 'Edit Name',
  };

    const value = /^[a-zA-Z ]+$/
    const id = this.state.profile.id;
    const firstNameValidator = value.test(this.state.firstName);
    const lastNameValidator = value.test(this.state.lastName);
    const firstNameInput = this.state.firstName;
    const lastNameInput = this.state.lastName;
    const currentFirstName = this.state.profile.first_name;
    const currentLastName = this.state.profile.last_name;
    const slug = this.state.profile.name_slug;
    const email = this.state.profile.email;
    const phone = this.state.profile.phone;
    const birthday = this.state.profile.birthday;

    const validateName = () => {
      if (firstNameInput && firstNameValidator && lastNameInput && lastNameValidator) {
        if (firstNameInput === currentFirstName) {
          if (lastNameInput === currentLastName) {
            Alert.alert('Nothing Changed!', 'Your name is same as current :)');
          } else if (lastNameInput !== currentLastName && firstNameInput === currentFirstName) {
            Alert.alert('Success', 'Your Last Name has been Changed');
          }
        } else if (firstNameInput !== currentFirstName && lastNameInput === currentLastName) {
          Alert.alert('Success', 'Your First Name has been Changed');
        } else {
          console.log('name===', firstNameInput, lastNameInput);
          saveProfile(id, firstNameInput, lastNameInput, slug, phone, birthday);
          Alert.alert('Success', 'Your name has been Changed');
          this.clearText('textInput1');
          this.clearText('textInput2');
          auth.profile ()
        .then (response => this.setState({profile:response.data, loading:false}, () => console.log(this.state)))
        .catch(Err=> console.log('err', Err))
        }
      } else {
        Alert.alert('Error', 'You have invalid input or You have no input');
      }
    };
    return (
      <View style={styles.OuterView}>
      <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2}}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={<IconClose onPress={Actions.pop} />}/>
      </View>
        <View style={{alignItems: 'center',flexDirection: 'row',justifyContent: 'center'}}>
          <Text style={styles.TextInput5}>{strings.ChangeName.text1}</Text>
        </View>
        <ScrollView>
          <View style={styles.View1}>
          <Text style={styles.Text2}>
            {strings.ChangeName.oldname}
          </Text>
            <Text style={styles.TextInput1}>
              {this.state.profile.name_first} {this.state.profile.name_last}
            </Text>
            <Text style={styles.Text2}>
              {strings.ChangeName.newname}
            </Text>
            <TextInput
              ref={'textInput1'}
              style={styles.TextInput1}
              underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.ChangeName.newname}
              onChangeText={firstName => this.setState({ firstName })}
              multiline={false}
              numberOfLines={1} editable={true}
              value={this.state.firstName}
            />
            {firstNameValidator || !firstNameInput ?
              <Text /> : <Text style={styles.invalid}>{strings.ChangeName.alertnewname}</Text>}
            <Text style={styles.Text2}>
              {strings.ChangeName.lastname}
            </Text>
            <TextInput
              ref={'textInput2'}
              style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'} placeholder={strings.ChangeName.lastname} onChangeText={lastName => this.setState({ lastName })}
              multiline={false}
              numberOfLines={1} editable={true}
              value={this.state.lastName}
            />
            <View style={{ flex: 1, alignItems: 'flex-start', flexDirection: 'row', marginTop: 30, marginBottom: 10, justifyContent: 'space-between' }}>
              <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 165, height: 1 }} />
              <View style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 165, height: 1 }} />
            </View>
            <Text style={styles.Text2}>
              {strings.ChangeName.display}
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'}
              placeholder= ""
              numberOfLines={1}
              editable={true}
              multiline={false}
              autoCorrect={true}
            />
            {lastNameValidator || !lastNameInput ?
              <Text /> : <Text style={styles.invalid}>{strings.ChangeName.alertlastname}</Text>}
          </View>
        <View>
          <Text style={styles.TextInput3}>{strings.ChangeName.text2}</Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}
